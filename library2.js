
class Book{
    constructor (
        title  = "unknown", 
        author = "unknown", 
        pages = 0 , 
        isRead = false
        ){
        this.title = title,
        this.author = author,
        this.pages = pages,
        this.isRead = isRead,
        this.bookID = title + author + pages
        }
}

class Library{
    constructor(){
        this.books = []
    }
    addBook(book){
        this.books.push(book)
    }
    getBook(book){

    }
    removeBook(book){ 

    }
    isInLibrary(book){
        
    }
    logBooks(){
        console.table(this.books)
    }
}
//instantiates library object based on library class
const library = new Library;



// PROGRAM FUNCTIONS NOT HOUSED INSIDE LIBRARY CLASS

const buttonSubmit = document.querySelector("#buttonSubmit")
buttonSubmit.addEventListener('click', addBook)

function addBook(){
    let book = getBookFromInput();
    library.addBook(book);
    library.logBooks();
}

function getBookFromInput(){
    let title = document.querySelector('#title').value
    let author = document.querySelector('#author').value
    let pages = document.querySelector('#pages').value
    let isRead = document.querySelector('#isRead').checked
    return new Book(title, author, pages, isRead)
}