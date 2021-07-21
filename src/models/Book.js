export default class Book {
    
    static fromDocument(doc){
    const book= new Book ('');

    const data = doc.data();
    book.id = doc.id;
    book.title = data.title;
    book.author = data.author;
    book.isbn = data.isbn;
    book.userId = data.userId;
        
    
    return book;
}



    constructor (title, author, isbn, userId){
        this.id = null;
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.userId = userId;
    }

}