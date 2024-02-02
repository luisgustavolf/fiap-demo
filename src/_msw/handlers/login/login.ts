import { delay, http, HttpResponse } from 'msw'
import { ILoginBody } from '../login/iLoginBody'

const loginHandler = http.post('/login', async (info) => {
  const body = (await info.request.json()) as ILoginBody
  
  await delay()

  if (body.login === 'pedro' && body.password === '123') {
    return HttpResponse.json({ token: 'c5906496-10c5-4b38-8f45-df92a7f80aff' })
  }

  return new HttpResponse(null, { status: 422 })
}, {})

export const loginHandlers = [
  loginHandler
]