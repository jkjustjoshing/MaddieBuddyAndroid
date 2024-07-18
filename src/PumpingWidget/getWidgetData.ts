import AsyncStorage from '@react-native-async-storage/async-storage'

export const getWidgetData = async (id: number) => {
  const [token, url] = await Promise.all([
    AsyncStorage.getItem('configuration.token'),
    AsyncStorage.getItem('configuration.url')])


  return { token, url }
}
