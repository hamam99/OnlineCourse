import { ScrollView, Text, useWindowDimensions, View } from 'react-native'
import { Header } from '../../components/shared'
import YoutubePlayer, { PLAYER_STATES } from 'react-native-youtube-iframe'
import { useCallback } from 'react'
import { ICourseChapter } from '../../types/ICourse'
import ChapterList from '../../components/shared/ChapterList'
import classNames from 'classnames'
import useSelectedCourse from '../../store/useSelectedCourse'
import getYoutubeId from '../../utils/getYoutubeId'

const CourseVideo = () => {
  const { height } = useWindowDimensions()
  const onStateChange = useCallback((state: PLAYER_STATES) => {
    console.log(`state: ${state}`)
  }, [])

  const {
    selectedCourse: course,
    setSelectedChapter,
    selectedChapter,
  } = useSelectedCourse(state => state)

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
        videoId={getYoutubeId(selectedChapter?.url || '')}
        onChangeState={onStateChange}
        allowWebViewZoom={false}
        contentScale={1}
        webViewStyle={{}}
      />

      <Text
        className={classNames('font-outfit text-xl font-bold text-violet pb-1')}
      >
        {selectedChapter?.title}
      </Text>

      <ChapterList
        chapters={course?.chapters || []}
        onChapterClick={item => {
          setSelectedChapter(item)
        }}
        scrollEnabled
        title="Chapters"
        isPurchased={true}
        playingChapter={selectedChapter}
      />
    </View>
  )
}

export default CourseVideo
