
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
        this.uniqueID = title + author
        }
}

class Library{
    constructor(){
        this.books = []
    }
    addBook(book){
        if (this.isInLibrary(book) === false) {this.books.push(book)
        } else { alert("you already stored this book") } 
    } 
    getBook(book){

    }
    removeBook(book){ 

    }
    isInLibrary(book){
        return this.books.some((storedBook) => storedBook.title === book.title) 
    } 
    logBooks(){
        console.table(this.books)
    }
}
//instantiates library object based on library class
const library = new Library;



// PROGRAM FUNCTIONS NOT HOUSED INSIDE LIBRARY CLASS
const libraryContainer = document.querySelector('.outputSide');
const buttonSubmit = document.querySelector("#buttonSubmit");

buttonSubmit.addEventListener('click', ()=>{
    let book = getBookFromInput();
    library.addBook(book);
    library.logBooks();
    refreshBookDisplay();
    clearForm();
});

function getBookFromInput(){
    let title = document.querySelector('#title').value
    let author = document.querySelector('#author').value
    let pages = document.querySelector('#pages').value
    let isRead = document.querySelector('#isRead').checked
    return new Book(title, author, pages, isRead)
}

function makeBookCard(book){
    const bookCard = document.createElement('div');
    const titleContainer = document.createElement('div');
    const authorContainer = document.createElement('div');
    const pagesContainer = document.createElement('div');
    const isReadContainer = document.createElement('div');

    libraryContainer.appendChild(bookCard);
    bookCard.appendChild(titleContainer);
    bookCard.appendChild(authorContainer);
    bookCard.appendChild(pagesContainer);
    bookCard.appendChild(isReadContainer);

    bookCard.setAttribute('id', 'bookCard');
    isReadContainer.setAttribute('id','isReadContainer');
    titleContainer.setAttribute('id', 'titleContainer');
    authorContainer.setAttribute('id', 'authorContainer');
    pagesContainer.setAttribute('id', 'pagesContainer');

    titleContainer.innerText = book.title;
    authorContainer.innerText = book.author;
    if (book.pages != ""){
        pagesContainer.innerText = book.pages + " pages";
    }
    if (book.isRead == true){
        isReadContainer.innerHTML = 
        "<span>read:<span class='material-symbols-outlined'>task_alt</span></span>"
    } else{
        isReadContainer.innerHTML = 
        "<span>read:<span class='material-symbols-outlined'>cancel</span></span>"
    }
}

function refreshBookDisplay(){
    clearAllCards();
    renderAllCards();
}

function clearAllCards(){
    libraryContainer.innerHTML = ""
}

function renderAllCards(){
    for (let book of library.books){
        makeBookCard(book);
    }
}

function clearForm(){
    document.querySelector('#title').value = "";
    document.querySelector('#author').value = "";
    document.querySelector('#pages').value = "";
}
