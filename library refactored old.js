const formInputTitle = document.querySelector("#title");
const formInputAuthor = document.querySelector("#author");
const formInputPages = document.querySelector("#pages");
const formInputReadStatus = document.querySelector("#readIt");
const buttonAddNewBook = document.querySelector("#buttonSubmit");
const outputSide = document.querySelector(".outputSide")

let library = [];
let bookCard;
let titleContainer;
let authorContainer;
let pagesContainer;
let readStatusContainer;
let newBook;
let bookCardDeleteButton;
let libraryIndex;
let bookID = 0;

class Book {
    constructor(title, author, pages, readStatus, bookID) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.readStatus = readStatus;
        this.bookID = bookID;
    }
}

function createBookObject(){
    newBook = new Book( title = formInputTitle.value,
                        author = formInputAuthor.value,
                        pages = formInputPages.value,
                        readStatus = formInputReadStatus.value,
                        bookID = bookID,
                        );
}

function addBookObjectToLibrary(){
    library.push(newBook);
}

function incrementBookIDNumber(){
    bookID ++;
}

function createBookCard(){
    bookCard = document.createElement('div');
    bookCard.style.cssText =   "background-color: white;" +
                                "box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;" +
                                "padding: 5px 0px 5px 0px;";
    outputSide.appendChild(bookCard);

    titleContainer = document.createElement('div');
    authorContainer = document.createElement('div');
    pagesContainer = document.createElement('div');
    readStatusContainer = document.createElement('div');
    bookIDNumberContainer = document.createElement('div');
    bookIDNumberContainer.classList.add('bookID');

    bookCard.appendChild(titleContainer);
    bookCard.appendChild(authorContainer);
    bookCard.appendChild(pagesContainer);
    bookCard.appendChild(readStatusContainer);
    bookCard.appendChild(bookIDNumberContainer);
}

function addBookObjectDataToBookCard(){
    titleContainer.innerText = newBook.title;
    authorContainer.innerText = newBook.author;
    if (newBook.pages != ""){
        pagesContainer.innerText =  "Pages: " + newBook.pages;
    }
    if (newBook.readStatus === "Yes"){
        readStatusContainer.innerHTML = "<span class='material-symbols-outlined'>check_circle</span>"
    } else{
        readStatusContainer.innerHTML = "<span class='material-symbols-outlined'>cancel</span>"
    }
    bookIDNumberContainer.innerText = bookID;
}

function addDeleteButtonToCard(){
    bookCardDeleteButton = document.createElement('button');
    bookCardDeleteButton.classList.add('deleteButton');
    bookCard.appendChild(bookCardDeleteButton);
    bookCardDeleteButton.innerText = "Remove";
}
let tester = 0
function addDeleteButtonFunctionality(){
    let allDeleteButtons = document.querySelectorAll(".deleteButton");
    allDeleteButtons.forEach((button) => {
        button.addEventListener("click", () => {
            console.log("library length: " + library.length);
            console.log(tester);
            tester ++;

            /* grabs current book ID 
            let domBookID = button.parentNode.querySelector('.bookID').innerText;
            /* for (let i = 0; i < library.length; i ++){
                console.log(library[i].bookID)
                if (library[i].bookID = domBookID){
                    libraryIndex = i;
                }
            }
            library.splice(libraryIndex, 1);
            button.parentNode.remove(); */
        })
    })
}


buttonAddNewBook.addEventListener('click', () => {
    createBookObject();
    addBookObjectToLibrary();
    createBookCard();
    addBookObjectDataToBookCard();
    addDeleteButtonToCard();
    addDeleteButtonFunctionality();
    incrementBookIDNumber();
    console.log(library);
});