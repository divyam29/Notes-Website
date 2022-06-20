console.log("This is my Project 3 : Notes App");
shownotes();

// Add a note:
let addBtn=document.getElementById('addBtn');
addBtn.addEventListener('click',function(e){
    let addtext=document.getElementById('addtext');
    let notes=localStorage.getItem('notes');
    if(notes==null){
        notesObj=[];
    }
    else{
        notesObj=JSON.parse(notes);
    }
    if(addtext.value!=""){
        notesObj.push(addtext.value);
    }
    
    localStorage.setItem("notes",JSON.stringify(notesObj));
    addtext.value="";
    shownotes()
})

// Show Notes:
function shownotes() {
    let notes=localStorage.getItem("notes");
    if(notes==null){
        notesObj=[];
    }
    else{
        notesObj=JSON.parse(notes)
    }
    let innerHtml="";
    notesObj.forEach(function(note,index) {
        innerHtml+= `
        <div class="card border-dark my-2 mx-2" style="width: 13.5rem;">
        <div class="card-body text-dark">
            <h5 class="card-title">Note ${index+1}</h5>
            <p class="card-text">
            ${note}
            </p>
        </div>
        <div class="card-footer">
            <button href="#" class="btn btn-dark">Delete Note</button>
        </div>
    </div> `
    });

    let NotesElm=document.getElementById("notes");
    if(notesObj.length!=0){
        NotesElm.innerHTML=innerHtml;
    }
    else{
        NotesElm.innerHTML="<center>Nothing to show! Use 'Add Note' section to add a new note</center>"
    }
}