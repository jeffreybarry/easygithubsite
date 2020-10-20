/* Complete the steps in this JavaScript file to animate in the quote in the HTML

Step 1. create a variable to store the value of the <p> element with the ID of "quote"
Use a keyword to declare the variable, then provide a varaible name of your choice. Then properly use JS to GET THE ELEMENT with the ID of quote. Hint: the format for completing this step should looking like:

something1 something2 = document.something3('something4');

where something1 = declaration keyword, e.g, const, var, let
something2 = variable name,
something3 = document method,
something4 = value for method

Be sure that your code is not within this comment section.
*/

//Your code goes on the next line:
const animation = document.getElementById('quote');


/*
Step 2. In this step you will add 3 class names from the animate.css library to the variable you stored in step 1.
This step is a fill-in-the-blank below. I have provided the method details. You simply need to add the name of the variable you created in step 1,
*/

//Your code goes on the next line. Add the variable name to the beginning:
animation.classList.add('animate__animated', 'animate__backInRight', 'animate__slower');

//add console log statement

console.log('Animation completed');
