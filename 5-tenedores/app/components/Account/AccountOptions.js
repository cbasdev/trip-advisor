import React, { useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { ListItem } from 'react-native-elements'
import { map } from 'lodash'

//Components
import Modal from '../Modal'


export default function AccountOptions(props){
    const { userInfo, toastRef } = props
    const [showModal, setShowModal] = useState(false)
    const [renderComponent, setRenderComponent] = useState(null)


    const selectedComponent = (key) => {
        switch(key) {
            
            case 'displayName':
                setRenderComponent(
                    <Text>Cambiando Nombre y Apellidos</Text>
                )
                setShowModal(true)
                break
            case 'email':
                setRenderComponent(
                    <Text>Cambiando Email</Text>
                )
                setShowModal(true)
                break
            case 'password':
                setRenderComponent(
                    <Text>Cambiando Password</Text>
                )
                setShowModal(true)
                break
            
            default: 
                setRenderComponent(null)
                setShowModal(false)
                break
            
        }
    }

    const menuOptions = generateOptions(selectedComponent)

    return (
        <View>
            { map(menuOptions, (menu, index) => (
                <ListItem
                    key={index}
                    title={menu.title}
                    leftIcon={{
                        type: menu.iconType,
                        name: menu.iconNameLeft,
                        color: menu.iconColorLeft,
                    }}
                    rightIcon={{
                        type: menu.iconType,
                        name: menu.iconNameRight,
                        color: menu.iconColorRight,
                    }}
                    containerStyle={ styles.menuItem }
                    onPress={ menu.onPress }
                />
            ))}
            {renderComponent && 
                <Modal isVisible={showModal} setIsVisible={setShowModal}>
                    {renderComponent}
                </Modal>
            }
        </View>
    )
}

function generateOptions(selectedComponent){
    return [
        {
            title: 'Cambiar Nombre y Apellidos',
            iconType: 'material-community',
            iconNameLeft: 'account-circle',
            iconColorLeft: '#ccc',
            iconNameRight: 'chevron-right',
            iconColorRigth: '#ccc',
            onPress: () => selectedComponent('displayName')
        },
        {
            title: 'Cambiar Email',
            iconType: 'material-community',
            iconNameLeft: 'at',
            iconColorLeft: '#ccc',
            iconNameRight: 'chevron-right',
            iconColorRigth: '#ccc',
            onPress: () => selectedComponent('email')

        },
        {
            title: 'Cambiar Contraseña',
            iconType: 'material-community',
            iconNameLeft: 'lock-reset',
            iconColorLeft: '#ccc',
            iconNameRight: 'chevron-right',
            iconColorRigth: '#ccc',
            onPress: () => selectedComponent('password')

        }
    ]
}

const styles = StyleSheet.create({
    menuItem: {
        borderBottomWidth: 1,
        borderBottomColor: '#e3e3e3'
    }
})