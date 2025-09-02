let task = document.querySelector('#tasks');
let list = document.querySelector('.task-list');


function addtasks() {
    if(task.value === ''){
        alert('Enter tasks')
    }
    else{
        let li = document.createElement("li")
        li.innerHTML = task.value;
        list.appendChild(li)
        task.value = ''
        let sp = document.createElement("span")
        sp.innerHTML = "\u00d7";
        li.appendChild(sp)
        
    }
    saveData()
}

list.addEventListener('click' , (e) => {
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('completed')
        saveData()
    }
    else if(e.target.tagName ==='SPAN'){
        e.target.parentElement.remove();
    saveData()    }
    
},false)

function saveData() {
    localStorage.setItem('data',list.innerHTML)
}
function showData(){
    list.innerHTML = localStorage.getItem('data')
}
showData()