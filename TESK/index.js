


function getContent(){

        let title= document.getElementById("id-title");
        let desc = document.getElementById("id-desc");
        localStorage.setItem("title", title.value);
        localStorage.setItem("description", desc.value);
    // clear content 
    clearTxt(title , desc);
}

// function createTask(){
//     getContent();

// }

function clearTxt(title , desc){
    title.value = "";
    desc.value="";
}

function clearLocalStorage(){
    localStorage.clear()
}

function viewTask(){
    let taskTitle = localStorage.getItem("title");
    let taskDescription = localStorage.getItem("description");


    let prevTitle = document.getElementById("prev-title");
    let prevDesc = document.getElementById("prev-desc");


    // sppiner - loader 

    //show content
    prevTitle.innerHTML=taskTitle;
    prevDesc.innerHTML = taskDescription;
    
}   

