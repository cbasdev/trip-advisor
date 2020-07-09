import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

//Pages
import TopRestaurants from '../screens/TopRestaurants'

const Stack = createStackNavigator()


export default function TopRestaurantsStack(){
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name = 'top-restaurants'
                component = {TopRestaurants}
                options = {{title: 'Mejores Restaurantes'}}
            />
        </Stack.Navigator>
    )
}