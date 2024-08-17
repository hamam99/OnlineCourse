import { ScrollView, Text, useWindowDimensions, View } from 'react-native'
import { Header } from '../../components/shared'
import YoutubePlayer, { PLAYER_STATES } from 'react-native-youtube-iframe'
import { useCallback } from 'react'
import { ICourseChapter } from '../../types/ICourse'
import ChapterList from '../../components/shared/ChapterList'
import classNames from 'classnames'

const MockChapters: ICourseChapter[] = [
  {
    id: 1,
    title: 'Introduction',
    url: 'https://www.youtube.com/watch?v=MNeX4EGtR5Y',
    isLocked: false,
    isWatched: true,
  },
  {
    id: 2,
    title: 'Getting Started',
    url: 'https://www.youtube.com/watch?v=sNMtjs_wQiE',
    isLocked: false,
    isWatched: false,
  },
  {
    id: 3,
    title: 'What is C++',
    url: 'https://www.youtube.com/watch?v=sNMtjs_wQiE',
    isLocked: true,
    isWatched: false,
  },
  {
    id: 4,
    title: 'Getting Started',
    url: 'https://www.youtube.com/watch?v=sNMtjs_wQiE',
    isLocked: false,
    isWatched: false,
  },
  {
    id: 5,
    title: 'What is C++',
    url: 'https://www.youtube.com/watch?v=sNMtjs_wQiE',
    isLocked: true,
    isWatched: false,
  },
]

const CourseVideo = () => {
  const { width, height } = useWindowDimensions()
  const onStateChange = useCallback((state: PLAYER_STATES) => {
    console.log(`state: ${state}`)
  }, [])

  return (
    <View
      className="flex-1 bg-violet_2 p-3 "
      style={{
        gap: 16,
      }}
    >
      <Header />
      <YoutubePlayer
        height={height / 3.5}
        videoId={'iee2TATGMyI'}
        onChangeState={onStateChange}
        allowWebViewZoom={false}
        contentScale={1}
        webViewStyle={{}}
      />

      <Text
        className={classNames('font-outfit text-xl font-bold text-violet pb-1')}
      >
        {'01. Introduction'}
      </Text>

      <ChapterList
        chapters={MockChapters}
        onChapterClick={item => {}}
        scrollEnabled
        title="Chapters"
      />
    </View>
  )
}

export default CourseVideo
