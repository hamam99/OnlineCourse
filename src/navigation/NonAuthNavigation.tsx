import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { RouteName } from './RouteName'
import Login from '../pages/Login'
import Home from '../pages/Home'
import CourseDetail from '../pages/CourseDetail'
import CourseVideo from '../pages/CourseVideo'
import Profile from '../pages/Profile'
import MyCourse from '../pages/MyCourse'
import Splash from '../pages/Splash'

const Stack = createNativeStackNavigator()

const NonAuthNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={RouteName.SPLASH}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={RouteName.SPLASH} component={Splash} />
      <Stack.Screen name={RouteName.LOGIN} component={Login} />
    </Stack.Navigator>
  )
}

export default NonAuthNavigation
