import { Text, View } from 'react-native'
import FastImage from 'react-native-fast-image'

const PersonalData = () => {
  const MockUser = {
    icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Errol_Flynn1.jpg/340px-Errol_Flynn1.jpg',
    name: 'Subedjo Bejdo',
    email: 'subedjo.bejdo@gmail.com',
  }
  return (
    <View
      className=" bg-white justify-center items-center"
      style={{
        gap: 3,
      }}
    >
      <FastImage
        source={{
          uri: MockUser.icon,
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
        {MockUser.name}
      </Text>
      <Text className="font-outfit text-base">{MockUser.email}</Text>
    </View>
  )
}

export default PersonalData
