import { gql, useQuery } from '@apollo/client'
import { useMemo } from 'react'
import _ from 'lodash'
import { ICoursesGroup } from '../../types/ICourse'

const GET_ALL_COURSE = gql`
  query CourseAll {
    coursesPlural {
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
`

const useGetCourseAll = () => {
  const { loading, error, data } = useQuery(GET_ALL_COURSE)

  const courses = useMemo(() => {
    const coursesPlural = data?.coursesPlural
    if (!coursesPlural || coursesPlural?.length < 1) {
      return null
    }

    const result = _.groupBy(coursesPlural, 'category')
    return result
  }, [data]) as ICoursesGroup

  return {
    loading,
    error,
    data,
    courses,
  }
}

export default useGetCourseAll
