(function app() {
  'use strict';


  let documentReady = () => {
    let lastMark;

    let winningStates = [ [1,2,3], [4,5,6], [7,8,9],
                          [1,4,7], [2,5,8], [3,6,9],
                          [1,5,9], [3,5,7] ];

    let positionsOfX = [];
    let positionsOfO = [];

    Array.prototype.containedIn = function(otherArray) {
      // every element of A is and element of B
      return this.every(function(element) {
        return otherArray.indexOf(element) !== -1;
      });
    }

    // check for a winning condition
    function isWinner( positions ) {
      return winningStates.some(function(winningState) {
        return winningState.containedIn( positions );
      });
    }

    $('.box').on('click.mark', (event) => {
      let el = event.target;

      lastMark = (lastMark === "X") ? "O" : "X";
      $(el).text(lastMark);

      if (lastMark === "X") {
        positionsOfX.push( +el.id );
        if (isWinner(positionsOfX)) {
          $('#winner').text('X wins!');
          $('.box').off('click.mark');
        }
      } else {
        positionsOfO.push( +el.id );
        if (isWinner(positionsOfO)) {
          $('#winner').text('O wins!');
          $('.box').off('click.mark');
        }
      }

      $(el).off('click.mark');
    });

  }


  $(documentReady);

  $('#restart').click(function(){
    $('.box').empty();
    documentReady();
  })

})();
