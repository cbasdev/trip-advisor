import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Input, Icon, Button } from 'react-native-elements'
import { size, isEmpty } from 'lodash'
import * as firebase from 'firebase'
import { useNavigation } from '@react-navigation/native'

// Utils
import { validateEmail } from '../../utils/validations'

// Components
import Loading from '../../components/Loading'

export default function RegisterForm(props){

    const {toastRef} = props

    const [showPassword, setShowPassword] = useState(false)
    const [showRepeatPassword, setshowRepeatPassword] = useState(false)
    const [formData, setformData] = useState(defaultFormValue())
    const [loading, setloading] = useState(false)

    const navigation = useNavigation()

    const onSubmit = () => {
        if(isEmpty(formData.email) || 
        isEmpty(formData.password) || 
        isEmpty(formData.repeatPassword)){
            toastRef.current.show('Todos los campos son obligatorios')
        }
        else if(!validateEmail(formData.email)) {
            toastRef.current.show('El email no es correcto')
        } 
        else if(formData.password != formData.repeatPassword){
            toastRef.current.show('Las contraseñas no coinciden')
        }
        else if(size(formData.password) < 6){
            toastRef.current.show('La contraseña debe tener almenos 6 caracteres')
        }
        else {
            setloading(true)
            firebase
            .auth()
            .createUserWithEmailAndPassword(formData.email, formData.password)
            .then(() => {
                setloading(false)
                navigation.navigate('account-stack')
            })
            .catch(() => {
                setloading(false)
                toastRef.current.show('El email ya está en uso, pruebe con otro')
            })
        }
    }

    const onChange = (e, type) => {
        setformData({
            ...formData, [type]: e.nativeEvent.text
        })

    }

    return(
        <View style = {styles.formContainer}>
            <Input 
                placeholder='Correo Electrónico'
                containerStyle={styles.inputForm}
                onChange={e => onChange(e, 'email')}
                rightIcon={
                    <Icon
                        type='material-community'
                        name='at'
                        iconStyle={styles.iconRight}
                    />
                }
            />
            <Input 
                placeholder='Contraseña'
                containerStyle={styles.inputForm}
                password={true}
                secureTextEntry={showPassword ? false : true}
                onChange={e => onChange(e, 'password')}
                rightIcon={
                    <Icon 
                        type='material-community'
                        name={showPassword ? 'eye-off-outline' : 'eye-outline'}
                        iconStyle={styles.iconRight}
                        onPress={ () => {
                            setShowPassword(!showPassword)
                        }}
                    />
                }
            />
            <Input 
                placeholder='Repetir Contraseña'
                containerStyle={styles.inputForm}
                password={true}
                secureTextEntry={showRepeatPassword ? false : true}
                onChange={e => onChange(e, 'repeatPassword')}
                rightIcon={
                    <Icon 
                        type='material-community'
                        name={ showRepeatPassword ? 'eye-off-outline' : 'eye-outline'}
                        iconStyle={styles.iconRight}
                        onPress={ () => {
                            setshowRepeatPassword(!showRepeatPassword)
                        }}
                    />
                }
            />
            <Button 
                title='Unirse'
                containerStyle={styles.btnContainerRegister}
                buttonStyle={styles.btnRegister}
                onPress={onSubmit}
            />

            <Loading 
                isVisible = {loading}
                text = 'Creando Cuenta'
            />
        </View>
    )
}


function defaultFormValue() {
    return {
        email : '',
        password: '',
        repeatPassword: ''
    }
}

const styles = StyleSheet.create({
    formContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30
    },
    inputForm: {
        width: '100%',
        marginTop: 20,
    },
    btnContainerRegister: {
        marginTop: 20,
        width: '95%'
    },
    btnRegister: {
        backgroundColor: '#00a680'
    },
    iconRight:{
        color: '#c1c1c1',
    }
})