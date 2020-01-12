const express = require("express")
const cors = require("cors")
const app = express();
const port = 3000

app.use(cors());

let animals = ["zebra", "lion", "horse", "cheetah", "koola", "pigeon", "chicken"]

const isAnimal = (req,res,next) => {
    if (animals.includes(req.params.animal)){
        res.json({status: "success",
        message: true})
    } else {
        res.json({status : "success",
        message : false})
    }
}

app.get("/animals/:animal",isAnimal,(req,res)=>{
    console.log(req.params)
    res.send(req.params.animal)
})

let randomNum

const generateSpread =(req,res, next)=>{
    let numArr = []
    let query = req.query
    floor = parseInt(query.floor)
    ceil  = parseInt(query.ceil)
    for(let i = floor; i <= ceil; i++){
        numArr.push(i)
    }
    randomNum = Math.floor((Math.random() * (ceil-floor))+(floor))
    next()

}

app.get("/random",generateSpread, (req,res)=>{
    let query = req.query
    floor = parseInt(query.floor)
    ceil  = parseInt(query.ceil)
    console.log(query)
    res.json({status: "success",
    range: [floor, ceil],
    randPick: randomNum})
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
  })