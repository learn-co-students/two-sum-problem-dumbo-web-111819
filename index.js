
function bruteForceTwoSum(arr, target){ 
    console.log(arr, target)
    let answers = []
    let seenNumbers = {}

    for (let first = 0; first < arr.length; first++){   // O(n)
        let compliment = target - arr[first] // O(1)
        if (seenNumbers[compliment]){ // O(1)
            answers.push([compliment,arr[first]]) // O(1)
        }
        seenNumbers[arr[first]] = true // O(1)

        // console.log('FIRST NUMBER', arr[first])
        // console.log('COMPLIMENT', compliment)
        // console.log('seen numbers', seenNumbers)

    }
    return answers

}



function binarySearchTwoSum(arr, target){ 
    console.log(arr, target)
    let answers = []
    let seenNumbers = {}

    for (let first = 0; first < arr.length; first++){   // O(n)
        let compliment = target - arr[first] // O(1)
        if (seenNumbers[compliment]){ // O(1)
            answers.push([compliment,arr[first]]) // O(1)
        }
        seenNumbers[arr[first]] = true // O(1)

        // console.log('FIRST NUMBER', arr[first])
        // console.log('COMPLIMENT', compliment)
        // console.log('seen numbers', seenNumbers)

    }
    return answers

}


function binaryMatch(arr, target){ 
    console.log(arr, target)
    let answers = []
    let seenNumbers = {}

    for (let first = 0; first < arr.length; first++){   // O(n)
        let compliment = target - arr[first] // O(1)
        if (seenNumbers[compliment]){ // O(1)
            return true
            // answers.push([compliment,arr[first]]) // O(1)
        }
        seenNumbers[arr[first]] = true // O(1)

        // console.log('FIRST NUMBER', arr[first])
        // console.log('COMPLIMENT', compliment)
        // console.log('seen numbers', seenNumbers)

    }
    return answers

}


function hashTwoSum(arr, target){ 
    console.log(arr, target)
    let answers = []
    let seenNumbers = {}

    for (let first = 0; first < arr.length; first++){   // O(n)
        let compliment = target - arr[first] // O(1)
        if (seenNumbers[compliment]){ // O(1)
            answers.push([compliment,arr[first]]) // O(1)
        }
        seenNumbers[arr[first]] = true // O(1)

        // console.log('FIRST NUMBER', arr[first])
        // console.log('COMPLIMENT', compliment)
        // console.log('seen numbers', seenNumbers)

    }
    return answers

}

// let sum = 6
// let array = [5, -2, 4, 9, 1]
// twoSum()
// [ [5, 1] ]