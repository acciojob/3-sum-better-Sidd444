function threeSum(arr, target) {
// write your code here
  let ans=Number.MAX_VALUE;
  arr.sort();
  for(let i=0;i<arr.length;i++){
	  let l=i+1,r=arr.length-1;
	  while(l<r){
		  let sum=arr[i]+arr[l]+ar[r];
		  if(Math.abs(sum-target)<=ans) {
	       ans=sum;
		   l++;
		   r--;
		  }else if(sum<target) l++;
		  else r--;
	  }
  }
}

module.exports = threeSum;
