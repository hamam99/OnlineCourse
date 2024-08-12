import { Image, Text, View } from 'react-native'
import IconPoin from '../../../assets/icons/coin.png'

type PointsProps = {
  poin: number
}
const Points = ({ poin = 0 }: PointsProps) => {
  return (
    <View className="flex-row items-center">
      <Image source={IconPoin} className="rounded-full w-[50px] h-[50px]" />
      <Text className="text-xl font-bold font-outfit text-white">{poin}</Text>
    </View>
  )
}

export default Points
