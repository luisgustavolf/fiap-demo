import { render, screen } from '@testing-library/react'
import { test } from 'vitest'
import { HomePage } from '.'

test('button exists', () => {
  render(<HomePage />)
  screen.getByRole('button', { name: /login/i })
})