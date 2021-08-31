function increment(){
    var k = document.getElementById("inp").innerHTML;
         k=parseInt(k);
        k = k + 1;
        document.getElementById("inp").innerHTML=k;
    }
    function decrement(){
         var k = document.getElementById("inp").innerHTML;
         k=parseInt(k);
        k = k - 1;
        document.getElementById("inp").innerHTML=k;
    }