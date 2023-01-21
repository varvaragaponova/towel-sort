
// You should implement your task here.
// Option 1
// module.exports = function towelSort (matrix) {
//   return matrix ? matrix.map((item, index) => {
//     if(index % 2 !== 0) {
//       return item.reverse();
//     }
//     return item;
//   }).flat(Infinity) : [];
// }


//Option 2
// module.exports = function towelSort (matrix) {
//   if (!matrix) return [];

//   const items = [];

//   matrix.forEach((item, index) => {
//     if(index % 2 !== 0) {
//       items.push(...item.reverse());
//     }
//     else items.push(...item);
//   });

//   return items;
// }

//Option 3
module.exports = function towelSort (matrix) {
  if (!matrix) return [];

  return matrix.reduce((acc, item, index) => {
    if(index % 2 !== 0) {
      acc.push(...item.reverse());
    } else {
      acc.push(...item);
    }
      return acc;
  }, [])
}
