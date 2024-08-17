import { ScrollView, Text, View } from 'react-native'
import { Header } from '../../components/shared'
import { Chapters, Description } from '../../components/features/CourseDetail'

const CourseDetail = () => {
  return (
    <ScrollView>
      <View
        className="flex-1 bg-violet_2 p-3 "
        style={{
          gap: 16,
        }}
      >
        <Header />
        <Description />
        <Chapters />
      </View>
    </ScrollView>
  )
}

export default CourseDetail
