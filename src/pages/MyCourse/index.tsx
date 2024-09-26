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
import useGetCourseUser from '../../hooks/apollo/useGetCourseUser'

const MyCourse = () => {
  const { courses: coursesUser, error, loading } = useGetCourseUser()

  return (
    <View className="flex-1 bg-white p-2">
      <Header />
      <Courses
        courses={coursesUser}
        title="My Course"
        isVertical
        listClassName="mb-[100px]"
        isPurchased={true}
      />
    </View>
  )
}

export default MyCourse
