import React from 'react'
import { View, Button, Text } from 'react-native'
import { useMutation } from '@apollo/react-hooks'
import { AUTHENTICATE } from '../api/mutations'

export default function Login() {
  const [authenticate, { loading, error, data }] = useMutation(AUTHENTICATE)

  const onPress = () => {
    authenticate({
      variables: { username: 'admin', password: '123' },
      context: { uri: 'http://localhost:3000/auth' }
    })
  }

  return (
    <View>
      <Button
        disabled={loading}
        title={loading ? 'Loading' : 'Authenticate'}
        onPress={onPress}
      />
      {error && <Text>Error authenticating...</Text>}
      {data && (
        <Text style={{ width: 300 }}>
          Authenticated: <br /> {data.authenticate.token}
        </Text>
      )}
    </View>
  )
}
