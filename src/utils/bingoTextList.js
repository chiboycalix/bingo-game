
const bingoTextList = [
  'Hello, hello?',
  'I need to jump in another call',
  'Can everyone go on mute?',
  'Could you please get closer to the mic',
  'Next slide, please',
  '(child noises in the background)',
  'Can we take this offline?',
  '(loud painful echo / feedback)',
  'Could you share the slides afterwards?',
  'Is ...... on the call?',
  'Can you email that to everyone?',
  'Can someone grant host rights?',
  'Raise your hand to ask a question',
  "Sorry, I couldn't find the meeting ID",
  'Sorry, I had problems logging in',
  '(animal noises in the background)',
  'Sorry, I was on mute',
  'I had connection issues',
  "I'll have to get back to you",
  'Who just joined?',
  "Let's wait for ......!",
  'Sorry, something ..... with my calender',
  'Can you see my screen?',
  'Will you send the minutes?',
];

const shuffle = (array) => {
  let currentIndex = array.length, randomIndex;
  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
  return array;
}

const shuffledTextList = shuffle(bingoTextList);
const midArrayIndex = shuffledTextList.length / 2;
const arrayLength = shuffledTextList.length;
const finalResult = shuffledTextList.slice(0, midArrayIndex)
  .concat(['Meet Bingo', ...shuffledTextList.slice(midArrayIndex, arrayLength)]);

export default finalResult;
