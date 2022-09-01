console.log("daily notes app");
// If user add a notes, save it in local storage
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click",function(e){

    let addTxt= document.getElementById("addTxt");
    let notes=localStorage.getItem("notes");
    if(notes==null){
        notesObj = [];
    }
    else{
        notesObj=JSON.parse(notes)
    }
    notesObj.push(addTxt.value);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    console.log(addTxt.value);
    addTxt.value="";
    

})