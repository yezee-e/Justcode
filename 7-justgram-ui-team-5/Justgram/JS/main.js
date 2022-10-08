const commentP = document.querySelectorAll('.main-five__button'); //"게시버튼"
const button = document.querySelector('.main-five__button');
const commentInput = document.querySelectorAll('.main-five__input'); //"input"
const commentMainFour = document.getElementsByClassName('main-four__state'); //댓글창
const commentPArray = Array.from(commentP); //foreach로 클릭이벤트받기
const commentInputArray = Array.from(commentInput); //foreach로 enter이벤트받기
const B = Array.from(button);
console.log(commentPArray);
console.log(B);

//게시버튼 클릭으로 댓글입력
commentPArray.forEach((p, index) => {
  p.addEventListener('click', (event) => {
    const inputText = commentInput[index];
    const comment = commentMainFour[index];
    if (inputText.value == '') {
      event.preventDefault(); //input이 공란이면 댓글못달게 막기
    } else {
      updateCommentListDom(inputText.value, comment, 'yezee-e');
      inputText.value = '';
    }
  });
});

//input창에 enter로 댓글입력
commentInputArray.forEach((p, index) => {
  p.addEventListener('keyup', (event) => {
    const inputText = commentInput[index];
    if (inputText.value == '') {
      event.preventDefault(); //input이 공란이면 댓글못달게 막기
    } else if (event.keyCode == '13') {
      const inputText = commentInput[index];
      const comment = commentMainFour[index];
      updateCommentListDom(inputText.value, comment, 'yezee-e');
      inputText.value = '';
    }
  });
});

//fetch
const getCommentList = () => {
  fetch('./data/commentList.json')
    .then((res) => res.json())
    .then((json) => {
      json.forEach((json, index) => {
        const commentArea = commentMainFour[index];
        updateCommentListDom(json.content, commentArea, json.nickname);
      });
    });
};

getCommentList();

function updateCommentListDom(value, comment, writer) {
  const commentChat = document.createElement('div');
  commentChat.classList.add('main-four__state__chat'); //<div class="main-four__state__chat"></div>

  const nicknameSpan = document.createElement('span'); //bold한 아이디
  nicknameSpan.classList.add('bold');
  nicknameSpan.textContent = writer;

  const contentSpan = document.createElement('span'); //input text내용
  contentSpan.innerText = value;

  commentChat.append(nicknameSpan, contentSpan); //comentMent에 아이디 text내용 넣고
  comment.append(commentChat); //댓글란에 집어 넣는다
}
