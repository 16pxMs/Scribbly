document.addEventListener("DOMContentLoaded", function() {
    
    let backButton = document.getElementById("backButtonTop")
    const saveButton = document.getElementById("saveButton")
    const clearButton = document.getElementById("clearButton")
    const textInput = document.getElementById("newNoteTextArea")

    backButton.addEventListener("click", function() {
        const previousPage = window.open("index.html", "_self")``
    })

    // let userInput = document.querySelector("#newNoteTextArea").value

    

    saveButton.addEventListener("click", function() {

        const noteText = textInput.value

        // next we check if a user has actually types somwthin into the input box

        if (noteText) {
            let notes = JSON.parse(localStorage.getItem("userNotes")) || []

            notes.push(noteText)

            localStorage.setItem("userNotes",JSON.stringify(notes))

            textInput.value = ""

            console.log("Note saved to localStorage:", noteText)
            // alert("Note saved successfully!")
        }
    })


    clearButton.addEventListener("click", function() {
        textInput.value = ""
        console.log("Input field cleared!")
    })


})
