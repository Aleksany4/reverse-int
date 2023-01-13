module.exports = function reverse (n) {
   let str_n = n.toString();
   let result = '';
   let i = 0;
   while (i < str_n.length) {
    result = str_n[i] + result;
    i++;
   }
   let finish = parseInt(result);
   return finish;
};
