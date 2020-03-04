import React from 'react'
import config from './config'
import ApolloClient from 'apollo-boost'

export default new ApolloClient({
  uri: config.API_URL
})
