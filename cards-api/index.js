fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=52')
  .then(function(data) {
    return data.json();
  })
  .then(function(data) {
    console.log(data)
  })
  .catch(function(error) {
    console.log(error);
  });