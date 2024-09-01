import { FlatList, ScrollView, Text, View } from 'react-native'
import { ProfileBar, SearchBar } from '../../components/features/Home'
import Courses from '../../components/shared/Courses'
import { ICourse } from '../../types/ICourse'
import { useGetCourseAll } from '../../hooks/apollo'
import Loading from '../../components/shared/Loading'

const MockInprogress: ICourse[] = [
  {
    id: 1,
    durations: '2h:30 min',
    total_chapter: 15,
    thumb: 'https://i.ytimg.com/vi/2lVDktWK-pc/maxresdefault.jpg',
    title: 'Introduction to C++',
    type: 'Free',
    progress: 8,
    is_purchased: true,
    price: 0,
  },
]

const Home = () => {
  const { courses, loading } = useGetCourseAll()

  return (
    <ScrollView>
      <View className="flex-1 bg-white pb-8">
        <View className="bg-violet p-5 pb-[150px]">
          <ProfileBar />
          <SearchBar />
        </View>
        <View className="flex-1 pl-4 bg-white mt-[-30px] rounded-l-3xl rounded-r-3xl">
          <View className="mt-[-100px]">
            <Courses
              title="In Progress"
              courses={MockInprogress}
              titleClassNames="text-white"
            />
          </View>
          {/* ALL COURSE */}
          {courses &&
            Object.entries(courses).map(([key, value]) => {
              console.log(`looping`, key, value)
              return (
                <View className="mt-3 " key={key}>
                  <Courses title={key} courses={value} />
                </View>
              )
            })}
        </View>
        <Loading isLoading={loading} />
      </View>
    </ScrollView>
  )
}
export default Home
