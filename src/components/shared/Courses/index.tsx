import classNames from 'classnames'
import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import FastImage from 'react-native-fast-image'
import { IconBook, IconClock, IconHourglass } from 'tabler-icons-react-native'
import useNavigation from '../../../navigation/useNavigation'
import { RouteName } from '../../../navigation/RouteName'
import { ICourse } from '../../../types/ICourse'
import { convertToTitleCase } from '../../../utils/convertToTitleCase'

type CoursesProps = {
  title?: string
  courses?: ICourse[]
  titleClassNames?: string
  isVertical?: boolean
  containerClassName?: string
  listClassName?: string
}
const Courses = (props: CoursesProps) => {
  const {
    title,
    courses = [],
    titleClassNames,
    isVertical = false,
    containerClassName,
    listClassName,
  } = props

  const navigation = useNavigation()

  const categoryCourses = convertToTitleCase(title)

  const renderItem = ({ item }: { item: ICourse }) => {
    const { progress = 0, total_chapter = 0 } = item

    return (
      <TouchableOpacity
        className="bg-white rounded-2xl p-3 border-2 border-[#00000029] w-fit h-fit "
        style={{
          gap: 4,
        }}
        onPress={() => {
          navigation.navigate(RouteName.COURSE_DETAIL)
        }}
      >
        <FastImage
          source={{
            uri: item?.thumb?.url,
          }}
          className="w-[246px] h-[128px] rounded-2xl"
        />
        <Text className="font-outfit text-xl text-black font-medium">
          {item?.title}
        </Text>
        <View className="flex-row justify-between">
          <View className="flex-row items-center gap-1">
            <IconBook size={18} />
            <Text className="font-outfit text-xs text-black">
              {item?.chapters?.length} Chapters
            </Text>
          </View>
          <View className="flex-row items-center gap-1">
            <IconClock size={18} />
            <Text className="font-outfit text-xs text-black">
              {item?.duration}
            </Text>
          </View>
        </View>
        {item?.is_purchased ? (
          <View className="w-fit bg-gray-300 h-2 rounded-full">
            <View
              className={classNames('bg-violet h-full rounded-full')}
              style={{
                width: `${(progress / total_chapter) * 100}%`,
              }}
            />
          </View>
        ) : (
          <Text className="font-outfit text-base text-violet">
            {Number(item?.price) > 0 ? '$' + item?.price : 'Free'}
          </Text>
        )}
      </TouchableOpacity>
    )
  }

  return (
    <View className={classNames('gap-2 w-fit h-fit', containerClassName)}>
      <Text
        className={classNames(
          'font-outfit text-2xl text-black font-bold',
          titleClassNames,
        )}
      >
        {categoryCourses}
      </Text>
      <FlatList
        data={courses}
        renderItem={renderItem}
        horizontal={!isVertical}
        contentContainerStyle={{
          gap: 16,
        }}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        className={classNames(listClassName)}
      />
    </View>
  )
}
export default Courses
