import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import { ICourseChapter } from '../../../../types/ICourse'
import ChapterList from '../../../shared/ChapterList'
import useNavigation from '../../../../navigation/useNavigation'
import { RouteName } from '../../../../navigation/RouteName'

const Chapters = () => {
  const MockChapters: ICourseChapter[] = [
    {
      id: 1,
      title: 'Introduction',
      url: 'https://www.youtube.com/watch?v=MNeX4EGtR5Y',
      isLocked: false,
      isWatched: true,
    },
    {
      id: 2,
      title: 'Getting Started',
      url: 'https://www.youtube.com/watch?v=sNMtjs_wQiE',
      isLocked: false,
      isWatched: false,
    },
    {
      id: 3,
      title: 'What is C++',
      url: 'https://www.youtube.com/watch?v=sNMtjs_wQiE',
      isLocked: true,
      isWatched: false,
    },
  ]

  const { navigate } = useNavigation()
  return (
    <View className="bg-white p-4 rounded-2xl">
      <ChapterList
        title="Chapters"
        chapters={MockChapters}
        onChapterClick={item => {
          navigate(RouteName.COURSE_VIDEO)
        }}
        scrollEnabled={false}
      />
    </View>
  )
}

export default Chapters
