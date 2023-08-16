$('body').append(`<div id="container"></div>`)
$('#container').append(`<form id="registerForm" class="authForm">
    Username:
    <input id="usernameInput" class="inputs" type="text"></input>
    Password:
    <input id="passwordInput" class="inputs" type="password"></input>
</form>
<button id="registerBtn">Login</button>
<h6>Don't have an account? <a href="/client/register/index.html">Login</a></h6>`)

$('.inputs').on("focus", (e) => {
    var id = e.target.id
    $(`#${id}`).css({"border-color": "rgba(0, 0, 0, 1)"})
})

$('.inputs').on("blur", (e) => {
        var id = e.target.id
        $(`#${id}`).css({"border-color": "rgba(0, 0, 0, 0.350)"})
})
