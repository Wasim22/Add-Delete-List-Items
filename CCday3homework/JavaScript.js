var counter = 6; // this counter helps us create a new id for each list item created by the function below

function addItem() {
    var liId = "li" + counter; // list item id will bi li + the counter numer

    var newTextInput = document.getElementById("input1").value;

    // below, we will give additional attributes to <li> element, so it's crated read with the onclick function and has an unique id, created with help of the counter above
    var newListItem = document.getElementById("orderedlist").innerHTML += "<li id=" + liId + " onclick='chooseFunction(id)'>" + newTextInput + "</li>";

    // set additional attributes, because we can
    document.getElementById(liId).setAttribute("style", "");

    // increment the counter each time an item is created, so the next item gets a unique id
    counter++;
}






// function checks to see if the list item calling the function needs to be striked through or deleted
function chooseFunction(id) {
    // check to see if the list item has a attribute of class with a value of crossedOut, if not, go ahead and line-through
    if (document.getElementById(id).getAttribute("class") !== "crossedOut") {
            //line-through it
            document.getElementById(id).setAttribute("style", "text-decoration: line-through;");
            //assign it a class value of crossOut, so if it's clicked again, this function goes to the below "else" code instead
            document.getElementById(id).setAttribute("class", "crossedOut");
    }
    // if already lined-through, delete it
    else {
        document.getElementById(id).setAttribute("style", "display:none;");
        
    }          
}
