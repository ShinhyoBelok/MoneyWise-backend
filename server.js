require('dotenv').config();
require('./database/mongoose')
const express = require('express')
const cors = require('cors');
const app = express()
// const port = process.env.PORT
const port = 3000
const opportunitiesRouter = require('./routes/opportunities')
const usersRouter = require('./routes/users')
const loginRouter = require('./routes/login')
const logoutRouter = require('./routes/logout')

app.listen(port,() => {
  console.log(`Listening to port ${port}`)
})

app.use(cors({
  origin: 'http://localhost:5173'
}));

app.use( express.json() )
app.use('/houses', opportunitiesRouter)
app.use('/users', usersRouter)
app.use('/login', loginRouter)
app.use('/logout', logoutRouter)