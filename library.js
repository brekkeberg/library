
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
        this.uniqueID = (`${title} - ${author}`).toUpperCase()
        }
}

class Library{
    constructor(){
        this.books = []
    }
    addBook(book){
        if (this.isInLibrary(book) === false) {this.books.push(book)
        } else { alert("You already added this book to your library") } 
    } 
    getBook(currentUniqueID){
        return this.books.find((storedBook) => storedBook.uniqueID === currentUniqueID)
    }
    removeBook(currentUniqueID){
        this.books = this.books.filter((storedBook) => storedBook.uniqueID !== currentUniqueID)
    }
    modifyBook(currentUniqueID, key, newValue){
        let newKeyValue = {}
        newKeyValue[key] = newValue
        console.log(newKeyValue)
        this.books = this.books.map((book) => (book.uniqueID === currentUniqueID ? { ...book, newKeyValue } : book))
    }
    getBookIndex(currentUniqueID){
        return this.books.findIndex((book) => book.uniqueID == currentUniqueID);
    }
    isInLibrary(book){
        return this.books.some((storedBook) => storedBook.uniqueID === book.uniqueID) 
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
    const uniqueID = getBookIDFromCard(e);
    const storedBook = library.getBook(uniqueID);
    // (storedBook.isRead === true) ? storedBook.isRead = false : storedBook.isRead = true;
    library.modifyBook(uniqueID, "isRead", false);
    library.logBooks();

}
function removeBook(e){
    const uniqueID = getBookIDFromCard(e);
    library.removeBook(uniqueID);
    refreshBookDisplay();
}

function getBookIDFromCard(e){
    const title = e.target.parentNode.parentNode.childNodes[0].innerText;
    const author = e.target.parentNode.parentNode.childNodes[1].innerText;
    return (`${title} - ${author}`).toUpperCase();
}