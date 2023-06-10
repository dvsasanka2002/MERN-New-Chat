const asynchandler = require('express-async-handler')
const registerUser = asynchandler( async () => {
    const {name, email, password, pic} = req.body
    
})