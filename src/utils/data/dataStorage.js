import { collection } from "./dummy";

if(window.localStorage.length < 1){
  window.localStorage.setItem('collection', JSON.stringify(collection));
  window.localStorage.setItem('user', 'Suru');
}

export const CollectionList = JSON.parse(window.localStorage.getItem('collection'));