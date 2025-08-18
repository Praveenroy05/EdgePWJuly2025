// Array - [] - Can hold more tha 1 value as well - 

let array = [10,20,30,40,50,"TS"] // 
// [0:10, 1:20, 2:30, 3:40, 4:50, 5:"TS"] // [0-5]

console.log(array[0])
console.log(array[1])
console.log(array[2])

let array1 : string[] = ["100", "TS", "JS", "blue"]

/*

for(variable declaration of arrayName){
     console.log(variable)
}

// for ... of loop
*/
for(let element of array){
    console.log(element);
}

console.log("************************")

// Traditional for loop

for (let i=0; i<array.length; i++)
{
    console.log(array[i])
}



// 1. length - It returns the total number of elements in the array
// Syntax:
// arrayName.length
console.log(array.length);

// 2. push(element1, element2,....) - Adds the element to the end of an array
// Syntax:
// arrayName.push(element1, element2,....)
array.push("Java", "Python", "JS")
console.log("Push", array);

// 3. pop() - Removes the last element from an array
// Syntax:
// arrayName.pop()
console.log("Pop", array.pop());
console.log(array);

// 4. unshift(ele, ele1,......) - Adds the element to beginning of an array
// Syntax:
// arrayName.unshift(ele, ele1,......)
console.log("Unshift", array.unshift(100, "C", "C++"))
console.log(array);

// 5. shift() - Remove the first element from an array
// Syntax:
// arrayName.shift()
array.shift()
console.log(array);



// ['C','C++', 10, 20, 30, 40, 50,'TS', 'Java', 'Python']

// 6. splice(startIndex, numberOfElementToDelete, ele1, ele2, ele3)
// Syntax:
// arrayName.splice(startIndex, numberOfElementToDelete, ele1, ele2, ele3)
// startIndex - The position where you want to add/remove the element
// numberOfElementToDelete - The number of elements you want to delete at the startIndex
// ele1, ele2, ele3 - The elements you want to add at the startIndex
array.splice(3, 1)
console.log(array);