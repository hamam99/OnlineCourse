import { Button, Text, TouchableOpacity, View } from 'react-native'
import { ICourseDetail } from '../../../../types/ICourse'
import FastImage from 'react-native-fast-image'
import {
  IconBook,
  IconChartBar,
  IconCircleDashedNumber0,
  IconClock,
  IconUserCircle,
} from 'tabler-icons-react-native'

const Description = () => {
  const MockDesription: ICourseDetail = {
    id: 1,
    durations: '2h:30 min',
    total_chapter: 15,
    thumb: 'https://i.ytimg.com/vi/2lVDktWK-pc/maxresdefault.jpg',
    title: 'Introduction to C++',
    type: 'Free',
    progress: 0,
    is_purchased: false,
    description:
      'Welcome to an exciting journey of building a cutting-edge FullStack Learning Management System (LMS) application with Next.js 13! In this in-depth tutorial, we will explore the power of Next.js, React.js.',
    level: 'Basic',
    chapters: [
      {
        id: 1,
        title: 'Introduction',
        url: 'https://www.youtube.com/watch?v=MNeX4EGtR5Y',
        isLocked: false,
      },
      {
        id: 2,
        title: 'Getting Started',
        url: 'https://www.youtube.com/watch?v=sNMtjs_wQiE',
        isLocked: false,
      },
      {
        id: 3,
        title: 'What is C++',
        url: 'https://www.youtube.com/watch?v=sNMtjs_wQiE',
        isLocked: true,
      },
    ],
    creator: 'Abah Haji',
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
          uri: MockDesription.thumb,
        }}
        resizeMode="cover"
        className="w-full h-[216px] rounded-xl"
      />
      <Text className="font-outfit text-black font-medium text-2xl">
        {MockDesription.title}
      </Text>
      <Text className="font-outfit text-violet font-bold text-xl">
        {MockDesription.type}
      </Text>
      <View className="flex-row items-center justify-between">
        <View className="gap-y-1">
          <View className="flex-row items-center gap-2">
            <IconUserCircle size={24} />
            <Text className="font-outfit">{MockDesription.creator}</Text>
          </View>
          <View className="flex-row items-center gap-2">
            <IconBook size={24} />
            <Text className="font-outfit">
              {MockDesription.total_chapter} Chapter
            </Text>
          </View>
        </View>
        <View className="gap-y-1">
          <View className="flex-row items-center gap-2">
            <IconClock size={24} />
            <Text className="font-outfit">{MockDesription.durations}</Text>
          </View>
          <View className="flex-row items-center gap-2">
            <IconChartBar size={24} />
            <Text className="font-outfit">{MockDesription.level}</Text>
          </View>
        </View>
      </View>

      <Text className="font-outfit text-black font-medium text-2xl">
        Description
      </Text>
      <Text className="font-outfit font-normal text-gray-500 text-base">
        {MockDesription.description}
      </Text>

      {!MockDesription.is_purchased && (
        <TouchableOpacity className="w-full h-[50px] items-center justify-center bg-violet rounded-lg">
          <Text className="text-white font-outfit text-base">ENROLL</Text>
        </TouchableOpacity>
      )}
    </View>
  )
}

export default Description
