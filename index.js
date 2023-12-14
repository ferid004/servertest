const express = require('express')
const app = express()
const port = 3000
const arr = [
    {
        "id": 7,
        "email": "michael.lawson@reqres.in",
        "first_name": "Michael",
        "last_name": "Lawson",
        "avatar": "https://reqres.in/img/faces/7-image.jpg"
    },
    {
        "id": 8,
        "email": "lindsay.ferguson@reqres.in",
        "first_name": "Lindsay",
        "last_name": "Ferguson",
        "avatar": "https://reqres.in/img/faces/8-image.jpg"
    },
    {
        "id": 9,
        "email": "tobias.funke@reqres.in",
        "first_name": "Tobias",
        "last_name": "Funke",
        "avatar": "https://reqres.in/img/faces/9-image.jpg"
    },
    {
        "id": 10,
        "email": "byron.fields@reqres.in",
        "first_name": "Byron",
        "last_name": "Fields",
        "avatar": "https://reqres.in/img/faces/10-image.jpg"
    },
    {
        "id": 11,
        "email": "george.edwards@reqres.in",
        "first_name": "George",
        "last_name": "Edwards",
        "avatar": "https://reqres.in/img/faces/11-image.jpg"
    },
    {
        "id": 12,
        "email": "rachel.howell@reqres.in",
        "first_name": "Rachel",
        "last_name": "Howell",
        "avatar": "https://reqres.in/img/faces/12-image.jpg"
    }
]
app.use(express.json());
// normal get
app.get('/', (req,res) => {
    res.send(arr)
})

// id'ye gore get
app.get('/user/:id', (req, res) => {
    const id = req.params.id
    const item = arr.find(x => x.id === +id)
    res.send(item)
})

// normal post 
app.post('/', (req, res) => {
    let user = req.body;
    let idNo = arr[arr.length - 1].id
    user.id = idNo + 1;
    arr.push(user);
    res.send(arr)
})




//normal put
           

// normal delete
app.delete('/user', (req, res) => {
    res.send('Got a DELETE request at /user')
})

// id'e gore delete
app.delete('/user/:id', (req, res) => {
    const id = req.params.id
    const item = arr.find(x => x.id == +id)
    if (item) {
        const DeletedUser = arr.filter(x => x.id != id)
        res.send(DeletedUser)
        res.status(200).json({ message: "User Deleted!" })
    } else {
        res.status(404).json({ message: "User Tapilmadi!" })
    }
})

app.listen(process.env.PORT ||  port, () => {
    console.log(`Example app listening on port ${port}`)
})

