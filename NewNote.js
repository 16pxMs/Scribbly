document.addEventListener("DOMContentLoaded", function() {
    
    let backButton = document.getElementById("backButtonTop")
    const saveButton = document.getElementById("saveButton")
    const clearButton = document.getElementById("clearButton")
    const textInput = document.getElementById("newNoteTextArea")
    const historyList = document.getElementById("cardHistory")

    backButton.addEventListener("click", function() {
        const previousPage = window.open("index.html", "_self")``
    })

    // let userInput = document.querySelector("#newNoteTextArea").value

    

    saveButton.addEventListener("click", function() {

        const noteText = textInput.value.trim()

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


    function updateRecentList () {
        if(historyList) {

            console.log("Recents list element not found. Add a div with id 'recentsList' to your HTML.")
            return
        }

         // here check to see 
         const notes = JSON.parse(localStorage.getItem("userNotes")) || []
         historyList.innerHTML = '' // Clear current list

        const lines = noteText.split('\n')
            const title = lines[0] || 'Untitled'
            const preview = lines.length > 1 ? lines.slice(1).join('\n').substring(0, 50) + '...' : ''

            // render linnes so users can see it o home page after clicking save

            historyList.innerHTML = cardHistory

    }






})
