function getConfirmation(confirmationText, elementId) {
    let confirmation = confirm(confirmationText);

    if (confirmation === true) {
        document.getElementById(elementId).innerHTML = 'You just clicked "Ok"';
        return true;
    } else {
        document.getElementById(elementId).innerHTML = 'You just clicked "Cancel"';
        return false;
    }
}