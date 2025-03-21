document.addEventListener("DOMContentLoaded", function() {

    let newNote = document.querySelector(".left")

    newNote.addEventListener ("click", function() {
        let newPage = window.open("newNote.html", "_self")

    }
    )

    document.addEventListener("click", function() {
        input.value = ""

    })

})