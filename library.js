
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
    // makes elements
    const bookCard = document.createElement('div');
    const titleContainer = document.createElement('p');
    const authorContainer = document.createElement('p');
    const pagesContainer = document.createElement('p');
    const buttonContainer = document.createElement('div');
    const buttonIsRead = document.createElement('button');
    const buttonRemove = document.createElement('button');

    //appends elements
    libraryContainer.appendChild(bookCard);
    bookCard.appendChild(titleContainer);
    bookCard.appendChild(authorContainer);
    bookCard.appendChild(pagesContainer);
    bookCard.appendChild(buttonContainer);
    buttonContainer.appendChild(buttonIsRead);
    buttonContainer.appendChild(buttonRemove);

    // sets attributes
    bookCard.setAttribute('id', 'bookCard');
    titleContainer.setAttribute('id', 'titleContainer');
    authorContainer.setAttribute('id', 'authorContainer');
    pagesContainer.setAttribute('id', 'pagesContainer');
    buttonContainer.setAttribute('id', 'buttonContainer');
    buttonIsRead.setAttribute('id', 'buttonIsRead');
    buttonRemove.setAttribute('id', 'buttonRemove');


    // assigns text
    titleContainer.innerText = book.title;
    authorContainer.innerText = book.author;
    if (book.pages != "") {pagesContainer.innerText = `${book.pages} pages`};
    if (book.isRead === true){
        buttonIsRead.innerText = "read";
        buttonIsRead.setAttribute('class', 'isReadTrue');
    } else { 
        buttonIsRead.innerText = "not read";
        buttonIsRead.setAttribute('class', 'isReadFalse');    
    };
    buttonRemove.innerText = "remove";

    // gives button functionality
    buttonIsRead.addEventListener('click', toggleIsRead);
    buttonRemove.addEventListener('click', removeBook);
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

function toggleIsRead(e){
    console.log(e)
    console.log(e.parentNode)
}
function removeBook(){
    console.log("works")
}
