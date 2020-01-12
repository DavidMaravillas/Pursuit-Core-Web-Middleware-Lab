document.addEventListener("DOMContentLoaded", () => {
    let btn = document.querySelector("#animalSubmit");
    btn.addEventListener("click",async (e) => {
        e.preventDefault();
        let input = document.querySelector("#animal");
        let aniFirst = document.querySelector("#aniFirst");
        aniFirst.innerText = ""
        let animal = input.value
        let result = await axios.get(`http://localhost:3000/animals/${animal}`)
        animalResult = result.data.message
        if(animalResult){
            aniFirst.innerText = `${animal} is in the list`
        } else {
            aniFirst.innerText = `${animal} is not found in the list`
        }
        input.value = ""
        
    })

    let numberSub = document.querySelector("#numberSub")

    numberSub.addEventListener("click", async(e)=>{
        e.preventDefault()
        let numOne = document.querySelector("#numberOne")
        let numtwo = document.querySelector("#NumberTwo")
        let floorNum
        let ceilNum

        if(numOne.value < numtwo.value){
             floorNum = numOne.value
             ceilNum = numtwo.value

        }else {
             floorNum = numtwo.value
             ceilNum = numOne.value
        }
        try{
            let result = await axios.get(`http://localhost:3000/random?floor=${floorNum}&ceil=${ceilNum}`)
            let answer = document.querySelector("#randomNum")
            answer.innerText = `Random number is ${result.data.randPick}`
        } catch(err){
            console.log(err)
        }

    })


})