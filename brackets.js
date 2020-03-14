var isValid = function (s) {
    //This is looking for a stack, last open bracket is what we want to close
    //for loop that pushes open brackets, pops then with a close

    let openStack = [];
    let pops = 0;

    for (let i = 0; i < s.length; i++) {

        switch (s[i]) {
            case "{":
                openStack.push(s[i]);
                break;
            case "[":
                openStack.push(s[i]);
                break;
            case "(":
                openStack.push(s[i]);
                break;
            case "}":
                if (openStack[openStack.length - 1] === "{") {
                    openStack.pop();
                    pops += 1;
                }
                break;
            case "]":
                if (openStack[openStack.length - 1] === "[") {
                    openStack.pop();
                    pops += 1;
                }
                break;
            case ")":
                if (openStack[openStack.length - 1] === "(") {
                    openStack.pop();
                    pops += 1;
                }
                break;
            default:
                break;
        }
    }
    if (s.length / 2 === pops) {
        return true
    } else {
        return false
    }
};

console.log(isValid("({[]})"));
