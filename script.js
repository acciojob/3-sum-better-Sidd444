function threeSum(arr, target) {
// write your code here
  let curr=Number.MAX_VALUE,ans=0;
  arr.sort();
  for(let i=0;i<arr.length-2;i++){
	  let l=i+1,r=arr.length-1;
	  while(l<r){
		  let sum=arr[i]+arr[l]+ar[r];
		  if(Math.abs(sum-target)<curr) {
		   curr=Math.abs(sum-target);
	       ans=sum;
		  }
		   
		   if(sum<target) l++;
		  else r--;
	  }
  }
  console.log(ans);
}

module.exports = threeSum;
