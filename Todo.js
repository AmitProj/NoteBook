const addbtn = document.querySelector('.add')
const main = document.querySelector(".main")

const saveNote =()=>{
    const notes = document.querySelectorAll('.note textarea');
                                    console.log(notes);
    const data = [];
    notes.forEach((note) => {data.push(note.value)});
    console.log(data)
    if(data.length === 0){
        localStorage.removeItem("note")
    }else{
    localStorage.setItem("notes", JSON.stringify(data))
    }
}

// addbtn.addEventListener('click', function(){
//     // alert(1)
//     addnote()

// })

const addnote = (text = "")=>{
    const note = document.createElement('div')
        note.classList.add("note")
        note.innerHTML = `
        <div class="tool"><h2>Daily Notes</h2>
        <p class="Save"><img src="./icon/save_as_FILL0_wght400_GRAD0_opsz48.svg" alt=""></p><b class="Delete"><img src="./icon/delete_forever_FILL0_wght400_GRAD0_opsz48.svg" alt=""></b>
        <button class="add"><img src="./icon/folder_copy_FILL0_wght400_GRAD0_opsz48.svg" alt=""></button></div>
            <textarea>${text}</textarea>
        `;
        note.querySelector(".Delete").addEventListener('click', function(){
            note.remove()
            saveNote()

        })
        note.querySelector(".Save").addEventListener("click", function(){
            saveNote()
        })
        note.querySelector(".add").addEventListener("click", function(){
            addnote()
        })
        main.appendChild(note)
        saveNote()

}

(
    function(){
        const lonote =JSON.parse(localStorage.getItem("notes"));
        if(lonote.lenght === null){
            addnote()
            localStorage.removeItem("note")
        }else{ lonote.forEach((lonote)=>{
                    addnote(lonote)
                })
               
       }
    }
)()
