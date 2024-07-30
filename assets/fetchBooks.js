async function fetchBooks(){
        const response = await fetch('practise/books.json');
        const data = await response.json();
        return data;
}