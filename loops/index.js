const cardsArray = [
  {
      "code": "5H",
      "image": "https://deckofcardsapi.com/static/img/5H.png",
      "images": {
          "svg": "https://deckofcardsapi.com/static/img/5H.svg",
          "png": "https://deckofcardsapi.com/static/img/5H.png"
      },
      "value": "5",
      "suit": "HEARTS"
  },
  {
      "code": "3C",
      "image": "https://deckofcardsapi.com/static/img/3C.png",
      "images": {
          "svg": "https://deckofcardsapi.com/static/img/3C.svg",
          "png": "https://deckofcardsapi.com/static/img/3C.png"
      },
      "value": "3",
      "suit": "CLUBS"
  },
  {
      "code": "2D",
      "image": "https://deckofcardsapi.com/static/img/2D.png",
      "images": {
          "svg": "https://deckofcardsapi.com/static/img/2D.svg",
          "png": "https://deckofcardsapi.com/static/img/2D.png"
      },
      "value": "2",
      "suit": "DIAMONDS"
  }
];

// above we have an array of objects
// looking at the object you can see .png on the url
// copy the url and paste in browser and see what happens

// the user wants to see the images of the cards on the screen
// with the image element we should be able to use the SRC attribute and set the value to the url


// TODO: create loop and inside the for loop create dom nodes(image elements in this case) and set the SRC to the url
// TODO: insert the dom nodes to the element with the id container