<!DOCTYPE html> 
<html> 
  
<head> 
    <title> 
        Window prompt() Method 
    </title> 
</head> 
  
<body> 
    <button onclick="geek()"> 
        Click me! 
    </button> 
    <p id="g"></p> 
    <script> 
        function geek() { 
            let doc = prompt("Please enter some text", 
                "GeeksforGeeks"); 
            if (doc != null) { 
                document.getElementById("g").innerHTML = 
                    "Welcome to " + doc; 
            } 
        } 
    </script> 
</body> 
  
</html>