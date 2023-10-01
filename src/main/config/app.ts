import express from 'express'
import setUpMiddlewares from './middlewares'
import setUpRoutes from './routes'
import env from './env'
import setupSwagger from './config-swagger'
import mysql from 'mysql'

const app = express()
setupSwagger(app)
setUpMiddlewares(app)
setUpRoutes(app)
export { app }
