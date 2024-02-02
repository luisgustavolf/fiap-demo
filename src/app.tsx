import { CssBaseline, ThemeProvider } from '@mui/material'
import React from 'react'
import { FIAPTheme } from './configs/mui/theme'
import { AppRoutes } from './appRoutes'

export function App() {
  return (
    <React.Fragment>
      <ThemeProvider theme={FIAPTheme}>
        <CssBaseline enableColorScheme />
        <AppRoutes />
      </ThemeProvider>
    </React.Fragment>
  )
}