import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

//Pages
import Search from '../screens/Search'

const Stack = createStackNavigator()


export default function SearchStack(){
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name = 'search-stack'
                component = {Search}
                options = {{title: 'Buscador'}}
            />
        </Stack.Navigator>
    )
}