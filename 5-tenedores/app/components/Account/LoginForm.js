import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Input, Icon, Button } from 'react-native-elements'
import { isEmpty } from 'lodash'

import { useNavigation } from '@react-navigation/native'

import * as firebase from 'firebase'

//components
import { validateEmail } from '../../utils/validations'
import Loading from '../Loading'

export default function LoginForm(props) {

    const { toastRef } = props

    const [showPassword, setShowPassword] = useState(false)
    const [formData, setFormData] = useState(defaultFormValue())    
    const [loading, setLoading] = useState(false)

    const navigation = useNavigation()

    const onChange = (e, type) => {
        setFormData({ ...formData, [type]: e.nativeEvent.text})
    }

    const onSubmit = () => {
        if(isEmpty(formData.email) || isEmpty(formData.password)){
            toastRef.current.show('Todos los campos son obligatorios')
        }
        else if(!validateEmail(formData.email)){
            toastRef.current.show('El email no es correcto')
        }
        else{
            setLoading(true)
            firebase
                .auth()
                .signInWithEmailAndPassword(formData.email, formData.password)
                .then(() => {
                    setLoading(false)
                    console.log('logeado');
                    navigation.navigate('account-stack')
                })
                .catch(() => {
                    setLoading(false)
                    toastRef.current.show('Email o contraseña incorrecta')
                })
        }
    }

    return (
        <View style={styles.formContainer}>
            <Input 
                placeholder='Correo electronico'
                containerStyle={styles.inputForm}
                onChange = { (e) => onChange(e, 'email')}
                rightIcon = {
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
                secureTextEntry={ !showPassword ? true : false}
                onChange = { (e) => onChange(e, 'password')}
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
            <Button 
                title='Iniciar Sesion'
                containerStyle={styles.btnContainerLogin}
                buttonStyle={styles.btnLogin}  
                onPress = { onSubmit }      
            />
            <Loading 
                isVisible={loading}
                text='Iniciando Sesión'
            />
        </View>
    )
}

function defaultFormValue(){
    return {
        email: '',
        password: ''
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
        marginTop: 20
    },
    btnContainerLogin: {
        marginTop: 20,
        width: '95%'
    },
    btnLogin: {
        backgroundColor: '#00a680'
    },
    iconRight: {
        color: '#c1c1c1',
    }
})