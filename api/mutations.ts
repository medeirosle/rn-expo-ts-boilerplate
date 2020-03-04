import { gql } from 'apollo-boost'

export const AUTHENTICATE = gql`
  mutation($username: String, $password: String) {
    authenticate(username: $username, password: $password) {
      token
    }
  }
`
