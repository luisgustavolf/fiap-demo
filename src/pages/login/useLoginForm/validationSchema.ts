import * as Yup from 'yup'

export const validationSchema = Yup.object({
  login: Yup.string().required(),
  password: Yup.string().required(),
}) 