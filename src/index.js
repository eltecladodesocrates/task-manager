const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

const multer = require('multer')
const upload = multer({ 
    dest: 'images',
    limits: {
        fileSize: 1000000
    },
    fileFilter(req, file, cb) {
    
        if(!file.originalname.match(/\.(doc|docx)$/)) {
            return cb(new Error('Please upload a Word document'))
        }
        cb(undefined, true)
        // cb(new Error('File must be a PDF'))
        // cb(undefined, true)
        // cb(undefined, false)
    
    }
})
app.post('/upload', upload.single('upload'), (req, res) => {
    res.send()
})

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log(`Server is up on port ${port}`)
})

/////////////////////////////////////////

// const jwt = require('jsonwebtoken')

// const myFunction = async () => {

//     const token = jwt.sign({ _id: "abc123" }, 'thisismynewcourse', { expiresIn: '7 days' })
//     console.log(token)

//     const data = jwt.verify(token, 'thisismynewcourse')
//     console.log(data)

// }

// myFunction()

// const pet = {
//     name: 'Lopez'
// }

// pet.toJSON = function () {
//     return {}
// }

// console.log(JSON.stringify(pet))

// const Task = require('./models/task')
// const User = require('./models/user')

// const taskToUser = async () => {
//     const task = await Task.findById('601c973ee49d866ff50dd5b2')
//     // This is going to find the user related to this task
//     await task.populate('owner').execPopulate()
//     console.log(task)
// }

// const userToTask = async () => {
//     const user = await User.findById('601c96193059a16fa9bac39f')
//     await user.populate('tasks').execPopulate()
//     console.log(user.tasks)
// }

// userToTask()

// users

// {
//     "email": "athosmosqetero@example.com",
//     "password": "bragelone"
// }

// {
//     "email": "aramismosquetero@example.com",
//     "password": "fouquete"
// }

