import { ScrollView, View } from 'react-native'
import { ProfileBar, SearchBar } from '../../components/features/Home'
import Courses from '../../components/shared/Courses'
import { useGetCourseAll } from '../../hooks/apollo'
import Loading from '../../components/shared/Loading'
import useGetCourseUser from '../../hooks/apollo/useGetCourseUser'
import classNames from 'classnames'

const Home = () => {
  const { courses, loading } = useGetCourseAll()
  // const { courses: coursesUser, error } = useGetCourseUser()

  return (
    <ScrollView>
      <View className="flex-1 bg-white pb-8">
        <View
          className={classNames(
            'bg-violet p-5 pb-[50px]',
            // coursesUser?.length <= 0 && 'pb-[50px]',
          )}
        >
          <ProfileBar />
          <SearchBar />
        </View>
        <View
          className={classNames(
            'flex-1 pl-4 bg-white mt-[-30px] rounded-l-3xl rounded-r-3xl',
            // coursesUser?.length > 0 && 'mt-0',
          )}
        >
          {/* {coursesUser?.length > 0 && (
            <View className="mt-[-100px]">
              <Courses
                title="In Progress"
                courses={coursesUser}
                titleClassNames="text-white"
                isPurchased={true}
              />
            </View>
          )} */}
          {/* ALL COURSE */}
          {courses &&
            Object.entries(courses).map(([key, value]) => {
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
