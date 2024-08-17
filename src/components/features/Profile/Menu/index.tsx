import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import { IconBook, IconLogout2, IconUserEdit } from 'tabler-icons-react-native'
import Colors from '../../../../utils/Colors'
import ShowToast from '../../../../utils/ShowToast'
import Toast from 'react-native-toast-message'

const Menu = () => {
  const ListMenu = [
    {
      label: 'Update Profile',
      onPress: () => {
        ShowToast({
          message: 'In maintenance',
        })
      },
      icon: <IconUserEdit size={32} color={Colors.violet} />,
    },
    {
      label: 'My Course',
      onPress: () => {},
      icon: <IconBook size={32} color={Colors.violet} />,
    },
    {
      label: 'Logout',
      onPress: () => {},
      icon: <IconLogout2 size={32} color={Colors.violet} />,
    },
  ]

  const renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        className="flex-row h-[60px] items-center"
        style={{
          gap: 8,
        }}
        onPress={item?.onPress}
      >
        {item?.icon}
        <Text className="font-outfit text-black text-lg">{item?.label}</Text>
      </TouchableOpacity>
    )
  }

  return (
    <View className="mt-4 mx-4">
      <FlatList
        data={ListMenu}
        renderItem={renderItem}
        contentContainerStyle={{
          gap: 2,
        }}
      />
    </View>
  )
}

export default Menu
