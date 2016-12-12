(function() {
    var customSelects = document.querySelectorAll(".custom-dropdown__select");
    for (var i = 0; i < customSelects.length; i++) {
        if (customSelects[i].hasAttribute("disabled")) {
            customSelects[i].parentNode.className += " custom-dropdown--disabled";
        }
    }
})()
