require('../src/db/mongoose')
const User = require('../src/models/user')

// User.findByIdAndUpdate('60099c8cfad7a61969e66cb1', { age: 1 }).then((user) => {
//     console.log(user)
//     return User.countDocuments({ age: 1 })
// }).then((user2) => {
//     console.log(user2)
// }).catch((e) => {
//     console.log(e)
// })

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({ age })
    return count
}

updateAgeAndCount('60099c8cfad7a61969e66cb1', 20).then((count) => {
    console.log(`The count is ${count}`)
}).catch((e) => {
    console.log(e)
})