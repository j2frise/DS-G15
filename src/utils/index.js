export function search(what, key, array){
   return array.find(element => element[key] === what);
}