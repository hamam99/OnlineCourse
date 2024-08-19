import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { RouteName } from './RouteName'
import Login from '../pages/Login'
import Home from '../pages/Home'
import CourseDetail from '../pages/CourseDetail'
import CourseVideo from '../pages/CourseVideo'
import Profile from '../pages/Profile'
import MyCourse from '../pages/MyCourse'

const Stack = createNativeStackNavigator()

const AuthNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={RouteName.HOME}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={RouteName.HOME} component={Home} />
      <Stack.Screen name={RouteName.COURSE_DETAIL} component={CourseDetail} />
      <Stack.Screen name={RouteName.COURSE_VIDEO} component={CourseVideo} />
      <Stack.Screen name={RouteName.PROFILE} component={Profile} />
      <Stack.Screen name={RouteName.MY_COURSE} component={MyCourse} />
    </Stack.Navigator>
  )
}

export default AuthNavigation
