import { useEffect } from 'react'
import { Text, View } from 'react-native'
import useNavigation from '../../navigation/useNavigation'
import { RouteName } from '../../navigation/RouteName'

const Splash = () => {
  const navigation = useNavigation()

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate(RouteName.LOGIN)
    }, 3000)
  }, [])

  return (
    <View className="flex-1 bg-violet justify-center items-center gap-0">
      <Text className="text-4xl font-outfit text-white">Online Course App</Text>
      <Text className="text-xl font-outfit text-white">Learn Together</Text>
    </View>
  )
}

export default Splash
