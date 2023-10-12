const bookTitle = document.querySelector("#title")
const bookAuthor = document.querySelector("#author")
const bookPages = document.querySelector("#pages")
const bookReadBook = document.querySelector("#readIt")
const buttonSubmit = document.querySelector("#buttonSubmit")

const outputSide = document.querySelector(".outputSide")


buttonSubmit.addEventListener('click', testfunc);

function testfunc(){
    const book1 = new Book( bookTitle.value,
                            bookAuthor.value,
                            bookPages.value,
                            bookReadBook.value)
    book1.addBook()

}




function Book(title, author, pages, readStatus){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
    this.addBook = function(){
        let bookContainer = document.createElement('div');
        bookContainer.classList.add('bookContainer');
        bookContainer.style.cssText = "background-color: white; border-bottom: 2px solid gray;";
        outputSide.appendChild(bookContainer);
        bookContainer.innerText =   "Title: " + title +
                                    " Author: " + author +
                                    " Pages: " + pages +
                                    " Have you read it? " + readStatus;
        
    }
}
/*
const book1 = new Book("Steve", "asdf", 123123, "yes");
book1.addBook()
*/