const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = '外は華氏94度だったので :insertx: は散歩に出かけました。 彼らが :inserty:にたどり着いた時、 彼らは恐怖でしばらく見つめそれから:insertz:　を見つめました。Bob は全部見ましたが驚きませんでした。体重300ポンドの:insertx: にとっては暑い日でした。';
const insertX = ['ミニオン', 'ハンギョドン', 'ハム太郎'];
const insertY = ['エベレスト', '上野動物園', '東京タワー'];
const insertZ = ['空', '木の根元', '窓の外'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':insertz:',zItem);

  if (customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Bob', name);
  }

  if (document.getElementById("uk").checked) {
    const weight = `${Math.round(300*0.0714286)} stone`;
    const temperature =  `${Math.round((94-32) * 5 / 9)} centigrade`;
    newStory = newStory.replace('華氏94', temperature);
    newStory = newStory.replace('300', weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
