import express,{json} from 'express'
import router from './router/router.js'
import path from 'path'
import {fileURLToPath} from 'url'
import fs from 'fs'



const app = express()
const PORT = 3000

app.use('/', router)
app.use(express.json())

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)



app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'));

 console.log('views folde existe:', fs.existsSync(path.join(__dirname,'views')));

app.listen(PORT, ()=>{
  console.log(`el puerta esta corriendo${PORT}`)
})
