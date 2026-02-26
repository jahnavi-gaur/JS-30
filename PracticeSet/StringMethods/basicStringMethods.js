let str = "jahnavigaur"

//split(separator)


//replaceAll()


//replace()
// The replace() method does not change the string it is called on.
// The replace() method returns a new string.
// The replace() method replaces only the first match
// If you want to replace all matches, use a regular expression with the /g flag set. See examples below.
// By default, the replace() method replaces only the first match:
// let text = "Please visit Microsoft and Microsoft!";
// let newText = text.replace("Microsoft", "W3Schools");
// newText = Please visit W3Schools and Microsoft!




//repeat()


//padEnd()


//padStart()


//trimEnd()
function trimEnd(str){
    console.log(str.length)
    let newStr = ""
    let j = str.length-1
    while(str[j] === " "){
        j--
    }
    for(let i = 0 ; i < j; i++){
        newStr += str[i]
    }
    console.log(newStr.length)
    return newStr
}
// console.log(trimEnd("     jahnavi gaur 123.  "))



//trimStart()
function trimStart(str){
    // console.log(str.length)
    let newStr = ""
    for(let i = 0; i < str.length; i++){
        if(str[i] === " " && newStr === ""){
            continue
        }
        else{
            newStr += str[i]
        }
    }
    // console.log(newStr.length)
    return newStr;
}
// console.log(trimStart("     jahnavi gaur 123.  "))


//trim()
function trim(str){
    let newStr = ""
    let i = 0
    let j = str.length-1
    while(str[i] === " "){
        i++
    }
    while(str[j] === " "){
        j--
    }
    for(let x = i; x <= j; x++){
        newStr += str[x]
    }
    return newStr
}
console.log(trim("     jahnavi gaur 123.  "))


//toUpperCase()
function toLowerCase(str){
    let newStr = ""
    for(let i = 0; i < str.length; i++){
        let charCode = str.charCodeAt(i)
        // console.log(charCode)
        if(charCode >= 65 && charCode <=91){
            newStr += String.fromCharCode(charCode+32)
        }
        else if(charCode >= 97 && charCode <= 123){
            newStr += str[i]
        }
        else{
            newStr += str[i]
        }
    }
    return newStr
}
// console.log(toLowerCase(str))


//toUpperCase()
function toUpperCase(str){
    let newStr = ""
    for(let i = 0; i < str.length; i++){
        let charCode = str.charCodeAt(i)
        // console.log(charCode)
        if(charCode >= 65 && charCode <=91){
            newStr += str[i]
        }
        else if(charCode >= 97 && charCode <= 123){
            newStr += String.fromCharCode(charCode-32)
        }
        else{
            newStr += str[i]
        }
    }
    return newStr
}
// console.log(toUpperCase(str))


// substr(start,end)-it is depricated now - similar to slice but second argument is num of element to delete

// substring(start,end)- if start or end less then 0 then treat is as 0
function substring(str,start=0,end=str.length){
    if(start < 0){
        start = 0
    }
    if(end < 0){
        end = 0
    }
    if(end > str.length){
        end = str.length
    }
    let newStr = ""
    for(let i = start; i < end; i++){
        newStr += str[i]
    }
    return newStr
}
// console.log(substring(str,2,4))



//slice(start,end) - accept negative start and end , 
function slice(str,start=0,end=str.length){
    if(start < 0){
        start = str.length + start 
    }
    if(end < 0){
        end = str.length + end
    }
    let newStr = ""
    for(let i = start; i < end; i++){
        newStr += str[i]
    }
    return newStr
}
// console.log(slice(str,2,5))


//concat() 
//i implement only for 2 str at a time but by making it recursive i can cocat multiple str
function concat(str1,str2){
    let newStr = ""
    for(let i = 0; i < str1.length; i++){
        newStr+=str1[i]
    }
    for(let i = 0; i < str2.length; i++){
        newStr+=str2[i]
    }
    return newStr
}



//at() - accept negative indexing
function customAt(str,index){
    if(index < 0){
        index = str.length + index
    }
    if(index >= str.length){
        return ""
    }
    for(let i = 0; i < str.length; i++){
        if(i == index){
            return str[i]
        }
    }
    return undefined
}
// console.log(customAt(str,4))


//charPointAt() - it is same as charCodeAt()


//charCodeAt() - no negative indexing + return ascii code
//it is difficult to retutrn utf code of char for us so now we cant implement it
function charCodeAt(str,index){
    for(let i = 0; i < str.length; i++){
        if(i == index){
            return str[index].codePointAt(0);
        }
    }
    return NaN
}


//charAt() - no negative indexing
function customCharAt(str,index){
    if(index < 0 || index > str.length) return ""
    for(let i = 0; i < str.length; i++){
        if(i == index){
            return str[i]
        }
    }
    return undefined
}
// console.log(customCharAt(str,-1))


//length
function customLength(str){
    let i = 0
    let length = 0
    while(str[i] != undefined){
        i++
        length++
    }
    return length
}
// console.log(customLength(str))