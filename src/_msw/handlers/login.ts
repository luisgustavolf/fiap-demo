import { http, HttpResponse } from 'msw'

export const LoginHandler = http.post('/login', async ({request}) => {
  const info = await request.formData()
  console.log(info.get('login'))
  return HttpResponse.json(['Tom', 'Jerry', 'Spike'])
})