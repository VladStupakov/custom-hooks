import React from 'react'
import useDarkMode from '../hooks/useDarkMode'


const UseDarkModeComponent = () => {

  const [darkMode, setDarkMode] = useDarkMode()

  console.log(darkMode);

  return (
    <button
      onClick={() => setDarkMode(prev => !prev)}
      style={{
        color: darkMode? 'white' : 'black'
      }}
    >
      Toggle DarkMode
    </button>
  )
}

export default UseDarkModeComponent