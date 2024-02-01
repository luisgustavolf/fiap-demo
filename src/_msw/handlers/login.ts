import { delay, http, HttpResponse } from 'msw'
import { ILoginBody } from './iLoginBody'

export const LoginHandler = http.post('/login', async (info) => {
  const body = (await info.request.json()) as ILoginBody
  
  await delay()

  if (body.login === 'pedro' && body.password === '123') {
    return HttpResponse.json({ token: 'c5906496-10c5-4b38-8f45-df92a7f80aff' })
  }

  return new HttpResponse(null, { status: 422 })
}, {})