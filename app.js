// const http = require('http');


// const update = await UserSchema.updateOne({_id: req.params.id}, {$set: {name: req.body.name, password: req.body.password}} )
//     // res.json({update})

// const hostname = '127.0.0.1';
// const port = 3000;

// //req => handles data coming from client side to server
// //req => handles data coming from client side to server
// const server  = http.createServer((req, res) => {
//     res.end('<h1>hello</h1>');
// })

// //server.listen listens the created server
// server.listen(port, hostname, () => {
//     console.log('server started at port', port);
// })



const express = require('express')
const mongoose = require('mongoose')
const UserSchema = require('./model/user')

const app = express();

app.use(express.json())

app.get('/', async (req, res) => {

  const getAllUsers = await UserSchema.find()
  res.status(200).json({getAllUsers})
})

app.get('/:id', async (req, res) => {
    try {
    const id = req.params.id
    const getUserById = await UserSchema.findById({_id: id})
    //using ternary operator
    // getUserById ?  res.json({getUserById}) : res.json({msg: 'not found'})
   if(getUserById){
       res.json({getUserById})
   } else {
       res.json({msg: 'not'})
   }
} catch(err) {
  res.status(400).json({msg: "something went wrong"})
}
})

app.delete('/:id', async(req, res) => {
    console.log('delete')
    try {
    const findAndDelete = await UserSchema.findOneAndDelete({_id: req.params.id})
    if(findAndDelete) {
    res.status(200).json({findAndDelete})
    }
    else{
        res.status(404).json({msg: 'Not found'})
    }
    }
    catch(err) {
        res.status(400).json({msg: `Something went wrong: ${err.message}`})
    }

})
// [{},{},{}]


app.post('/signup', async (req, res) => {
    const newUser = new UserSchema(req.body)
    const createdUser = await newUser.save();
    res.json()
})


app.patch('/edit/:id', async (req, res) => {
    console.log(req.body)
// suruma params bata aako id khojne i.e mongoose getById query garne

//tyo Id bhetyo ki bhetena check garne 
        const editUser = await UserSchema.findByIdAndUpdate({_id: req.params.id}, {$set: {name: 'abc'}})
        res.json({editUser})
})

app.delete('/', (req, res) => {
    //statements
})
const url = 'mongodb+srv://sharan:sharan123@cluster0.mezfy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

mongoose.connect(url, 
    { 
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false,  
},  (error) => {
    if(error) {
        console.log('Error while connecting to database:', error.message)
    }
    else{
    console.log('DB connected')
}
})






app.listen(3000, ()=> {
    console.log('server started at port 3000')
})

