// var arr = [1,2,3,4,5]
// var arr1 = [3,2,7,8,9]

var arr3 = [12,12,13,14,15]

// for (var i = 0; i < arr.length ; i++){
// arr3.push(arr[i])
// }
// for (var i = 0; i < arr1.length ; i++){
// 	arr3.push(arr1[i])
// 	}


var arr4 = []
var count1=0
for (var i = 0; i < arr3.length ; i++){

	for(var j= 0; i < arr3.length;j++){
		if (arr3[i]==arr3[j]){
			count1++
	}
	
	}
	if(count1==1){
		arr4.push(arr3[i])
	}
}

console.log(arr4)

console.log(1)