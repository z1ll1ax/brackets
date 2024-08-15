module.exports = function check(str, bracketsConfig) {
  let arr = str.split('');
  let curr, prev;
  curr = prev = arr.length;
  do {
    prev = curr;
    for (let i = 0; i < arr.length - 1; i++){
      for (let j = 0; j < bracketsConfig.length; j++){
        if (arr[i] === bracketsConfig[j][0] && arr[i + 1] === bracketsConfig[j][1]){
          arr.splice(i, 2);
          curr-=2;
        }
      }
    }
  } while (curr !== prev);
  if (arr.length > 0) return false;
  return true;
}
