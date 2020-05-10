import React, { useState, useEffect } from 'react'
import * as firebase from 'firebase'

//import subscreens
import UserGuest from './UserGuest'
import UserLogged from './UserLogged'

//Components
import Loading from '../../components/Loading'

export default function Account(){
    
    const [login, setLogin] = useState(null)

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) =>{
            if(user){
                setLogin(false)
            }
            else{
                setLogin(true)
            }
        })
    }, [])

    if (login === null){
        return <Loading isVisible={true} text='Cargando...'/>
    }

    if (login){
        return <UserLogged />
    }
    else {
        <UserGuest />
    }
    
}
