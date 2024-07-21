if(window.localStorage.length < 1){
  window.localStorage.setItem('collection', JSON.stringify(CollectionList));
  window.localStorage.setItem('user', 'Suru');
}

export const CollectionList = JSON.parse(window.localStorage.getItem('collection'));