$('body').append(`<div id="container"></div>`)
$('#container').append(`<form id="registerForm" class="authForm">
    First Name:
    <input id="firstNameInput" class="inputs" type="text"></input>
    Last Name:
    <input id="lastNameInput" class="inputs" type="text"></input>
    Username:
    <input id="usernameInput" class="inputs" type="text"></input>
    Password:
    <input id="passwordInput" class="inputs" type="password"></input>
    Confirm Password:
    <input id="confirmPasswordInput" class="inputs" type="password"></input>
    Date Of Birth:
    <input id="birthdayInput" class="inputs" type="date"></input>
</form>
<button id="registerBtn">Register</button>
<h6>Already have an account? <a href="/client/login/index.html">Login</a></h6>`)

$('.inputs').on("focus", (e) => {
    var id = e.target.id
    $(`#${id}`).css({"border-color": "rgba(0, 0, 0, 1)"})
})

$('.inputs').on("blur", (e) => {
        var id = e.target.id
        $(`#${id}`).css({"border-color": "rgba(0, 0, 0, 0.350)"})
})