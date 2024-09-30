import { View } from 'react-native'
import ChapterList from '../../../shared/ChapterList'
import useNavigation from '../../../../navigation/useNavigation'
import { RouteName } from '../../../../navigation/RouteName'
import useSelectedCourse from '../../../../store/useSelectedCourse'

const Chapters = () => {
  const {
    isPurchased,
    selectedCourse: course,
    setSelectedChapter,
    selectedChapter,
  } = useSelectedCourse(state => state)

  const { navigate } = useNavigation()

  return (
    <View className="bg-white p-4 rounded-2xl">
      <ChapterList
        title="Chapters"
        chapters={course?.chapters || []}
        onChapterClick={item => {
          setSelectedChapter(item)
          navigate(RouteName.COURSE_VIDEO)
        }}
        scrollEnabled={false}
        isPurchased={true}
      />
    </View>
  )
}

export default Chapters
