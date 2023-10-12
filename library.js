const bookTitle = document.querySelector("#title")
const bookAuthor = document.querySelector("#author")
const bookPages = document.querySelector("#pages")
const bookReadBook = document.querySelector("#readIt")
const buttonSubmit = document.querySelector("#buttonSubmit")

console.log(bookTitle)
console.log(bookAuthor)
console.log(bookPages)
console.log(bookReadBook)
console.log(buttonSubmit)

buttonSubmit.addEventListener('click', testfunc);

function testfunc(){
    console.log("hello world")
    console.log(bookTitle.value)
}