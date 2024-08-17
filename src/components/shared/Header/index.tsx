import { TouchableOpacity, View } from 'react-native'
import { IconCircleArrowLeft } from 'tabler-icons-react-native'
import useNavigation from '../../../navigation/useNavigation'

type HeaderProps = {
  title?: string
}
const Header = () => {
  const goBack = useNavigation().goBack
  return (
    <View className="bg-transparent py-2">
      <TouchableOpacity onPress={goBack}>
        <IconCircleArrowLeft size={28} color="black" />
      </TouchableOpacity>
    </View>
  )
}

export default Header
