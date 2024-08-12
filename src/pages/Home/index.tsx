import { Text, View } from 'react-native'
import { ProfileBar, SearchBar } from '../../components/features/Home'

const Home = () => {
  return (
    <View className="flex-1 bg-white ">
      <View className="bg-violet p-5 pb-10">
        <ProfileBar />
        <SearchBar />
      </View>
      <Text>HOME</Text>
    </View>
  )
}
export default Home
