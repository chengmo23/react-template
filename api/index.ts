import express from 'express'
import bodyparser from 'body-parser'
import http from 'http'
import { Routes } from './routes'
import { UserRoutes } from './routes/user'

const app: express.Application = express()
const server: http.Server = http.createServer(app)
const PORT = process.env.PORT ? process.env.PORT : 3001
const routes: Array<Routes> = []

app.use(bodyparser.json())

const router = express.Router()

// add user routes to the router
routes.push(new UserRoutes(router))

app.use('/api', router)

app.get('/', (req: express.Request, res: express.Response) => {
  // redirect to home page
})

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`)
  console.log(`end point at /api`)
  routes.forEach((routes: Routes) => {
    console.log(`Routes configured for ${routes.getName()}`)
  })
})
