/* Style the HTML elements according to the following instructions.
DO NOT ALTER THE EXISTING HTML TO DO THIS.  WRITE ONLY CSS!
*/


/* Give everything with the class 'hello' a white background when you click on one of them*/
$(".hello").on('click', blackBack);

function blackBack() {
    $(this).addClass("changeBlack");

}


/* When you mouse over the "Selectors Exercise" element, change the height&width to 20px. When you mouse off of it change it back */
$("h1").on('mouseover', thatTitle);
//allows for boolean to operate
var big = false;
//function that changes font when the mouse is moved over it
function thatTitle(){
    // $(this).addClass("sizeMe")
        if(big){
            $(this).addClass("sizeMe");
            big = false;
        }
        else{
            $(this).removeClass("sizeMe");
            big = true;
        }
}

/* Each time the sentence "I am a paragraph with a class" is clicked, add a "." to the end of the sentence. */
$(".hello").on('click', dotDotBaby);
//adds period to class "hello"
function dotDotBaby(){
    $(this).append(".");
}