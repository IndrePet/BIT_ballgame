function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export const gameBoard = (id) => {
  const square = document.createElement('div');
  square.classList.add('square');
  square.id = id;
  const bins = [];
  for (let i = 0; i < 25; i++) {
    bins[i] = document.createElement('div');
    bins[i].classList.add('bin');
    square.appendChild(bins[i]);
  }
  document.querySelector('body').appendChild(square);
  return bins;
};

export const array25 = () => {
  const arrayShuffle = new Set();
  do {
    arrayShuffle.add(rand(1, 25));
  } while (arrayShuffle.size < 25);
  return [...arrayShuffle];
};

export const gameControls = () => {
  const panel = document.createElement('div');
  panel.classList.add('panel');

  const timer = document.createElement('h3');
  const start = document.createElement('button');
  start.appendChild(document.createTextNode('Start'));

  const reset = document.createElement('button');
  reset.appendChild(document.createTextNode('Reset Board'));

  panel.appendChild(start);
  panel.appendChild(timer);
  panel.appendChild(reset);

  document.querySelector('body').appendChild(panel);

  return { timer: timer, start: start, reset: reset };
};

export const msgPanel = () => {
  const msgDiv = document.createElement('div');
  msgDiv.classList.add('msg');
  document.querySelector('body').appendChild(msgDiv);
  return msgDiv;
};
