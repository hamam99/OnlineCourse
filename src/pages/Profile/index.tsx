import { Text, TouchableOpacity, View } from 'react-native'
import FastImage from 'react-native-fast-image'
import { IconCircleArrowLeft } from 'tabler-icons-react-native'
import { Header } from '../../components/shared'
import { Menu, PersonalData } from '../../components/features/Profile'

const Profile = () => {
  return (
    <View className="flex-1 bg-white">
      <View className="w-full bg-violet h-[160px]">
        <Header />
      </View>
      <View className="px-4">
        <PersonalData />
        <Menu />
      </View>
    </View>
  )
}

export default Profile
