(function app() {
  'use strict';

  let documentReady = () => {

    let lastMark;

    $('.box').on('click.mark', (event) => {
      let el = event.target;

      lastMark = (lastMark === "X") ? "O" : "X";
      $(el).text(lastMark);
      $(el).off('click.mark');
    });

  }


  $(documentReady);

})();
