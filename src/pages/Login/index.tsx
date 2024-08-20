import { Image, Text, TouchableOpacity, View } from 'react-native'

import { useAuth0 } from 'react-native-auth0'
import ShowToast from '../../utils/ShowToast'

const Login = () => {
  const { authorize, error, isLoading } = useAuth0()

  const onLogin = async () => {
    try {
      await authorize()
    } catch (e) {
      console.log(`error login`, e)
      ShowToast({
        message: e?.message || 'Something went wrong',
        type: 'error',
      })
    }
  }

  return (
    <View className="flex-1 justify-center items-center p-3 bg-violet gap-y-8">
      <View>
        <Text className="font-outfit text-2xl text-center App  text-white">
          Welcome to
        </Text>
        <Text className="font-outfit text-3xl text-center App  text-white">
          Online Course App
        </Text>
      </View>

      <TouchableOpacity
        className=" flex-row w-[250px] rounded-3xl bg-white px-6 py-2 items-center justify-center"
        onPress={onLogin}
      >
        <Text className="font-outfit text-xl text-black text-center">
          Login
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default Login
