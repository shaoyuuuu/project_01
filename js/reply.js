//用户分数
const userScore = document.querySelector('#scores');

//宠物提示
const petTips = document.querySelector('#tips');

//问题
const problem = document.querySelector('.problem');

//选项
const options = document.querySelectorAll('.option span');

//当前页面题目序号
let problemCount = 0;

//当前题目对应的正确答案
let correctOption;

console.log(options);
const questionsList = [
  {
    question: '你的同学cc嘴上长了一个大炮，请你帮帮他，选择适合她的药材',
    option: ['板蓝根#', '可乐', '旺仔牛奶', '酸辣粉']
  },
  {
    question: '你的同学ee嘴上长了一个大炮，请你帮帮他，选择适合她的药材',
    option: ['板蓝根#', '可乐', '旺仔牛奶', '酸辣粉']
  },
  {
    question: '你的同学bb嘴上长了一个大炮，请你帮帮他，选择适合她的药材',
    option: ['板蓝根#', '可乐', '旺仔牛奶', '酸辣粉']
  },
  {
    question: '你的同学aa嘴上长了一个大炮，请你帮帮他，选择适合她的药材',
    option: ['板蓝根#', '可乐', '旺仔牛奶', '酸辣粉']
  }
]
const str = JSON.stringify(questionsList);
const str1 = '[{"question":"11111111111","option":["aaaaaaaaa#","bbbbbbbbb","cccccccccccccccccc","ddddddddddd"]},{"question":"222222222","option":["aaaaaaaaa","bbbbbbbbb#","cccccccccccccccccc","ddddddddddd"]},{"question":"33333333333","option":["aaaaaaaaa","bbbbbbbbb","cccccccccccccccccc#","ddddddddddd"]},{"question":"444444444444","option":["aaaaaaaaa","bbbbbbbbb","cccccccccccccccccc","ddddddddddd#"]},{"question":"555555555555555","option":["aaaaaaaaa#","bbbbbbbbb","cccccccccccccccccc","ddddddddddd"]},{"question":"6666666666666","option":["aaaaaaaaa","bbbbbbbbb","cccccccccccccccccc#","ddddddddddd"]},{"question":"77777777777","option":["aaaaaaaaa","bbbbbbbbb","cccccccccccccccccc","ddddddddddd#"]},{"question":"88888888888","option":["aaaaaaaaa","bbbbbbbbb#","cccccccccccccccccc","ddddddddddd"]},{"question":"99999999999","option":["aaaaaaaaa","bbbbbbbbb","cccccccccccccccccc#","ddddddddddd"]},{"question":"1101001010","option":["aaaaaaaaa#","bbbbbbbbb","cccccccccccccccccc","ddddddddddd"]}]'

//渲染题目函数 传入JSON对象
function renderingProblems(questionsJSON) {
  const questionsLists = JSON.parse(questionsJSON);
  if (problemCount < questionsLists.length) {
    //浅拷贝对应题目的选项
    const optionArr = JSON.parse(questionsJSON)[0].option;
    console.log(optionArr);
    //将选项状态清空
    for (let i = 0; i < optionArr.length; i++) {
      document.querySelectorAll('.option')[i].className = 'option';
    }

    problem.innerHTML = (problemCount + 1) + '.<br>' + questionsLists[problemCount].question;
    for (let i = 0; i < options.length; i++) {
      let random = Math.floor(Math.random() * optionArr.length);
      if (/#/.test(optionArr[random])) {
        optionArr[random] = optionArr[random].replace('#', '');
        correctOption = optionArr[random];
      }
      options[i].innerHTML = optionArr[random];
      optionArr.splice(random, 1);
    }
  }

  if(problemCount===questionsLists.length){
    alert('dawan')
  }
}
renderingProblems(str1);

//判断选择选项的正误
let xztTimer;
document.querySelector('.question-bar').addEventListener('click', function (e) {
  if (e.target.dataset.option) {
    if (e.target.querySelector('span').innerHTML === correctOption) {
      e.target.classList.add('true');
    } else {
      e.target.classList.add('false');
    }
    if (!xztTimer) {
      xztTimer = setTimeout(function () {
        problemCount++;
        xztTimer = null;
        renderingProblems(str1);
      }, 300);
    }
  }
})


//向后台请求数据

//运动测试
const img = document.querySelector('.pet img');
let ztf = 1;
let timer = setInterval(function () {
  if (ztf === 1) {
    img.src = `../image/run0${ztf}.png`;
    ztf = 2;
    return;
  }
  if (ztf === 2) {
    img.src = `../image/run0${ztf}.png`;
    ztf = 1;
  }
}, 150);


