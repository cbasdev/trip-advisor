import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

//Pages
import Account from '../screens/Account/Account'

const Stack = createStackNavigator()


export default function AccountStack(){
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name = 'account-stack'
                component = {Account}
                options = {{title: 'Mi Cuenta'}}
            />
        </Stack.Navigator>
    )
}