import { gql, useLazyQuery, useQuery } from '@apollo/client'
import { useEffect, useMemo } from 'react'
import _ from 'lodash'
import { ICourse } from '../../types/ICourse'
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

  const [getCoursesApollo, { data, error, loading }] = useLazyQuery(QUERY, {
    variables: {
      userId: user?.sub,
    },
  })

  const courses =
    (useMemo(() => {
      if (!data) {
        return []
      }
      const coursesPlural = data?.courseUserPlural?.map(item => {
        return item?.courses
      })
      return coursesPlural
    }, [data]) as ICourse[]) || []

  useEffect(() => {
    if (!user?.sub) {
      return
    }

    getCoursesApollo()
  }, [user?.sub])

  return {
    loading,
    error,
    data,
    courses,
  }
}

export default useGetCourseUser
