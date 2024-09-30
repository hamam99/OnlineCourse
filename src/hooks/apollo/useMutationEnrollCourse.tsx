import { gql, useMutation } from '@apollo/client'
import { useAuth0 } from 'react-native-auth0'

const QUERY = gql`
  mutation CourseUserMutation($userId: String!, $courseId: ID) {
    createCourseUser(
      data: { userId: $userId, courses: { connect: { id: $courseId } } }
    ) {
      userId
      stage
    }
  }
`
const useMutationEnrollCourse = () => {
  const { user } = useAuth0()

  const [enroll, { loading, data, error }] = useMutation(QUERY)

  const enrollCourse = (courseId: string) => {
    if (!courseId) {
      return
    }

    console.log(`enroll course`, {
      courseId: courseId,
      userId: user?.sub,
    })
    enroll({
      variables: {
        courseId: courseId,
        userId: user?.sub,
      },
    })
  }

  return {
    enrollCourse,
    loading,
    data,
    error,
  }
}

export default useMutationEnrollCourse
