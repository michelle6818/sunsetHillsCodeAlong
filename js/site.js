

document.getElementById("btnJoin").addEventListener("click", Join);


// JOIN function

function Join(){
    let fruits = ["Banana", "Orange", "Apple", "Mango"];
    // OR....
    // let fruit = new Array();
    // fruits.push("banana");
    // fruits.push("orange");
    // fruits.push("apple");
    // fruits.push("mango");

    // uses a specific join character
    document.getElementById("outputCard1").innerHTML =  fruits.join("*");
    // this way will use comma by default
    // document.getElementById("outputCard1").innerHTML =  fruits;
}

// Reverse
function Reverse(){
    
    let fruits = ["Banana", "Orange", "Apple", "Mango"];
    // let reverseFruits = fruits.reverse()
    // document.getElementById("outputCard2").innerHTML = reverseFruits.join(" * ");
    document.getElementById("outputCard2").innerHTML = fruits.reverse();
}

function ReverseUsingSplitandJoin(){
    let word = "Hello";
    // go from string to array
    // step 1: split the word Hello into an Array --> ['H','e','l','l','o']
    // step 2: reverse the array --> ['o','l','l','e','H']
    // step 3: join reverse array without a join character --> "olleH"
    document.getElementById("outputCard3").innerText =
        word.split('').reverse().join('');
        // will split, then reverse, then join
    
}
function Sort(){
    let array = ["Bananas", "Oranges", "Apples", "Mangos"];
    document.getElementById("outputCard4").innerText = array.sort();
}