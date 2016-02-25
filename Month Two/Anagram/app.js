    function isAnagram(word1, word2){
        if(word1.length !== word2.length) return false;
        
        var stuff1 = word1.split('').sort();
        var stuff2 = word2.split('').sort();

        for (i = 0; i < stuff1.length; i++){
        if(stuff1[i] !== stuff2[i]){
        console.log("Not equal");
        return false;
        }
    }
    return true;
    }
    
    
      //This is Kurt's Anagram Check
        function checkAnagram(){
            var word1 = prompt("Anagram check. Enter your first word");
            var word2 = prompt("Enter your second word");
            
            var str1 = word1.toLowerCase().split('').sort().join('').trim();
            var str2 = word2.toLowerCase().split('').sort().join('').trim();
​
                    if (str1 === str2) {
                          alert("this is an Anagram")
                          } else {
                           alert("better luck next time.")
                          }
​
            
            
        }
        checkAnagram();