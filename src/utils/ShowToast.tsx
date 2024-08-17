import Toast, { ToastType } from 'react-native-toast-message'

type ShowToastProps = {
  type?: ToastType
  message?: string
}
const ShowToast = ({ type = 'success', message }: ShowToastProps) => {
  Toast.show({
    type: type,
    text1: message,
    position: 'top',
  })
}

export default ShowToast
