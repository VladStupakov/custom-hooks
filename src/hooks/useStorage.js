import { useCallback, useEffect, useState } from "react"

export function useLocalStorage(key, defaultValue) {
  return useStorage(key, defaultValue, window.localStorage)
}

export function useSessionStorage(key, defaultValue) {
  return useStorage(key, defaultValue, window.sessionStorage)
};

const useStorage = (key, defaultValue, storage) =>{
  const [value, setValue] = useState(() =>{
    const storageValue = storage.getItem(key)
    if(storageValue !== null )
      return storageValue
    if(typeof defaultValue === 'function')
      return defaultValue()
    else
      return defaultValue
  })

  useEffect(() =>{
    if(value === 'undefined')
      return storage.removeItem(key)
    storage.setItem(key, value)
  }, [key, value, storage])

  const remove = useCallback(()=>{
    setValue(undefined)
  }, [])

  return [value, setValue, remove]
}

