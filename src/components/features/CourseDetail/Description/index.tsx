import { Button, Text, TouchableOpacity, View } from 'react-native'
import { ICourse } from '../../../../types/ICourse'
import FastImage from 'react-native-fast-image'
import {
  IconBook,
  IconChartBar,
  IconClock,
  IconUserCircle,
} from 'tabler-icons-react-native'
import { useRoute } from '@react-navigation/native'
import { convertToTitleCase } from '../../../../utils/convertToTitleCase'
import useSelectedCourse from '../../../../store/useSelectedCourse'
import useMutationEnrollCourse from '../../../../hooks/apollo/useMutationEnrollCourse'
import Loading from '../../../shared/Loading'

const Description = () => {
  const { isPurchased, selectedCourse: course } = useSelectedCourse(
    state => state,
  )

  const { enrollCourse, loading, data, error } = useMutationEnrollCourse()

  const onPressEnroll = () => {
    enrollCourse(course?.id!!)
  }
  return (
    <View
      className="w-full bg-white rounded-2xl px-3 py-4"
      style={{
        gap: 12,
      }}
    >
      <FastImage
        source={{
          uri: course?.thumb?.url,
        }}
        resizeMode="cover"
        className="w-full h-[216px] rounded-xl"
      />
      <Text className="font-outfit text-black font-medium text-2xl">
        {course?.title}
      </Text>
      <Text className="font-outfit text-violet font-bold text-xl">
        {convertToTitleCase(course?.category)}
      </Text>
      <View className="flex-row items-center justify-between">
        <View className="gap-y-1">
          <View className="flex-row items-center gap-2">
            <IconUserCircle size={24} />
            <Text className="font-outfit">{course?.creator}</Text>
          </View>
          <View className="flex-row items-center gap-2">
            <IconBook size={24} />
            <Text className="font-outfit">
              {course?.chapters?.length} Chapter
            </Text>
          </View>
        </View>
        <View className="gap-y-1">
          <View className="flex-row items-center gap-2">
            <IconClock size={24} />
            <Text className="font-outfit">{course?.duration}</Text>
          </View>
          <View className="flex-row items-center gap-2">
            <IconChartBar size={24} />
            <Text className="font-outfit">{course?.level}</Text>
          </View>
        </View>
      </View>

      <Text className="font-outfit text-black font-medium text-2xl">
        Description
      </Text>
      <Text className="font-outfit font-normal text-gray-500 text-base">
        {course?.description}
      </Text>

      {/* {!isPurchased && (
        <TouchableOpacity
          className="w-full h-[50px] items-center justify-center bg-violet rounded-lg"
          onPress={onPressEnroll}
        >
          <Text className="text-white font-outfit text-base">ENROLL</Text>
        </TouchableOpacity>
      )} */}
      <Loading isLoading={loading} />
    </View>
  )
}

export default Description
