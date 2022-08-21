import React, { useEffect } from 'react'
import { useLocalStorage } from './useStorage'


const useDarkMode = () => {

  const [darkMode, setDarkMode] = useLocalStorage('DarkMode')

  console.log(darkMode)

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode)
  }, [darkMode])

  return [darkMode, setDarkMode]

}

export default useDarkMode