function threeSum(arr, target) {
// write your code here
  let initialdiff=Number.MAX_VALUE
let ans=-1
for(i=0;i<=arr.length-3;i++){
    for(j=i+1;j<=arr.length-2;j++){
		for(k=j+1;k<=arr.length-1;k++){
				let sum=arr[i]+arr[j]+arr[k];
				let diff=Math.abs(sum-target);
				if(initialdiff>diff){
					initialdiff=diff;
					ans=sum;
						}
			}
		}
	}
	return ans;
}

module.exports = threeSum;
