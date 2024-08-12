import { TextInput, TouchableOpacity, View } from 'react-native'
import { IconGlass, IconSearch } from 'tabler-icons-react-native'

const SearchBar = () => {
  return (
    <View className="bg-white w-full rounded-[100px] flex-row items-center">
      <TextInput
        placeholder="Search Project"
        textAlign="left"
        className="flex-1 px-5"
      />
      <TouchableOpacity className="bg-cyan-300 rounded-full w-[40px] h-[40px] justify-center items-center mr-2">
        <IconSearch color="white" size={24} />
      </TouchableOpacity>
    </View>
  )
}

export default SearchBar
