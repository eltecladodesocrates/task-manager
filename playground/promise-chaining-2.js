require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndRemove('600974c1ba00b115a16e13ab').then((task) => {
//     console.log(task)
//     return Task.find({ completed: false })
// }).then((completedTasks) => {
//     console.log(completedTasks)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id, completed) => {
    const task = await Task.findByIdAndRemove(id)
    const count = await Task.countDocuments({completed})
    return [task, `The count of incomplete tasks is ${count}`]
}

const addNewTask = async (description, completed) => {
    const task = new Task({
        description,
        completed
    })
    await task.save()
    return task
}

deleteTaskAndCount('600ad86343b90b3157a99cc4', false).then((data) => {
    console.log(data)
}).catch((e) => {
    console.log(e)
})
