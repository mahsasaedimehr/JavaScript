// function search(){
//     var x = 0, y=0;
//     for (i=0; i< text.length; i++){
//         if(text[i] == word[0]){
//             for(j=i; j< i+word.length; j++){
//                 if(text[j]==word[j-i]){
//                     y++;
//                 }
//                 if(y==word.length){
//                     x++;
//                 }
//             }
//             y=0;
//         }
//     }
//     return "'"+word+"' was found "+x+" times.";
// }
// console.log(search('the quick brown fox','fox'));
// console.log(search("error"));

function search(){
    const wordsearch = prompt("enter your word")
    const mytext = ("you should search mahsa");
    const word = (mahsa);
    if(word==mahsa){
        return true;
    }
    else{
        return false;
    }
}

console.log(search());
