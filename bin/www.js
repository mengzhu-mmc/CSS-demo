const http = require('http')
const serverHandle = require('../app')
const serverPort = 3000
http.createServer(serverHandle)
.listen(serverPort, () => {
    console.log('Server is runnning at port' + serverPort)
})