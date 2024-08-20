import { Text, View } from 'react-native'
import { useAuth0 } from 'react-native-auth0'
import FastImage from 'react-native-fast-image'

const PersonalData = () => {
  const { user } = useAuth0()

  return (
    <View
      className=" bg-white justify-center items-center"
      style={{
        gap: 3,
      }}
    >
      <FastImage
        source={{
          uri: user?.picture,
        }}
        style={{
          width: 120,
          height: 120,
          borderRadius: 120,
          alignSelf: 'center',
          marginTop: -60,
        }}
      />
      <Text className="text-black font-outfit text-xl font-bold">
        {user?.name}
      </Text>
      <Text className="font-outfit text-base">{user?.email}</Text>
    </View>
  )
}

export default PersonalData
