const bookTitle = document.querySelector("#title")
const bookAuthor = document.querySelector("#author")
const bookPages = document.querySelector("#pages")
const bookReadBook = document.querySelector("#readIt")
const buttonSubmit = document.querySelector("#buttonSubmit")

const outputSide = document.querySelector(".outputSide")
const bookTable = document.querySelector('.bookTable')


buttonSubmit.addEventListener('click', createBookObject);

function createBookObject(){
    const book1 = new Book( bookTitle.value,
                            bookAuthor.value,
                            bookPages.value,
                            bookReadBook.value)
    book1.addBook()


}

function checkFormContent(currentForm){
    if (currentForm.value === ""){
        return true;
    }
}


function Book(title, author, pages, readStatus){

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;

    this.addBook = function(){
        // displays card for book in output area
        let bookContainer = document.createElement('div');
        bookContainer.style.cssText =   "background-color: white;" +
                                        "box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;" +
                                        "padding: 5px 0px 5px 0px;";
        outputSide.appendChild(bookContainer);

        let titleContainer = document.createElement('div');
        let authorContainer = document.createElement('div');
        let pagesContainer = document.createElement('div');
        let readStatusContainer = document.createElement('div');


        function appendTableData(newTableData, textToAdd){
            bookContainer.appendChild(newTableData);
            newTableData.innerText = textToAdd;
        }

        appendTableData(titleContainer, title);
        titleContainer.style.cssText = "font-weight: 700; font-size: 25px;";
        appendTableData(authorContainer, author);
        authorContainer.style.cssText = "font-weight: 300; font-size: 15px; text-transform: uppercase;";
        
        if (bookPages.value != ""){
            appendTableData(pagesContainer, "Pages: " + pages);
        }

        bookContainer.appendChild(readStatusContainer);
        if (bookReadBook.value === "Yes"){
            readStatusContainer.innerHTML = "<span class='material-symbols-outlined'>check_circle</span>"
        } else{
            readStatusContainer.innerHTML = "<span class='material-symbols-outlined'>cancel</span>"
        }        

        // creates button to remove book card
        let bookContainerDeleteButton = document.createElement('button');
        bookContainerDeleteButton.addEventListener('click', function(){
            bookContainer.remove()
        });
        bookContainer.appendChild(bookContainerDeleteButton);
        bookContainerDeleteButton.innerText = "Remove"
    }
}





/*

                            */


/* 
        let tableDataTitle = document.createElement('td');
        let tableDataAuthor = document.createElement('td');
        let tableDataPages = document.createElement('td');
        let tableDataReadStatus = document.createElement('td');

        function appendTableData(newTableData, y){
            bookRow.appendChild(newTableData);
            newTableData.innerText = y;
        }

        appendTableData(tableDataTitle, title);
        appendTableData(tableDataAuthor, author);
        appendTableData(tableDataPages, pages);
        appendTableData(tableDataReadStatus, readStatus);
        
        

*/

/* 
// adds text to 
        bookContainer.innerText =   "Title: " + title + 
                                    " Author: " + author + "\r\n" +
                                    " Pages: " + pages +
                                    " Have you read it? " + readStatus;

                                    */