async function fetchBooks(){
        const response = await fetch('../book-store/books.json');
        const data = await response.json();
        return data;
}