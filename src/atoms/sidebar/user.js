const userProfile = (imgSrc) => {

  const user = document.createElement('div');
  user.classList.add('user-container');

  const userImage = new Image();
  userImage.src = imgSrc;
  user.appendChild(userImage);

  const userSpan = document.createElement('span');
  userSpan.innerHTML = window.localStorage.getItem('user');
  user.appendChild(userSpan);

  return user
}

export default userProfile