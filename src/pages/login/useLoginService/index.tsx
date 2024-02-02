import * as React from 'react'
import { ILoginFormValues } from '../useLoginForm/iLoginFormValues'
import { LoginService } from '../../../services/fiap/login'

export function useLoginService() {
  const [loading, setLoading] = React.useState(false)

  const login = React.useCallback(async (values: ILoginFormValues, onSuccess: (token: string) => void) => {
    try {
      setLoading(true)
      const response = await LoginService.login({
        login: values.login,
        password: values.password,
      })
      onSuccess(response.token)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }, [])

  return {
    login,
    loading
  }
}