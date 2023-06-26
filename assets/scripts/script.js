
let ele = document.getElementById('due-date')
let form = document.querySelector('.form-section')
let delTask = document.querySelector(".delete-tasks")
let taskSection = document.getElementsByClassName('.task-section-1')
const date = new Date()
let day = date.getDate()
let month =date.getMonth() + 1
let year =date.getFullYear()
console.log(day,month,year);
console.log(typeof(day))
ele.value = `${year}-0${month}-${day}`
console.log(ele.value)

form.addEventListener('submit',function(e){
    splitted = ele.value.split("-")
    console.log(splitted)
    if (parseInt(splitted[0]) >= year){
        if (parseInt(splitted[1]) + 1>= month){
            if(parseInt(splitted[2]) >= day){
                
            }
            else{
                alert("Date cannot be less than today date.")
    
            }

        }
        else{
            alert("Date cannot be less than today date.")

        }
    }
    else{
        alert("Date cannot be less than today date.")

    }

})
let inputs = document.querySelectorAll(".task-container > .task-container-section1 > .checkbox > input")
console.log(inputs)




for(let i of inputs){
    i.addEventListener('click',function(){
        val = i.value
        console.log(val)
        let temp = i.parentNode.parentNode.children[1]
        


        if (i.checked){
            console.log(true)
            console.log(i.nextElementSibling)
            temp.style.textDecoration = "line-through"
            temp.style.opacity = "0.5"
            console.log(temp)
            /*
            for (let j of temp){
                console.log(j)
                j.innerHTML = "<s>" + json.innerHTML + "</s>"
            }
            */
        }
        else{
            temp.style.textDecoration = "none"
            temp.style.opacity = "1"


            
        }
    })
}


delTask.addEventListener('click',function(e){
    let taskCont = document.querySelectorAll(".task-container > .task-container-section1 > .checkbox")
    console.log(taskCont)
    for (let i of taskCont){
        if(i.children[0].checked){
            id = i.children[0].getAttribute('uid')
            console.log(id)
            fetch(`/delete/${id}`,{
                method:'DELETE'
            })
            .then(res => {
                console.log(res)
                window.location = "/"
            })
            .catch(err =>{
                console.log('ERROR',err)
            })
        }
        
        
        
    }
    e.preventDefault();
})