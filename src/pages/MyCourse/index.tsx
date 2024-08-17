import {
  FlatList,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native'
import { Header } from '../../components/shared'
import { ICourse } from '../../types/ICourse'

import Courses from '../../components/shared/Courses'

const MyCourse = () => {
  const MockCourse: ICourse[] = [
    {
      id: 1,
      durations: '2h:30 min',
      total_chapter: 15,
      thumb: 'https://i.ytimg.com/vi/2lVDktWK-pc/maxresdefault.jpg',
      title: 'Introduction to C++',
      type: 'Free',
      progress: 0,
      is_purchased: true,
      price: 0,
    },
    {
      id: 2,
      durations: '2h:30 min',
      total_chapter: 15,
      thumb: 'https://i.ytimg.com/vi/2lVDktWK-pc/maxresdefault.jpg',
      title: 'Introduction to C++',
      progress: 10,
      is_purchased: true,
      price: 0,
    },
    {
      id: 3,
      durations: '2h:30 min',
      total_chapter: 15,
      thumb: 'https://i.ytimg.com/vi/2lVDktWK-pc/maxresdefault.jpg',
      title: 'Introduction to C++',
      progress: 10,
      is_purchased: true,
      price: 0,
    },
    {
      id: 4,
      durations: '2h:30 min',
      total_chapter: 15,
      thumb: 'https://i.ytimg.com/vi/2lVDktWK-pc/maxresdefault.jpg',
      title: 'Introduction to C++',
      progress: 10,
      is_purchased: true,
      price: 0,
    },
  ]

  return (
    <View className="flex-1 bg-white p-2">
      <Header />
      <Courses
        courses={MockCourse}
        title="My Course"
        isVertical
        listClassName="mb-[100px]"
      />
    </View>
  )
}

export default MyCourse
