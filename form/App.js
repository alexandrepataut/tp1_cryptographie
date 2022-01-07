function submitForm() 
{

    var input = document.getElementsByTagName('textarea');

    input = document.getElementById('input');
    output = document.getElementById('output');
    div = document.createElement('div');
    function update() {
        div.textContent = input.value;
    }
    function reverse() {
        div.innerHTML = output.value;
        input.value = div.textContent;
    }
    input.oninput = update;

      

    if(document.getElementById('MD5').checked) {
        var element = document.getElementById("myPara");
        var hash = (input.value);
        element.innerHTML = "MD5";
    }
    else if(document.getElementById('SHA2-256').checked) {
        var element = document.getElementById("myPara");
        element.innerHTML = "SHA2-256";
    }
    else if (document.getElementById('SHA3-512').checked) {
        var element = document.getElementById("myPara");
        element.innerHTML = "SHA3-512";
    }
    else if (document.getElementById('Keccak-512').checked) {
        var element = document.getElementById("myPara");
        element.innerHTML = "Keccak-512";
    }
    else if (document.getElementById('RipeMD160').checked) {
        var element = document.getElementById("myPara");
        element.innerHTML = "RipeMD160";
    }
    else if (document.getElementById('AES').checked) {
        var element = document.getElementById("myPara");
        element.innerHTML = "AES";
    }
    else if (document.getElementById('RSA').checked) {
        var element = document.getElementById("myPara");
        element.innerHTML = "RSA";
    }
    else if (document.getElementById('BlowFish').checked) {
        var element = document.getElementById("myPara");
        element.innerHTML = "BlowFish";
    }

   
    
}