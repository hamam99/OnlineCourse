import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { RouteName } from './RouteName'
import Login from '../pages/Login'
import Home from '../pages/Home'

const Stack = createNativeStackNavigator()

const RootNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={RouteName.HOME}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={RouteName.LOGIN} component={Login} />
      <Stack.Screen name={RouteName.HOME} component={Home} />
    </Stack.Navigator>
  )
}

export default RootNavigation
