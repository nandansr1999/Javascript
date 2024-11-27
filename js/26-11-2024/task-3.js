let score = 91
if ( score >= 90 && score <= 100){
    console.log('The Grade is: A');
}
else if( score >= 80 && score < 90){
    console.log('The Grade is: B');
}
else if( score >= 70 && score < 80){
    console.log('The Grade is: C');
}
else if( score >= 60 && score < 70){
    console.log('The Grade is: D');
}
else if( score >= 0 && score < 60){
    console.log('The Grade is: F');
}
else{
    console.log('Enter a Valid Number');
}