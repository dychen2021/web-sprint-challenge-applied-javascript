import axios from 'axios';

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
  const card = document.createElement('div');
  const head = document.createElement('div');
  const auth = document.createElement('div');
  const imgc = document.createElement('div');
  const imgp = document.createElement('img');
  const name = document.createElement('span');

  head.textContent = article.headline;
  imgp.src = article.authorPhoto;
  name.textContent = "By " + article.authorName;

  card.classList.add("card");
  head.classList.add("headline");
  auth.classList.add("author")
  imgc.classList.add("img-container");

  card.appendChild(head);
  card.appendChild(auth);
  auth.appendChild(imgc);
  imgc.appendChild(imgp);
  auth.appendChild(name);
  
  return card;
}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //

  axios.get(`http://localhost:5001/api/articles`)
  .then( response => {
    console.log(response);
    response.data.articles.bootstrap.forEach(element => {
      document.querySelector(selector).appendChild(Card(element));
    });
    response.data.articles.javascript.forEach(element => {
      document.querySelector(selector).appendChild(Card(element));
    });
    response.data.articles.jquery.forEach(element => {
      document.querySelector(selector).appendChild(Card(element));
    });
    response.data.articles.node.forEach(element => {
      document.querySelector(selector).appendChild(Card(element));
    });
    response.data.articles.technology.forEach(element => {
      document.querySelector(selector).appendChild(Card(element));
    });
  })
  .catch(error => {
    console.log("Error:", error);
  })
}

export { Card, cardAppender }
