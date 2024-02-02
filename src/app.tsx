import { Button, CssBaseline, ThemeProvider } from '@mui/material'
import React from 'react'
import { FIAPTheme } from './configs/mui/theme'

export function App() {
  return (
    <React.Fragment>
      <ThemeProvider theme={FIAPTheme}>
        <CssBaseline enableColorScheme />
      </ThemeProvider>
    </React.Fragment>
  )
}