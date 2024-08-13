import { ScrollView, Text, View } from 'react-native'
import { ProfileBar, SearchBar } from '../../components/features/Home'
import Courses, { ICourse } from '../../components/shared/Courses'

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
  },
]

const MockProgramming: ICourse[] = [
  {
    durations: '2h:30 min',
    total_chapter: 15,
    thumb: 'https://i.ytimg.com/vi/2lVDktWK-pc/maxresdefault.jpg',
    title: 'Introduction to C++',
    type: 'Free',
  },
  {
    durations: '2h:30 min',
    total_chapter: 15,
    thumb: 'https://i.ytimg.com/vi/2lVDktWK-pc/maxresdefault.jpg',
    title: 'Introduction to B++',
    type: 'Free',
  },
]

const MockInternetMarketing: ICourse[] = [
  {
    durations: '2h:30 min',
    total_chapter: 15,
    thumb: 'https://i.ytimg.com/vi/2lVDktWK-pc/maxresdefault.jpg',
    title: 'Introduction to C++',
    type: 'Free',
  },
  {
    durations: '2h:30 min',
    total_chapter: 15,
    thumb: 'https://i.ytimg.com/vi/2lVDktWK-pc/maxresdefault.jpg',
    title: 'Introduction to B++',
    type: 'Free',
  },
]

const Home = () => {
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
          <View className="mt-3">
            <Courses title="Internet Marketing" courses={MockProgramming} />
          </View>
          <View className="mt-3">
            <Courses
              title="Internet Marketing"
              courses={MockInternetMarketing}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  )
}
export default Home
