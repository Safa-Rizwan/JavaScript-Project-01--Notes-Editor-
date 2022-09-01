console.log("daily notes app");
showNotes();
// If user add a notes, save it in local storage
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {
  let addTxt = document.getElementById("addTxt");
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.push(addTxt.value);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  console.log(addTxt.value);
  addTxt.value = "";
  showNotes();
});
// function to show elements from localstorage
function showNotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let html = "";
  notesObj.forEach(function (element, index) {
    html += `
 <!-- card -->
 <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
     <!-- <img src="..." class="card-img-top" alt="..."> -->
     <div class="card-body">
         <h5 class="card-title">Notes ${index + 1}</h5>
         <p class="card-text">${element}</p>
         <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-dark">Delete Notes</button>
     </div>
 </div>`;
  });
  let notesElm = document.getElementById("notes");
  if (notesObj.length != 0) {
    notesElm.innerHTML = html;
  } else {
    notesElm.innerHTML = `Nothing to show! Use "Add a Notes" section above to add notes.`;
  }
}

// function to delete notes
function deleteNote(index) {
  console.log("i am deleting", index);

  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.splice(index,1);
  localStorage.setItem("notes",JSON.stringify(notesObj));
  showNotes();
}

// search functionality
let searchTxt = document.getElementById("searchTxt");
searchTxt.addEventListener("input",function(){

    let inputValue = searchTxt.value;
    // console.log("input fired",inputValue);
    let inputCard = document.getElementsByClassName("noteCard");
    Array.from(inputCard).forEach(function(element){
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        // console.log(cardTxt)
        if(cardTxt.includes(inputValue)){
            element.style.display="block";
        } 
        else{
            element.style.display = "";
        }
    })
})
