const commentP = document.querySelectorAll('.main-five__button'); //"게시버튼"
const commentInput = document.querySelectorAll('.main-five__input'); //"input"
const commentMainFour = document.getElementsByClassName('main-four__state'); //댓글창
const commentPArray = Array.from(commentP); //foreach로 클릭이벤트받기
const commentInputArray = Array.from(commentInput); //foreach로 enter이벤트받기

//게시버튼 클릭으로 댓글입력
commentPArray.forEach((p, index) => {
  p.addEventListener('click', () => {
    const inputText = commentInput[index];
    const comment = commentMainFour[index];

    const commentChat = document.createElement('div');
    commentChat.classList.add('main-four__state__chat'); //<div class="main-four__state__chat"></div>

    const nicknameSpan = document.createElement('span'); //bold한 아이디
    nicknameSpan.classList.add('bold');
    nicknameSpan.textContent = 'yezee-e';

    const contentSpan = document.createElement('span'); //input text내용
    contentSpan.innerText = inputText.value;

    commentChat.append(nicknameSpan, contentSpan); //comentMent에 아이디 text내용 넣고
    comment.append(commentChat); //댓글란에 집어 넣는다
    comment.value = '';
  });
});

//input창에 enter로 댓글입력
commentInputArray.forEach((p, index) => {
  p.addEventListener('keydown', (event) => {
    if (event.keyCode == '13') {
      event.preventDefault();
      const inputText = commentInput[index];
      const comment = commentMainFour[index];

      const commentChat = document.createElement('div');
      commentChat.classList.add('main-four__state__chat'); //<div class="main-four__state__chat"></div>

      const nicknameSpan = document.createElement('span'); //bold한 아이디
      nicknameSpan.classList.add('bold');
      nicknameSpan.textContent = 'yezee-e';

      const contentSpan = document.createElement('span'); //input text내용
      contentSpan.innerText = inputText.value;

      commentChat.append(nicknameSpan, contentSpan); //comentMent에 아이디 text내용 넣고
      comment.append(commentChat); //댓글란에 집어 넣는다
      inputText.value = '';
    } else if ((event.value = ' ')) {
      //공란일 경우 댓글업로드 막기
    }
  });
});

//fetch
const getCommentList = () => {
  fetch('./data/commentList.json')
    .then((res) => res.json())
    .then((json) => {
      json.forEach((comment, index) => {
        const commentArea = commentMainFour[index];

        const commentList = document.createElement('div');
        commentList.classList.add('main-four__state__chat');

        const nicknameSpan = document.createElement('span'); //bold한 아이디
        nicknameSpan.classList.add('bold');
        nicknameSpan.innerText = comment.nickname;

        const contentSpan = document.createElement('span'); //input text내용
        contentSpan.innerText = comment.content;

        commentList.append(nicknameSpan, contentSpan);
        console.log(commentList);

        commentArea.append(commentList);
      });
    });
};

getCommentList();
