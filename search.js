//A simple javascript function to search as you type. As you type search terms into a "box," the script searches through a "container" for such terms and hides individual pieces, enclosed by a predefined "tag," that do not contain the search terms.

//Assign this function to the onkeyup event of a text input box.
//Argument variable "box" is the id of said input box.
//Argument variable "container" is the id of the container being searched through.
//Argument variable "tag" is the html tag enclosing each item being filtered within the container (supports <p> and <span>).
//Assign the text to be searched through to the "name" attribute of the enclosing "tag" of each item.
//As you type into the search "box," items are filtered out so only those with text matching each word of the search terms still remain visible in the "container."

function search(box,container,tag) {
    if (tag == "p") { displaytype="block"; }
    if (tag == "span") { displaytype="inline"; }
    var terms = document.getElementById(box).value;
    terms = terms.split(" ");
    var patterns = new Array();
    for (i=0;i<terms.length;i++) {
        patterns[i] = new RegExp(terms[i],"i");
    }
    var elements = document.getElementById(container).getElementsByTagName(tag);
    for (i=0;i<elements.length;i++) {
        for (j=0;j<patterns.length;j++) {
            var match = true;
            if (!elements[i].getAttribute('name').match(patterns[j])) { match = false; break; }
        }
        if (match) { elements[i].style.display=displaytype; }
        else { elements[i].style.display="none"; }
    }
            }
