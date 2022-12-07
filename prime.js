function prime(num){
let count=0;
for(i=2;i<=num;i++){
if(num%i==0){
  count+=1;
}
}
if(count==1){
	return true;
else{
	return false;
}
}

}
let result=prime(17)

if(result==true){
console.log(" It is a prime")
}
else{
console.log("Its not a prime")
}