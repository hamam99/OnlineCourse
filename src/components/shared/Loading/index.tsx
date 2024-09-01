import { ActivityIndicator } from 'react-native'
import Colors from '../../../utils/Colors'

type LoadingProps = {
  isLoading: boolean
}

const Loading = ({ isLoading = false }: LoadingProps) => {
  if (!isLoading) {
    return null
  }

  return (
    <ActivityIndicator
      size="large"
      color={Colors.violet}
      style={{
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 999,
      }}
    />
  )
}

export default Loading
