
let quiz1 = document.querySelector(".quiz1 button a")
let quiz = document.querySelector(".quiz span h2 a")
let user = document.querySelector(".user h3 ")
let wrap = document.querySelector("#wrapper")
let client = document.querySelector(".main")
let head = document.querySelector(".quiz h1")
let create = document.querySelector(".clear button:first-of-type")
let create1 = document.querySelector(".clear button:last-of-type")
let client1 = document.querySelector(".main1")
let wrap2 = document.querySelector(".wrapper2")
let coding = document.querySelector(".app .code")
let star = document.querySelector(".app .start")
let name = document.querySelector(".name h2")


quiz1.onclick = (e) => {
    e.preventDefault()
    if (user.innerHTML = " ")
        alert("Please create a Username")
    else {
        console.log("hello")
    }
}
quiz.onclick = (e) => {
    e.preventDefault()
    client.style.display = "block";
}
create.onclick = (e) => {
    e.preventDefault()
    quiz.style.display = "none"
    client.style.display = "none"
    user.style.display = "block"
    alert("User create successfully")
    head.innerHTML = client1.value

}
create1.onclick = () => {
    client.style.display = "none"
    alert("not applicable")
}
quiz1.onclick = (e) => {
    e.preventDefault()
    wrap2.style.display = "block"
    wrap.style.display = "none"
    name.innerHTML = client1.value
}
coding.onclick = (e) => {
    e.preventDefault()
    coding.style.borderColor = "blue"
}
star.onclick = () => {

}