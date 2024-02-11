const subscribeBtn = document.getElementById("subscribe-btn")
const dismissBtn = document.getElementById("dismiss-btn")
const email = document.getElementById("email")
const validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
const userEmail = document.getElementById("user-email")
let count = 0;


    subscribeBtn.addEventListener("click", (e)=> {
        e.preventDefault()

        if(email.value.match(validEmail)){
            document.querySelector(".subscribe").style.display = "none"
            document.querySelector(".message").style.display = "flex"
            userEmail.textContent = email.value
        }
        else{
            count ++;
            const label = document.getElementById("label")
            const errorPara = document.createElement("p")
            errorPara.textContent = "Valid email required"
            errorPara.classList.add("error")
            label.appendChild(errorPara)
            email.classList.add("input-error")
            if(count > 1){
                errorPara.style.display = "none"
            }
}
        
})


dismissBtn.addEventListener("click", () => {
    document.querySelector(".message").style.display = "none"
    document.querySelector(".subscribe").style.display = "flex"
})