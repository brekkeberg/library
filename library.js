const formInputTitle = document.querySelector("#title");
const formInputAuthor = document.querySelector("#author");
const formInputPages = document.querySelector("#pages");
const formInputReadStatus = document.querySelector("#readIt");
const buttonAddNewBook = document.querySelector("#buttonSubmit");
const outputSide = document.querySelector(".outputSide")

let libraryArray = [];
let bookCard;
let titleContainer;
let authorContainer;
let pagesContainer;
let readStatusContainer;
let newBook;

class Book {
    constructor(title, author, pages, readStatus, bookID) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.readStatus = readStatus;
        this.bookID = bookID;
    }
}

function createBook(){
    newBook = new Book( title = formInputTitle.value,
                        author = formInputAuthor.value,
                        pages = formInputPages.value,
                        readStatus = formInputReadStatus.value,
                        bookID = libraryArray.length,
                        );
}

function addBookToLibraryArray(){
    libraryArray.push(newBook);
}

function clearAllCards(){
    while (outputSide.firstChild) {
        outputSide.removeChild(outputSide.firstChild);
      }
}

function displayLibrary(){
    for (let i = 0; i < libraryArray.length; i++){
        renderBookCard();
        addBookObjectDataToBookCard(libraryArray[i]);
        assignDataAttributeToBookCard(libraryArray[i]);
        addDeleteButtonToCard();
    }
}

function clearForm(){
    formInputTitle.value = "";
    formInputAuthor.value = "";
    formInputPages.value = "";
}

function renderBookCard(){
    bookCard = document.createElement('div');
    bookCard.style.cssText =   "background-color: white;" +
                                "box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;" +
                                "padding: 5px 0px 5px 0px;";
    outputSide.appendChild(bookCard);


    titleContainer = document.createElement('div');
    authorContainer = document.createElement('div');
    pagesContainer = document.createElement('div');
    readStatusContainer = document.createElement('div');

    bookCard.appendChild(titleContainer);
    bookCard.appendChild(authorContainer);
    bookCard.appendChild(pagesContainer);
    bookCard.appendChild(readStatusContainer);
}

function addBookObjectDataToBookCard(book){
    titleContainer.innerText = book.title;
    authorContainer.innerText = book.author;
    if (book.pages != ""){
        pagesContainer.innerText =  "Pages: " + book.pages;
    }
    if (book.readStatus === "Yes"){
        readStatusContainer.innerHTML = "<span class='material-symbols-outlined'>check_circle</span>"
    } else{
        readStatusContainer.innerHTML = "<span class='material-symbols-outlined'>cancel</span>"
    }
}

function assignDataAttributeToBookCard(book){
    bookCard.setAttribute('data-ID', book.bookID);
}

function addDeleteButtonToCard(){
    let bookCardDeleteButton = document.createElement('button');
    bookCardDeleteButton.classList.add('deleteButton');
    bookCard.appendChild(bookCardDeleteButton);
    bookCardDeleteButton.innerText = "Remove";
    bookCardDeleteButton.addEventListener('click', ()=>{
        //removes the correct object from bookArray by locating based on bookID
        let currentBookID = bookCardDeleteButton.parentNode.dataset.id;
        index = locateIndexInLibraryArray(currentBookID);
        libraryArray.splice(index, 1);
        clearAllCards();
        displayLibrary();
    })
}

function toggleReadStatus(){

}

function locateIndexInLibraryArray(currentBookID){
    let index;
    for (let i = 0; i < libraryArray.length; i++){
        if (libraryArray[i].bookID == currentBookID){
            index = i;
            break;
        }
    }
    return index;
}

buttonAddNewBook.addEventListener('click', () => {
    createBook();
    addBookToLibraryArray();
    clearAllCards();
    displayLibrary();
    clearForm();
});


