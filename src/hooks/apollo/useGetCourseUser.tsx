import { gql, useLazyQuery, useQuery } from '@apollo/client'
import { useEffect, useMemo } from 'react'
import _ from 'lodash'
import { ICourse, ICoursesGroup } from '../../types/ICourse'
import { useAuth0 } from 'react-native-auth0'

const QUERY = gql`
  query CourseUserQuery($userId: String!) {
    courseUserPlural(where: { userId: $userId }) {
      id
      userId
      courseId
      courses {
        category
        chapters {
          ... on Chapters {
            id
            isLocked
            stage
            title
            url
          }
        }
        creator
        description
        duration
        id
        level
        price
        title
        thumb {
          url
        }
      }
    }
  }
`

const useGetCourseUser = () => {
  const { user } = useAuth0()

  //   const { loading, error, data } = useQuery(QUERY, {
  //     variables: {
  //       userId: user?.sub,
  //     },
  //   })

  const [getCoursesApollo, { data, error, loading }] = useLazyQuery(QUERY, {
    variables: {
      userId: user?.sub,
    },
  })

  const courses = useMemo(() => {
    const coursesPlural = data?.coursesPlural
    return coursesPlural
  }, [data]) as ICourse[]

  useEffect(() => {
    if (user?.sub) {
      return
    }

    getCoursesApollo()
  }, [user?.sub])

  console.log(`useGetCourseUser`, {
    data,
    courses,
    error,
    loading,
    sub: user?.sub,
  })
  return {
    loading,
    error,
    data,
    courses,
  }
}

export default useGetCourseUser
