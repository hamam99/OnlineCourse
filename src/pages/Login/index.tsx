import { Image, Text, TouchableOpacity, View } from 'react-native'

const Login = () => {
  return (
    <View className="flex-1 justify-center items-center p-3 bg-violet gap-y-8">
      <View>
        <Text className="font-outfit text-2xl text-center App  text-white">
          Welcome to
        </Text>
        <Text className="font-outfit text-3xl text-center App  text-white">
          OnlineCourse App
        </Text>
      </View>

      <TouchableOpacity className=" flex-row px-0-4 w-fit rounded-3xl bg-white px-6 py-2 gap-x-2 items-center">
        <Image
          source={require('../../assets/icons/google.png')}
          style={{
            width: 24,
            height: 24,
          }}
        />
        <Text className="font-outfit text-xl text-black">
          Login With Google
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default Login
