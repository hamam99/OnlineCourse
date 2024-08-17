export type ICourse = {
  id?: number
  title?: string
  total_chapter?: number
  durations?: string
  type?: 'Free' | 'Premium'
  progress?: number
  thumb?: string
  is_purchased?: boolean
}
export type ICourseDetail = ICourse & {
  description?: string
  level?: 'Basic' | 'Intermediate' | 'Advance'
  chapters?: ICourseChapter[]
  creator: string
}

export type ICourseChapter = {
  id?: number
  title?: string
  url?: string
  isLocked?: boolean
  isWatched?: boolean
}
