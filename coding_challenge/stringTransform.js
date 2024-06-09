function Stringtransform(input) {
    const length = input.length;


    if (length % 15 === 0) {
        const reversed = input.split('').reverse().join('');
        return reversed.split('').map(char => char.charCodeAt(0)).join(' ');
    }

    
    else if (length % 5 === 0) {
        return input.split('').map(char => char.charCodeAt(0)).join(' ');
    }

    
    else if (length % 3 === 0) {
        return input.split('').reverse().join('');
    }

    return input;
}

// Example
console.log(Stringtransform("Hamburger"));           
console.log(Stringtransform("Pizza"));               
console.log(Stringtransform("Chocolate Chip Cookie"));           

