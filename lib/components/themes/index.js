import React from 'react'
import lightTheme from './presets/default'

// to-do: add more themes
export const getPresets = () => {
  return [lightTheme]
}

export const getPresetStaticTheme = () => {
  return lightTheme
}

const defaultTheme = getPresetStaticTheme()

export const ThemeContext = React.createContext(defaultTheme)

export const ThemeProvider = ({ children, themeType }) => {
  // todo: check if themeType is valid
  const currentTheme = React.useMemo(() => {
    return getPresetStaticTheme()
  }, [themeType])

  return (
    <ThemeContext.Provider value={currentTheme}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => React.useContext(ThemeContext)
