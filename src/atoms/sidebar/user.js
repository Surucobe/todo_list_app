const userProfile = (imgSrc, userName = 'user name') => {

  const user = document.createElement('div');
  user.classList.add('user-container');

  const userImage = new Image();
  userImage.src = imgSrc;
  user.appendChild(userImage);

  const userSpan = document.createElement('span');
  userSpan.innerHTML = userName;
  user.appendChild(userSpan);

  return user
}

export default userProfile