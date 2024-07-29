function loopBook(bookscollection, parentNode) {
  var num = 0;
  document.getElementById(parentNode).innerHTML = "";
  bookscollection.forEach(function (book) {
    var structure = `
            <div class="card">
                <div class="img-box">
                    <img class="unset" src="${book.image}" alt="">
                    <img class="first" src="${book.image}" alt="">
                    <img class="second" src="${book.image}" alt="">
                </div>
                <span class="info">
                    <h3>${book.title}</h3>
                    <p>by : <span>${book.author}</span></p>
                    <button onclick="openviewpage('${num}')">view</button>
                </span>
            </div>
    `;
    num += 1;
    document.getElementById(parentNode).innerHTML += structure;
  });
}

function openviewpage(num) {
  goto("./view.html?bookid=" + num);
}

function search() {
  let sbar = document.getElementById("searchbar");
  let val = sbar.value.toUpperCase();
  let filteredBooks = window.booksCollectionJson.filter(function (book) {
    return (
      book.title.toUpperCase().includes(val) ||
      book.author.toUpperCase().includes(val)
    );
  });
  document.getElementById("main-box").innerHTML = "";
  loopBook(filteredBooks, "main-box");
}

function goto(url) {
  window.location.href = url;
}

function logout() {
  localStorage.setItem("auth", false);
  window.location.reload();
}
