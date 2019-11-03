//task1
var a = 17;
var b = 74;
a = a + b; //91
b = a - b; //17
a = a - b; //74

//task2
var Pi = Math.PI;
var V;
var R = 5;

V = 4 * Pi * R * R * R / 3;
console.log(V.toFixed(2)); //523.60

//task3
var R = 5;
var Pi = Math.PI;
var S; 

S = Pi * R * R;
console.log(S.toFixed(2)); //78.54

//task4
var i = 60;
var I = 60;
while(i >= 0){
    if(i == 50 || i == 16 || i == 10 || i == 6 || i == 0){
        console.log("checkpoint");
    }else {
        console.log(i + " sec");
    }
i--;
}

//task5
var i;
var r;
for(r = 0; r < 26; r++){
    for(i = 0; i < 100; i++){
        console.log(r + "-" + i);
    }
}