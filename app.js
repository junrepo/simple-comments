const tweetForm = document.querySelector('#tweet-form');
const tweetUl = document.querySelector('#tweet');

tweetForm.addEventListener('submit', function(e){
  e.preventDefault();
  let usernameInput = tweetForm.elements.username;
  let commentInput = tweetForm.elements.comment;
  createTweet(usernameInput.value, commentInput.value);
  usernameInput.value = '';
  commentInput.value = '';
})

function createTweet(username, comment) {
  const liTag = document.createElement('li');
  const bTag = document.createElement('b');
  bTag.append(`${username} : `);
  liTag.append(bTag);
  liTag.append(comment);
  tweetUl.append(liTag);
}