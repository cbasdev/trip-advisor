import React from 'react'
import { StyleSheet, View, ScrollView, Text, Image} from 'react-native'
import { Divider } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'


export default function Login(){
    return(
        <ScrollView>
            <Image 
                style={styles.logo} 
                resizeMode='contain'
                source = {require('../../../assets/img/5-tenedores-letras-logo.png')}
            />
            
            <View style={styles.viewContainer}>
                <Text>Login Form</Text>
                <Text> <CreateAcount/> </Text>
            </View>
            <Divider style={ styles.divider } />

            <Text>Social Login</Text>
        </ScrollView>
    )
}


function CreateAcount(){

    const navigation = useNavigation()

    return (
        <Text style={styles.textRegister}>
            ¿Aún no tienes una cuenta? {' '}
            <Text
                onPress={() => 
                    navigation.navigate('register')
                    
                } 
                style={styles.btnRegister}>
                Registrate
            </Text>
        </Text>
    )
}


const styles = StyleSheet.create({
    logo: {
        width: '100%',
        height: 150,
        marginTop: 20
    },
    viewContainer: {
        marginRight: 40,
        marginLeft: 40,
    },
    textRegister: {
        marginTop: 15,
        marginLeft: 10,
        marginRight: 10
    },
    btnRegister: {
        color: '#00a680',
        fontWeight: 'bold'
    },
    divider: {
        backgroundColor: '#00a680',
        margin: 40 
    }
    
})