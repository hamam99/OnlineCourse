export type ICoursesGroup = {
  [key: string]: ICourse[]
}

export type ICourse = {
  category: string
  chapters: ICourseChapter[]
  creator: string
  description: string
  duration: string
  id: string
  level: string
  price: number
  title: string
  is_purchased?: boolean
  thumb?: IThumb
}

export type ICourseDetail = ICourse & {
  description?: string
  level?: 'Basic' | 'Intermediate' | 'Advance'
  chapters?: ICourseChapter[]
  creator: string
}

export type ICourseChapter = {
  id: string
  isLocked?: boolean
  title: string
  url?: string
  isWatched?: boolean
}

export type IThumb = {
  url: string
}
