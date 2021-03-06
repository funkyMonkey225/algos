function isPalindrome(str) {
    str = str.replace(/[^A-Z0-9]/ig, "").toLowerCase()
    if (str.length < 1) {
        return false;
    }
    var len = Math.floor(str.length / 2);
    for (var i = 0; i < len; i++) {
        if (str[i] !== str[str.length - i - 1]) {
            return false;
        }
    }
    return true;
}

// questions: 
// 1. Is one letter a palindrome?
// 2. Should we include symbols or only letters and numbers? 