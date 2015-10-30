(function app() {
  'use strict';

  let documentReady = () => {

    let lastMark;

    $('.box').click( (event) => {
      let el = event.target;

      console.log(lastMark)
      // console.log( el.id );

      lastMark = (lastMark === "X") ? "O" : "X";

      $(el).text(lastMark);


    });

  }


  $(documentReady);

})();
