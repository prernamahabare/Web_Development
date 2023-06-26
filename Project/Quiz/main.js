
function displayque(x) {

    let question = document.getElementById('que');
    let number = document.getElementById('number');


    switch (x.id) {
        case 'btn-1':
            number.innerHTML = "Question-1:";
            question.innerHTML = " 1. HTML is what type of language ?";
            document.getElementById('option-1').innerHTML = '<input type="radio" name="a"> Scripting Language ';
            document.getElementById('option-2').innerHTML = '<input type="radio" name="a"> Markup Language ';
            document.getElementById('option-3').innerHTML = '<input type="radio" name="a"> Programming Language';
            document.getElementById('option-4').innerHTML = '<input type="radio" name="a"> Network Protocol';

            break;
        case 'btn-2':
            number.innerHTML = "Question-2";
            question.innerHTML = "2. Which program is used by web clients to view the web pages?";
            document.getElementById('option-1').innerHTML = '<input type="radio" name="b">  Web browser';
            document.getElementById('option-2').innerHTML = '<input type="radio" name="b"> Protocol';
            document.getElementById('option-3').innerHTML = '<input type="radio" name="b"> Web server';
            document.getElementById('option-4').innerHTML = '<input type="radio" name="b">  Search Engine';
            break;
        case 'btn-3':
            number.innerHTML = "Question-3";
            question.innerHTML = "3. Which tag is used to display text in title bar of a web document?";
            document.getElementById('option-1').innerHTML = '<input type="radio" name="c">  Body tag';
            document.getElementById('option-2').innerHTML = '<input type="radio" name="c">  Meta tag';
            document.getElementById('option-3').innerHTML = '<input type="radio" name="c">  Title tag';
            document.getElementById('option-4').innerHTML = '<input type="radio" name="c">  Comment tag';
            break;
        case 'btn-4':
            number.innerHTML = "Question-4";
            question.innerHTML = "4. HTML allows us to use ___ levels of headings.";
            document.getElementById('option-1').innerHTML = '<input type="radio" name="d">  Two';
            document.getElementById('option-2').innerHTML = '<input type="radio" name="d">  Three';
            document.getElementById('option-3').innerHTML = '<input type="radio" name="d">  Five';
            document.getElementById('option-4').innerHTML = '<input type="radio" name="d">  Six';
            break;
        case 'btn-5':
            number.innerHTML = "Question-5";
            question.innerHTML = '5. Which character is used after the opening angular bracket to represent the closing tag?';
            document.getElementById('option-1').innerHTML = '<input type="radio" name="d">  /';
            document.getElementById('option-2').innerHTML = '<input type="radio" name="d">  |';
            document.getElementById('option-3').innerHTML = '<input type="radio" name="d">  *' ;
            document.getElementById('option-4').innerHTML = '<input type="radio" name="d">  %';
            break;
        case 'btn-6':
            number.innerHTML = "Question-6";
            question.innerHTML = '6. Which section of the Web page will contain Meta tags?';
            document.getElementById('option-1').innerHTML = '<input type="radio" name="d">  Body section';
            document.getElementById('option-2').innerHTML = '<input type="radio" name="d">  Heading section';
            document.getElementById('option-3').innerHTML = '<input type="radio" name="d">  Title section' ;
            document.getElementById('option-4').innerHTML = '<input type="radio" name="d">   None';
            break;
        case 'btn-7':
            number.innerHTML = "Question-7";
            question.innerHTML = '7. What are the two segments of a style tag?';
            document.getElementById('option-1').innerHTML = '<input type="radio" name="d">  Selector and property';
            document.getElementById('option-2').innerHTML = '<input type="radio" name="d">  Name and content';
            document.getElementById('option-3').innerHTML = '<input type="radio" name="d">   Head section and body section' ;
            document.getElementById('option-4').innerHTML = '<input type="radio" name="d">   None';
            break;
        case 'btn-8':
            number.innerHTML = "Question-8";
            question.innerHTML = '8. _________ keyword is used to declare variables in javascript.';
            document.getElementById('option-1').innerHTML = '<input type="radio" name="d"> <a name=""> Var ';
            document.getElementById('option-2').innerHTML = '<input type="radio" name="d">  Dim ';
            document.getElementById('option-3').innerHTML = '<input type="radio" name="d">  String ' ;
            document.getElementById('option-4').innerHTML = '<input type="radio" name="d">  None of the above ';
            break;
        case 'btn-9':
            number.innerHTML = "Question-9";
            question.innerHTML = '9. The year in which HTML was first proposed _______.';
            document.getElementById('option-1').innerHTML = '<input type="radio" name="d">  1990';
            document.getElementById('option-2').innerHTML = '<input type="radio" name="d">  1980';
            document.getElementById('option-3').innerHTML = '<input type="radio" name="d">  2000' ;
            document.getElementById('option-4').innerHTML = '<input type="radio" name="d">   1995';
            break;
        case 'btn-10':
            number.innerHTML = "Question-10";
            question.innerHTML = '10. Apart from bold tag, what other tag makes text bold ?';
            document.getElementById('option-1').innerHTML = '<input type="radio" name="d"> fat';
            document.getElementById('option-2').innerHTML = '<input type="radio" name="d"> strong';
            document.getElementById('option-3').innerHTML = '<input type="radio" name="d">  black' ;
            document.getElementById('option-4').innerHTML = '<input type="radio" name="d">  emp';
            break;
        case 'btn-11':
            number.innerHTML = "Question-11";
            question.innerHTML = '11. Which built-in method combines the text of two strings and returns a new string?';
            document.getElementById('option-1').innerHTML = '<input type="radio" name="d">   append( )';
            document.getElementById('option-2').innerHTML = '<input type="radio" name="d">  concat( )';
            document.getElementById('option-3').innerHTML = '<input type="radio" name="d">   attach( )' ;
            document.getElementById('option-4').innerHTML = '<input type="radio" name="d">   None';
            break;
        case 'btn-12':
            number.innerHTML = "Question-12";
            question.innerHTML = '12. The property in CSS used to change the background color of an element is -';
            document.getElementById('option-1').innerHTML = '<input type="radio" name="d">  bgcolor';
            document.getElementById('option-2').innerHTML = '<input type="radio" name="d">  background-color';
            document.getElementById('option-3').innerHTML = '<input type="radio" name="d">  color' ;
            document.getElementById('option-4').innerHTML = '<input type="radio" name="d">  Background-color';
            break;
        case 'btn-13':
            number.innerHTML = "Question-13";
            question.innerHTML = '13. The property in CSS used to change the text color of an element is -';
            document.getElementById('option-1').innerHTML = '<input type="radio" name="d">  bgcolor';
            document.getElementById('option-2').innerHTML = '<input type="radio" name="d">  background-color ';
            document.getElementById('option-3').innerHTML = '<input type="radio" name="d">  All of the above ' ;
            document.getElementById('option-4').innerHTML = '<input type="radio" name="d">  None';
            break;
        case 'btn-14':
            number.innerHTML = "Question-14";
            question.innerHTML = '14. The CSS property used to control the elements font-size is -';
            document.getElementById('option-1').innerHTML = '<input type="radio" name="d">  text-style';
            document.getElementById('option-2').innerHTML = '<input type="radio" name="d">  text-size';
            document.getElementById('option-3').innerHTML = '<input type="radio" name="d">  font-size' ;
            document.getElementById('option-4').innerHTML = '<input type="radio" name="d">  None of the above';
            break;
        case 'btn-15':
            number.innerHTML = "Question-15";
            question.innerHTML = '15. Which of the following attributes specifies the name of the image file? ';
            document.getElementById('option-1').innerHTML = '<input type="radio" name="d">  Font ';
            document.getElementById('option-2').innerHTML = '<input type="radio" name="d">  SRC';
            document.getElementById('option-3').innerHTML = '<input type="radio" name="d">   Color' ;
            document.getElementById('option-4').innerHTML = '<input type="radio" name="d">  Size ';
            break;
        case 'btn-16':
            number.innerHTML = "Question-8";
            question.innerHTML = '16. Which tag inserts a line horizontally on your web page?';
            document.getElementById('option-1').innerHTML = '<input type="radio" name="d">  hr ';
            document.getElementById('option-2').innerHTML = '<input type="radio" name="d">  line';
            document.getElementById('option-3').innerHTML = '<input type="radio" name="d">   line direction="horizontal" '  ;
            document.getElementById('option-4').innerHTML = '<input type="radio" name="d">  tr';
            break;
        case 'btn-17':
            number.innerHTML = "Question-8";
            question.innerHTML = '17.  How can you make a numbered list? ';
            document.getElementById('option-1').innerHTML = '<input type="radio" name="d">  dl';
            document.getElementById('option-2').innerHTML = '<input type="radio" name="d">  ol';
            document.getElementById('option-3').innerHTML = '<input type="radio" name="d">  List ' ;
            document.getElementById('option-4').innerHTML = '<input type="radio" name="d">   ul';
            break;
        case 'btn-18':
            number.innerHTML = "Question-8";
            question.innerHTML = '18. Which attribute is used to name an element uniquely?';
            document.getElementById('option-1').innerHTML = '<input type="radio" name="d">  class';
            document.getElementById('option-2').innerHTML = '<input type="radio" name="d">  id';
            document.getElementById('option-3').innerHTML = '<input type="radio" name="d">   dot' ;
            document.getElementById('option-4').innerHTML = '<input type="radio" name="d">   all of above';
            break;
        case 'btn-19':
            number.innerHTML = "Question-8";
            question.innerHTML = '19. In HTML document the tags';
            document.getElementById('option-1').innerHTML = '<input type="radio" name="d">  Should be written in upper case';
            document.getElementById('option-2').innerHTML = '<input type="radio" name="d">  Should be written in lower case';
            document.getElementById('option-3').innerHTML = '<input type="radio" name="d">   should be written in propercase' ;
            document.getElementById('option-4').innerHTML = '<input type="radio" name="d">   can be written in both uppercase or lowercase';
            break;
        case 'btn-20':
            number.innerHTML = "Question-8";
            question.innerHTML = '20. Which attribute can be used with BODY tag to set background color green?';
            document.getElementById('option-1').innerHTML = '<input type="radio" name="d">  background="green"';
            document.getElementById('option-2').innerHTML = '<input type="radio" name="d">  bgcolor="green"';
            document.getElementById('option-3').innerHTML = '<input type="radio" name="d">   color="green"' ;
            document.getElementById('option-4').innerHTML = '<input type="radio" name="d">   None';
            break;
        case 'btn-21':
            number.innerHTML = "Question-8";
            question.innerHTML = '21. How do you write "Hello World" in an alert box?';
            document.getElementById('option-1').innerHTML = '<input type="radio" name="d">  alert("Hello World"); ';
            document.getElementById('option-2').innerHTML = '<input type="radio" name="d">  alertBox("Hello World"); ';
            document.getElementById('option-3').innerHTML = '<input type="radio" name="d">   msg("Hello World");' ;
            document.getElementById('option-4').innerHTML = '<input type="radio" name="d">   msgBox("Hello World");';
            break;
        case 'btn-22':
            number.innerHTML = "Question-8";
            question.innerHTML = '22. The external javascrits file must contain script tag?';
            document.getElementById('option-1').innerHTML = '<input type="radio" name="d">  True ';
            document.getElementById('option-2').innerHTML = '<input type="radio" name="d">  False';
            document.getElementById('option-3').innerHTML = '   ' ;
            document.getElementById('option-4').innerHTML = '  ';
            break;
        case 'btn-23':
            number.innerHTML = "Question-8";
            question.innerHTML = '23. How do you round the number 7.25, to the nearest integer?';
            document.getElementById('option-1').innerHTML = '<input type="radio" name="d">  round(7.25)';
            document.getElementById('option-2').innerHTML = '<input type="radio" name="d">  Math.round(7.25)';
            document.getElementById('option-3').innerHTML = '<input type="radio" name="d">   rnd(7.25)' ;
            document.getElementById('option-4').innerHTML = '<input type="radio" name="d">   Math.rnd(7.25)';
            break;
        case 'btn-24':
            number.innerHTML = "Question-8";
            question.innerHTML = '24. How can you detect the clients browser name?';
            document.getElementById('option-1').innerHTML = '<input type="radio" name="d">  browser.name';
            document.getElementById('option-2').innerHTML = '<input type="radio" name="d">  navigator.appName';
            document.getElementById('option-3').innerHTML = '<input type="radio" name="d">   client.navName' ;
            document.getElementById('option-4').innerHTML = '<input type="radio" name="d">   None';
            break;
        case 'btn-25':
            number.innerHTML = "Question-8";
            question.innerHTML = '25. Which event occurs when the user clicks on an HTML element?';
            document.getElementById('option-1').innerHTML = '<input type="radio" name="d">  onmouseclick ';
            document.getElementById('option-2').innerHTML = '<input type="radio" name="d">  onmouseover';
            document.getElementById('option-3').innerHTML = '<input type="radio" name="d">   onclick' ;
            document.getElementById('option-4').innerHTML = '<input type="radio" name="d">   onchange';
            break;
        default:
            break;
    }
}



let countDown = new Date().getTime() + 10000;
    
    var x = setInterval(function () {
        
        let now = new Date().getTime();
        let distance = countDown - now;

        // Time calculations for minutes and seconds
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        function check(i){
            if(i<10){
                i = "0" + i;
            }
            return i;
        }

        document.getElementById('time').innerHTML = `${check(minutes)} : ${check(seconds)}`;

        // If the count down is finished, write some text
        if (distance < 0) {
            clearInterval(x);
            alert("Your time is finished. plzz cilck on End Exam button");   
        }
    }, 1000);


