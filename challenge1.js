//CHALLENGE GROUP 1: Write a function that will tell me if a phrase, word, or input (STRING) is a palindrome.
//CHALLENGE GROUP 1: Write a function that will take an array of strings or numbers and randomly reorder them.
//checks if the input string is a palindrome
function checkPalindrome (palindrome){
    let str = "";
    for( let i = palindrome.length; i > 0; i-- ){
        str += palindrome.substring(i-1,i); //creates a string with the backwards spelling of the input
    }
    //console.log(str);
    if(str === palindrome){ //if input is a palindrome then alerts that it is
      console.log(palindrome + ' is a palindrome')
    }else{ //else it is not one
        console.log(palindrome + ' is not a palindrome')
    }
};
//test methods for palindromes
checkPalindrome('racecar'); //test 1 odd length word: true
checkPalindrome('brrb'); //test 2 even length word: true
checkPalindrome('vroom'); //test 3 even length word: false
checkPalindrome('vro'); //test 4 odd length word: false

//shuffles the input array
function arrShuffle (arr){ //linear time shuffling 
    for(let i = 0; i < arr.length; i++){
        let rando = Math.floor(Math.random() * arr.length); //randomly generate an index in the array
        let temp = arr[rando]; //next 3 lines are swapping current index with a random one
        arr[rando] = arr[i];
        arr[i] = temp;
    }
    console.log(arr);
}
//test methods for array shuffle
let yarr = [10,20,30,40,50,60,70];
arrShuffle(yarr); //test of shuffling with numbers
let wordArr = ['andrew', 'bob', 'sally','john cena','guy fieri', 'quirky individual'];
arrShuffle(wordArr); //test of shuffling with strings

//CHALLENGE GROUP 2: PRODUCTIVTY TRACKER
//idea here is that we use 5 arrays to construct the full task for ease of access as well as constant time changes
let list1 = new Array(1); //title
let list2 = new Array(1); //desc
let list3 = new Array(1); //date created
let list4 = new Array(1); //due date
let list5 = new Array(1); //status
let size = 0;

