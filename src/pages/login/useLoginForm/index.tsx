import { useFormik } from 'formik'
import { ILoginFormValues } from './iLoginFormValues'
import { validationSchema } from './validationSchema'

export interface UseLoginFormProps {
  onSubmit: (values: ILoginFormValues) => void
}

export function useLoginForm(props: UseLoginFormProps) {
  const form = useFormik<ILoginFormValues>({
    initialValues: {
      login: '',
      password: ''
    },
    validationSchema,
    onSubmit: props.onSubmit
  })

  return {
    ...form
  }
}