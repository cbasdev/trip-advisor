import React from 'react';
import { YellowBox } from 'react-native'
import { firebaseApp } from './app/utils/firebase'
import Navigation from './app/navigations/Navigation'

YellowBox.ignoreWarnings(['Setting a timer'])

export default function App() {

  return (
    <Navigation />  
  )
}

