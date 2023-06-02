let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]
const inputEl = document.getElementById("input-el")
const buttonEl = document.getElementById("button-el")
let ulEl = document.getElementById("ul-el")

buttonEl.addEventListener("click", function () {
      myLeads.push(inputEl.value)
      console.log(myLeads)
})
for (let i = 0; i < myLeads.length; i++) {
      myLeads.push(inputEl.value)
      ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
}
