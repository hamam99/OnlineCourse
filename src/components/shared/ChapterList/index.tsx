import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import classNames from 'classnames'
import {
  IconCircleCaretRight,
  IconCircleCheck,
  IconLock,
} from 'tabler-icons-react-native'
import { ICourseChapter } from '../../../types/ICourse'
import Colors from '../../../utils/Colors'

type ChapterListProps = {
  chapters: ICourseChapter[]
  onChapterClick?: (chapter: ICourseChapter) => void
  scrollEnabled?: boolean
  title?: string
  isPurchased?: boolean
  playingChapter?: ICourseChapter | null
}

const ChapterList = ({
  chapters = [],
  onChapterClick = () => null,
  scrollEnabled = true,
  title,
  isPurchased = false,
  playingChapter = null,
}: ChapterListProps) => {
  const renderItem = ({
    item,
    index,
  }: {
    item: ICourseChapter
    index: number
  }) => {
    const isLocked = isPurchased ? false : item?.isLocked
    const isPlayingChapter = playingChapter?.id === item?.id
    return (
      <TouchableOpacity
        className={classNames(
          'rounded-2xl px-4 py-2  h-[70px] flex-row items-center space-x-2 border-2 border-violet bg-violet_3 ',
          isPlayingChapter && 'border-green  bg-green_2',
          isLocked && 'border-gray_1  ',
        )}
        disabled={isLocked}
        onPress={() => onChapterClick(item)}
      >
        {isPlayingChapter ? (
          <IconCircleCheck size={30} color={Colors.green} />
        ) : (
          <Text
            className={classNames(
              'font-outfit text-3xl  w-[45px] text-violet',
              isPlayingChapter && 'text-green',
              isLocked && 'text-gray_1',
            )}
          >
            {index < 9 && '0'}
            {index + 1}
          </Text>
        )}

        <Text
          className={classNames(
            'font-outfit text-xl flex-1 text-violet',
            isPlayingChapter && 'text-green ',
            isLocked && 'text-gray_1',
          )}
        >
          {item?.title}
        </Text>

        {isLocked ? (
          <IconLock
            size={30}
            color={isLocked ? Colors.gray_1 : Colors.violet}
          />
        ) : (
          <IconCircleCaretRight
            size={30}
            color={isPlayingChapter ? Colors.green : Colors.violet}
          />
        )}
      </TouchableOpacity>
    )
  }
  return (
    <View className="flex-1">
      {title && (
        <Text className="font-outfit text-black font-medium text-2xl">
          {title}
        </Text>
      )}
      <FlatList
        data={chapters}
        renderItem={renderItem}
        scrollEnabled={scrollEnabled}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          gap: 16,
        }}
        style={{}}
      />
    </View>
  )
}

export default ChapterList
