let array = [1, 2, 3, 4, 5, 6, 7];
const index = array.indexOf(2);
function removeElement(array) {
  delete array[4];
  return array;
}
console.log(removeElement(array));
