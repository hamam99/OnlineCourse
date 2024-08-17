import { TouchableOpacity, View } from 'react-native'
import { IconCircleArrowLeft } from 'tabler-icons-react-native'

type HeaderProps = {
  title?: string
}
const Header = () => {
  return (
    <View className="bg-transparent py-2">
      <TouchableOpacity>
        <IconCircleArrowLeft size={28} color="black" />
      </TouchableOpacity>
    </View>
  )
}

export default Header
