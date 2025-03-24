const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}
const storyText = 'It was a nice day in the Mushroom Kingdom, so :insertx: went outside to stroll around. Once :inserty: was reached, they realized how far away they were. They decided to go back, when they :insertz:. Luigi witness this nearby, because he happened to be walking around as well. :insertx: happily greeted him, and the two of them began the long journey back.'

const insertX = ['Mario',
'Princess Peach',
'Purple Toad the Mailman']

const insertY = ['the castle',
'Rogueport',
'Dimble Wood']

const insertZ = ['loudly screamed',
'suddenly did a triple jump',
'got a fire flower and transformed']

randomize.addEventListener('click', result);

function result() {
    let newStory = storyText;
    let xItem = randomValueFromArray(insertX);
    let yItem = randomValueFromArray(insertY);
    let zItem = randomValueFromArray(insertZ);

    newStory = newStory.replaceAll(':insertx:',xItem);
    newStory = newStory.replaceAll(':inserty:',yItem);
    newStory = newStory.replaceAll(':insertz:',zItem);

  if(customName.value) {
    const name = customName.value;
    newStory = newStory.replaceAll('Luigi', name);
  }


  story.textContent = newStory;
  story.style.visibility = 'visible';
}