var trap = function(height) {
  let all = 0; 
  const maxH = Math.max(...height);
  const heightLen = height.length;
  for(let k = 1; k<= maxH; k++){
      for (let i = 0; i < heightLen; i++ ) {
          const floor = (k - 1);
          const preN = height[i- 1] - floor;
          const nowN = height[i]- floor;
          const nestN = height[i + 1] - floor;
          const arr = [...height].splice(i,i)
          const preArr = [...height].splice(i,i).filter(e=> e > floor)
          const newArr = arr.filter(e=> e > floor)
          if(preN >= k && nestN >=k && nowN < preN && nowN === floor &&  newArr.length> 0 && preArr.length > 0) {
          // if(nowN < preN && nowN < floor &&  newArr.length> 0 && preArr.length > 0) {
              all++
          }
      }
  }
  return all
};


console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]))