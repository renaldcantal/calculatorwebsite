var display = document.getElementById('display');
         
function clickBtn(obj) {
             
    var pushed = obj.innerHTML;
             
    if (pushed == '=') {
 //Calculate the numbers
    display.innerHTML = eval(display.innerHTML);
                 
    } else if (pushed == 'AC') {
// To All Clear the digits and operations
    display.innerHTML = '0';
            
    } else {
        if (display.innerHTML == '0') {
            display.innerHTML = pushed;
                     
    } else {
            display.innerHTML += pushed;   
        }
    }    
}