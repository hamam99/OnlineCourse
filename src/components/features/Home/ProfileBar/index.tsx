import { Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import FastImage from 'react-native-fast-image'
import { Points } from '../../../shared'
import useNavigation from '../../../../navigation/useNavigation'
import { IconSettings } from 'tabler-icons-react-native'
import { RouteName } from '../../../../navigation/RouteName'

const ProfileBar = () => {
  const MockUser = {
    icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Errol_Flynn1.jpg/340px-Errol_Flynn1.jpg',
    name: 'Hamam',
    point: 3500,
  }

  const navigation = useNavigation()
  return (
    <View className="flex-row py-3 bg-violet items-center justify-between">
      <View className="flex-row items-center gap-2">
        <FastImage
          source={{
            uri: MockUser.icon,
          }}
          style={{
            width: 64,
            height: 64,
            borderRadius: 70,
          }}
        />
        <View>
          <Text className="font-outfit text-base text-white">Welcome,</Text>
          <Text className="font-outfit  text-white text-xl font-bold">
            {MockUser.name}
          </Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(RouteName.PROFILE)
        }}
      >
        <IconSettings size={28} color="white" />
      </TouchableOpacity>
    </View>
  )
}

export default ProfileBar
