import AsyncStorage from '@react-native-async-storage/async-storage'

export const persistObject = async (label, obj) => {
    const stringifiedObj = JSON.stringify(obj)
    await AsyncStorage.setItem(label, stringifiedObj)
}

export const retrieveObject = async (label) => {
    const stringifiedObj = await AsyncStorage.getItem(label)
    return JSON.parse(stringifiedObj)
}