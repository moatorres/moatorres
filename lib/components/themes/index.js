import React from 'react'
import lightTheme from './presets/default'
import darkTheme from './presets/dark'

export const getPresets = () => {
  return [lightTheme, darkTheme]
}

export const getPresetStaticTheme = () => {
  return lightTheme
}

const defaultTheme = getPresetStaticTheme()

export const ThemeContext = React.createContext(defaultTheme)

export const ThemeProvider = ({ children, themeType }) => {
  const currentTheme = React.useMemo(() => {
    const theme = getPresets().find((item) => item.type === themeType)
    if (theme) return theme
    return getPresetStaticTheme()
  }, [themeType])

  return (
    <ThemeContext.Provider value={currentTheme}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => React.useContext(ThemeContext)
