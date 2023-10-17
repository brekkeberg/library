let library = [];
let index;


class Book {
    constructor(title, author, pages, readStatus, bookID){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.readStatu = readStatus;
        this.bookID = bookID;
    }
}

book1 = new Book( "JRR1", "ASDA1", 1231, 0);
book3 = new Book("BOOOK 2", "au", 123123123, 3);
book2 = new Book("asdf3", "au", 123123, 1);
book4 = new Book("BOOOK 4", "au", 123123, 4);
book5 = new Book("BOOOK 5", "au", 123123, 2);



library.push(book1);
library.push(book2);
library.push(book3);
library.push(book4);
library.push(book5);



for (let i = 0; i < library.length; i++){
    if (library[i].bookID === 4){
        index = i;
    } else {
    }
}

console.log(index);
console.log(library)
library.splice(index, 1);
console.log(library)





