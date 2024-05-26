import '../styles/header.css'

const header = () => {
  const header = document.createElement('div');
  header.classList.add('header');

  const searchBar = document.createElement('div');
  searchBar.classList.add('search-bar-conatiner');
  searchBar.innerHTML = `<input />`;
  header.appendChild(searchBar);

  return header;
}

export default header;