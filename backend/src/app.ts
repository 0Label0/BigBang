import express from 'express'
import config from './config'
import dirnksRouts from './routes/drinks.routes'
import sectionRouts from './routes/section.routes'
import morgan from 'morgan'
import cors from 'cors'

const app = express()

app.set('port', config.PORT)

app.disable('x-powered-by')
app.use(morgan('dev'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(sectionRouts)
app.use(dirnksRouts)

export default app
