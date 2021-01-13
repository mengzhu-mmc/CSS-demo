const mongoose = require('mongoose')

// 连接数据库
mongoose.connect('mongodb://localhost/test', { useMongoClient: true })

const Schema = mongoose.Schema

const userSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    nickname: {
        type:String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    create_time: {
        type: Date,
        // 注意：这里不要写Date.now() 因为会直接执行
        default: Date.now
    },
    last_modified_time: {
        type: Date,
        default: Date.now
    },
    avatar: {
        type: String,
        default: '/public/img/avatar-fault.png' 
    },
    bio: {
        type: String,
        default: ''
    },
    gender: {
        type: Number,
        enum:[-1, 0, 1],
        default: -1
    },
    birthday: {
        type: Date
    },
    status: {
        type: Number,
        // 没有限制 0
        // 不可以评论 1
        // 不可以登录使用 2
        enum: [0, 1 ,2],
        default: 0
    }
})

module.exports = mongoose.model('User', userSchema)