// Function to set cookie
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

// Function to get cookie value by name
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

// Function to check if cookie exists and display greeting
function checkCookie() {
    var username = getCookie("username");
    if (username != "") {
        document.getElementById("greeting").innerHTML = "Xin chào " + username + "!";
    }
}

// Function to delete cookie
function deleteCookie() {
    document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.getElementById("greeting").innerHTML = "";
}

// Event listener for form submission
document.getElementById("nameForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    var username = document.getElementById("name").value;
    setCookie("username", username, 30); // Set cookie for 30 days
    document.getElementById("greeting").innerHTML = "Xin chào " + username + "!";
});

// Event listener for delete cookie button
document.getElementById("deleteCookie").addEventListener("click", function() {
    deleteCookie();
});

// Check for existing cookie on page load
window.onload = function() {
    checkCookie();
};