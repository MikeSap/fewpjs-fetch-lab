let books

function fetchBooks() {
  fetch('https://anapioficeandfire.com/api/books')
  .then(function(response){
    return response.json();
  })
  .then(function(json){
    console.log(json[4])
    // 1031st character in story. Make map of json.book.characters? point to array index 1030
    // total pages of all books. map json.book.pages saved to variable then pages.length
    books = json
    renderBooks(json)
  });
}

function renderBooks(books) {
  const main = document.querySelector('main')
  books.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = book.name
    main.appendChild(h2)
  })
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})
