import AsyncStorage from '@react-native-async-storage/async-storage'

const fetchPath = async (path: string) => {
  const [token, url] = await Promise.all([
    AsyncStorage.getItem('configuration.token'),
    AsyncStorage.getItem('configuration.url')])


  const response = await fetch(url + path, {
    headers: {
      Authorization: "Token " + token?.trim(),
    },
  });
  if (!response.ok) {
    throw new Error(response.status + ": " + (await response.text()));
  }

  return response.json();
};

export const getWidgetData = async () => {
  return fetchPath('/pumping/?limit=1')
}