//method to resize all of the lists for add
function resize(){
    //temp variables for what the new array will be
    let temp1 = new Array(list1.length +1);
    let temp2 = new Array(list2.length +1);
    let temp3 = new Array(list3.length +1);
    let temp4 = new Array(list4.length +1);
    let temp5 = new Array(list5.length +1);
    //copy them over
    for(let i = 0; i < size; i++){
        temp1[i] = list1[i]
        temp2[i] = list2[i]
        temp3[i] = list3[i]
        temp4[i] = list4[i]
        temp5[i] = list5[i]
    }
    //The old lists are discarded and the new lists take their place
    list1 = temp1;
    list2 = temp2;
    list3 = temp3;
    list4 = temp4;
    list5 = temp5;
}
//swapping contents from index 1 to index 2
function swap(index1,index2){
    let temp1 = list1[index1]; 
    list1[index1] = list1[index2];
    list1[index2] = temp1;
    let temp2 = list2[index1]; 
    list2[index1] = list2[index2];
    list2[index2] = temp2;
    let temp3 = list3[index1]; 
    list3[index1] = list3[index2];
    list3[index2] = temp3;
    let temp4 = list4[index1]; 
    list4[index1] = list4[index2];
    list4[index2] = temp4;
    let temp5 = list5[index1];
    list5[index1] = list5[index2];
    list5[index2] = temp5;
}
//adds to the back
function add(title,desc,date,due,status){ // title, description, date created, date due, and its status (New, Working on, Finished)
    if(size >= list1.length){
        resize();
    }
    list1[size] = title;
    list2[size] = desc;
    list3[size] = date;
    list4[size] = due;
    list5[size] = status;
    size++;
}
//old index must be greater than or equal to new Index, brings contents of index from the right to the left 
function shiftUpFrom(oldIndex, newIndex){
    let temp1 = list1[oldIndex];
    let temp2 = list2[oldIndex];
    let temp3 = list3[oldIndex];
    let temp4 = list4[oldIndex];
    let temp5 = list5[oldIndex];
    //let temp2 = list[newIndex+1];
    for(let i = oldIndex; i >= newIndex; i--){
        /*temp2 = list[i+1]
        list[i+1] = ;
        temp2 = list[i+1]*/
        list1[i] = list1[i-1];
        list2[i] = list2[i-1];
        list3[i] = list3[i-1];
        list4[i] = list4[i-1];
        list5[i] = list5[i-1];
    }
    list1[newIndex] = temp1;
    list2[newIndex] = temp2;
    list3[newIndex] = temp3;
    list4[newIndex] = temp4;
    list5[newIndex] = temp5;
}
//old index must be less than or equal to new Index, brings contents of index from the left to the right
function shiftDownFrom(oldIndex, newIndex){
    let temp1 = list1[oldIndex];
    let temp2 = list2[oldIndex];
    let temp3 = list3[oldIndex];
    let temp4 = list4[oldIndex];
    let temp5 = list5[oldIndex];
    for(let i = oldIndex; i <= newIndex; i++){
        list1[i] = list1[i+1];
        list2[i] = list2[i+1];
        list3[i] = list3[i+1];
        list4[i] = list4[i+1];
        list5[i] = list5[i+1];
    }
    list1[newIndex] = temp1;
    list2[newIndex] = temp2;
    list3[newIndex] = temp3;
    list4[newIndex] = temp4;
    list5[newIndex] = temp5;
}
//removes contents at index and shifts everything up
function remove(index){
    //strategy here is to sput the object in the index to the bottom then copy the entire lists from start to end-1 to exclude the object and thus removing it
    shiftDownFrom(index,size-1) 
    let temp1 = new Array(list1.length -1);
    let temp2 = new Array(list2.length -1);
    let temp3 = new Array(list3.length -1);
    let temp4 = new Array(list4.length -1);
    let temp5 = new Array(list5.length -1);
    for(let i = 0; i < size-1; i++){
        temp1[i] = list1[i]
        temp2[i] = list2[i]
        temp3[i] = list3[i]
        temp4[i] = list4[i]
        temp5[i] = list5[i]
    }
    size--;
    list1 = temp1;
    list2 = temp2;
    list3 = temp3;
    list4 = temp4;
    list5 = temp5;
}
//constant time changes for title
function changeTitle(index,change){
    list1[index] = change;
}
//constant time changes for description
function changeDesc(index,change){
    list2[index] = change;
}
//constant time changes for date created
function changeCreated(index,change){
    list3[index] = change;
}
//constant time changes for due date
function changeDue(index,change){
    list4[index] = change;
}
//constant time changes for status
function changeStatus(index,change){
    list5[index] = change;
}
//method to display tasks
function display(){
    for(let i = 0; i < size ; i++){
        let a = i+1;
        console.log('[task ' + a + ']: ' + list1[i] + ', Description: ' + list2[i] + ', created on: ' + list3[i] + ', due: ' + list4[i] + ", Status: " + list5[i] +".");
    }
    console.log(); //for spacing in terminal for easier reading
}
//test methods
add('cool task 1', 'is cool', '02/05/2001', 'tmrw', 'in progress');
add('cool task 2', 'is cooler', '02/06/2001', 'two days from now', 'new');
add('cool task 3', 'is coolest', '02/07/2001', 'three days from now', 'done');
add('cool task 4', 'is coolestest', '02/08/2001', 'four days from now', 'in progress');
add('cool task 5', 'is pretty cool', '02/09/2001', 'five days from now', 'in progress');
display(); //test to see if add works
shiftUpFrom(3,1);
display(); //test to see if shift up works
shiftDownFrom(1,3);
display(); //test to see if shift down works
remove(0);
display();
changeTitle(0,'lame task 2');
changeDesc(1,'lame');
changeCreated(2, '01/01/1805');
changeDue(3, 'Never doing this');
changeStatus(0,'finished');
display();