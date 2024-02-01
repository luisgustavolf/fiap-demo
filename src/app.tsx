import React from 'react'
import { FIAPTheme } from './configs/mui/theme'
import { CssBaseline, ThemeProvider } from '@mui/material'

export function App() {
  return (
    <React.Fragment>
      <ThemeProvider theme={FIAPTheme}>
        <CssBaseline enableColorScheme />
      </ThemeProvider>
    </React.Fragment>
  )
}