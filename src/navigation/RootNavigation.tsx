import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useAuth0 } from 'react-native-auth0'
import NonAuthNavigation from './NonAuthNavigation'
import AuthNavigation from './AuthNavigation'

const RootNavigation = () => {
  const { user } = useAuth0()

  if (user) {
    return <AuthNavigation />
  }

  return <NonAuthNavigation />
}

export default RootNavigation
