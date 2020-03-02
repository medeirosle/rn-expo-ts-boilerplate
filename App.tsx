import React from 'react'
import { render } from 'react-dom'
import { StyleSheet, Text, View } from 'react-native'
import { ApolloProvider } from 'react-apollo'
import { ApolloProvider as ApolloHooksProvider } from '@apollo/react-hooks'
import ApolloClient from './lib/apollo'

import Login from './components/Login'

export default function App() {
  return (
    <ApolloProvider client={ApolloClient}>
      <ApolloHooksProvider client={ApolloClient}>
        <View style={styles.container}>
          <Text>Open up App.tsx to start working on your app!</Text>
          <Login />
        </View>
      </ApolloHooksProvider>
    </ApolloProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

render(App(), document.getElementById('root'))
