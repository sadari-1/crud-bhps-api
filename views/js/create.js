
let contactForm = document.getElementById("contactForm")

let fname = document.getElementById("name")
let femail = document.getElementById("email")
let fage = document.getElementById("age")
let fmobile = document.getElementById("mobile")
let frole = document.getElementById("role")
let faddress = document.getElementById("address")

console.log("fname", fname)


contactForm.addEventListener("submit", async  (e) => {
    e.preventDefault();

    let data = {
        name : fname.value,
        email : femail.value,
        age : Number(fage.value),
        mobile: fmobile.value,
        role: frole.value,
        address: faddress.value
    }

    
    console.log("user data =", data);

    await fetch(`/api/user/create` , {
        headers: {
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(data)
    }).then(res => res.json()).then(res => {
        alert(res.msg)
        window.location.href="/"
    }).catch(err => alert(err.msg))
     
})