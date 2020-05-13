import React from 'react'
import { Text, View, Button } from 'react-native'
import * as firebase from 'firebase'


export default function UserLogged(){
    return (
        <View>
            <Text>
                Loggeado
            </Text>

            <Button 
                title='Cerrar Sesion'
                onPress={()=>{
                    firebase.auth().signOut()
                }}
            />
        </View>
    )
}


