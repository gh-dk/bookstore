async function fetchBooks(){
        const response = await fetch('https://gh-dk.github.io/practise/books.json');
        const data = await response.json();
        return data;
}