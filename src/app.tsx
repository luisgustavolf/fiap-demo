import { CssBaseline, ThemeProvider } from '@mui/material'
import React from 'react'
import { AppRoutes } from './appRoutes'
import { FIAPTheme } from './configs/mui/theme'

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