// Declare the function
function checkLength(event, minLength) {
    // Declare the variables
    var el, elMsg;
    // Check to make sure event object exists, aka if the user is on IE8 of lower
    if (!event) {
        event = window.event;
    }
    el = event.target || event.srcElement;
    elMsg = el.nextSibling;

    if (el.value.length < minLength) {
        console.log(el.value.length)
        elMsg.textContent = 'username must be ' + minLength + ' characters or more';
    } else {
        elMsg.textContent = '';
    }
}

var elUsername = document.getElementById('username');
if (elUsername.addEventListener) {
    elUsername.addEventListener('blur', function(event) {
        checkLength(event, 5);
    }, false);
} else {
    elUsername.attachEvent('onblur', function(event) {
        checkLength(event, 5);
    });
}