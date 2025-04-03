let fname = document.getElementById("name")
let femail = document.getElementById("email")
let fmobile = document.getElementById("mobile")
let fage = document.getElementById("age")
let frole = document.getElementById("role")
let faddress = document.getElementById("address")

console.log("fname =", fname)
// query parameters 
let params = new Proxy(new URLSearchParams(window.location.search), {
    get : (par,prop) => par.get(prop)
})

const readData = async () => {
    await fetch(`/api/user/single/${params.id}`, {
        method: "GET"
    }).then(res => res.json()).then (res => {
        console.log(`user =`, res)

        fname.value = res.userdetails.name
        femail.value=res.userdetails.email
        fmobile.value=res.userdetails.mobile
        fage.value=res.userdetails.age
        frole.value=res.userdetails.role
        faddress.value=res.userdetails.address

    }).catch(err => console.log(err.msg))
}


readData()

console.log(`params =`, params.id)

let cForm = document.getElementById("contactForm")

cForm.addEventListener("submit", async (e) => {
    e.preventDefault()
    let data = {
        nam: fname.value,
        email: femail.value,
        mobile: fmobile.value,
        age: fage.value,
        role: frole.value,
        address: faddress.value 
    }

    await fetch(`/api/user/update/${params.id}`, {
        headers: {
            "Content-Type": "application/json"
        },
        method : "PATCH",
        body: JSON.stringify(data)
    }).then(res => res.json)
    .then(res => {
        alert(res.msg)
        window.location.href="/"
    }).catch(err => console.log(err.msg))

})