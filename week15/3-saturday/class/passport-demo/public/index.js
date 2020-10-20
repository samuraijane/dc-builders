
$().ready( () => {

    $('#login').on('click', function () {
        console.log("login")
    } )
    $('#logout').on('click', function () {
        console.log("logout")
    } )
})


function login () {
    await fetch ('/')
}