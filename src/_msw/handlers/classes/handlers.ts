import { HttpResponse, delay, http } from "msw"
import { datastore } from "./datastore"

const listHandler = http.get('/classes', async () => {
  await delay()
  return HttpResponse.json(datastore)
}, {})

const getHandler = http.get('/classes/:id', async (info) => {
  await delay()

  const id = info.params.id
  const classInfo = datastore.find((c) => c.id === id)
  
  if (classInfo)
    return HttpResponse.json(classInfo)

  return new HttpResponse(null, { status: 404 })
}, {})

export const classesHandlers = [
  listHandler,
  getHandler
]