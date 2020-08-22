const whiteKeyboardList = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '|', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '<', '>', '?'];
const blackKeyboardList = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[',']', '(', ')', '+'];

const keynotes = document.querySelectorAll('.key');
const whiteKeys = document.querySelectorAll('.key.white');
const blackKeys = document.querySelectorAll('.key.black');

const playNoteSound = (key) => {
  const keyNoteSound = document.getElementById(key.dataset.keynote);
  keyNoteSound.currentTime = 0;
  keyNoteSound.play();
  key.classList.add('active-keynote');
  
  setTimeout(function() {
    key.classList.remove('active-keynote');
}, (1*1000)); 
}

keynotes.forEach(key => {
  key.addEventListener('click', () => playNoteSound(key))
});


document.addEventListener('keydown', event => {
  const whiteKeyIndex = whiteKeyboardList.indexOf(event.key);
  const blackKeyIndex = blackKeyboardList.indexOf(event.key);

  if(whiteKeyIndex > -1) playNoteSound(whiteKeys[whiteKeyIndex]);
   
 if(blackKeyIndex > -1) playNoteSound(blackKeys[blackKeyIndex]);
 
  if(event.repeat) return;

});