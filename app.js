// PAGE NOT FOUND BUTTON LINK
document.getElementById('myButton').addEventListener('click', function() {
    window.location.href = 'under-construction.html';
});

document.getElementById('myButton2').addEventListener('click', function() {
    window.location.href = 'under-construction.html';
});

document.getElementById('myButton3').addEventListener('click', function() {
    window.location.href = 'under-construction.html';
});


// Contact us form

const inputs = document.querySelectorAll(".contact-input, .contact-input-a");

function focusFunc(){
    let parent = this.parentNode;
    parent.classList.add("focus");
}

function blurFunc(){
    let parent = this.parentNode;
    if (this.value == "");{
        parent.classList.remove("focus");
    }
}

inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
});

/*  This code selects all elements with the class "input" on the document and adds event listeners for focus and blur events to them. 

When an input element is focused, the focusFunc function is called, which adds a "focus" class to the parent element of the input.

When an input element loses focus, the blurFunc function is called, which removes the "focus" class from the parent element if the input value is empty.

Overall, this code adds visual effects to input fields by adding and removing a "focus" class based on whether the input is focused or has a value. */
