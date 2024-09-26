import { create } from 'zustand'
import { ICourse, ICourseChapter } from '../types/ICourse'

type SelectedCourseState = {
  selectedCourse: ICourse | null
  setSelectedCourse: (course: ICourse) => void
  isPurchased: boolean
  setIsPurchased: (isPurchased: boolean) => void

  selectedChapter: ICourseChapter | null
  setSelectedChapter: (chapter: ICourseChapter) => void
}
const useSelectedCourse = create<SelectedCourseState>((set, get) => ({
  selectedCourse: null,
  setSelectedCourse: course => set({ selectedCourse: course }),
  isPurchased: false,
  setIsPurchased: isPurchased => set({ isPurchased }),
  selectedChapter: null,
  setSelectedChapter: chapter => set({ selectedChapter: chapter }),
}))

export default useSelectedCourse
