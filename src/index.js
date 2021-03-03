
// You should implement your task here.

module.exports = function towelSort(matrix) {
  let solution = [];
  if (matrix === undefined) {
    return [];
  };
  matrix.forEach((element, index) => {
    var asd = [];
    if (index === 0 || index % 2 === 0) {
      asd = asd.concat(element);
    } else {
      element = element.reverse();
      asd = asd.concat(element);
    };
    solution = solution.concat(asd);
  });
  return solution;
};



