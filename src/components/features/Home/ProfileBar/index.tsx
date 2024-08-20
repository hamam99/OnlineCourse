import { Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import FastImage from 'react-native-fast-image'
import { Points } from '../../../shared'
import useNavigation from '../../../../navigation/useNavigation'
import { IconSettings } from 'tabler-icons-react-native'
import { RouteName } from '../../../../navigation/RouteName'
import { useAuth0 } from 'react-native-auth0'

const ProfileBar = () => {
  const navigation = useNavigation()
  const { user } = useAuth0()

  return (
    <View className="flex-row py-3 bg-violet items-center justify-between">
      <View className="flex-row items-center gap-2">
        <FastImage
          source={{
            uri: user?.picture,
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
            {user?.name}
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
