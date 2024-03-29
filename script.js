let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const clearBtn = document.getElementById("clear-btn")
const ulEl = document.getElementById("ul-el")
const tabBtn = document.getElementById("tab-btn")

let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
console.log(leadsFromLocalStorage+"here")

// const tabs = [
//       { url: "https://www.linkedin.com/in/per-harald-borgen/" }
// ]

tabBtn.addEventListener("click", function () {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            myLeads.push(tabs[0].url)
            localStorage.setItem("myLeads", JSON.stringify(myLeads))
            renderTab(myLeads)
      })
})

if (leadsFromLocalStorage) {
      myLeads = leadsFromLocalStorage
      render(myLeads)
}

inputBtn.addEventListener("click", function () {
      if (inputEl.value == "") {
            alert("Enter a lead.")
      }
      else {
            myLeads.push(inputEl.value)
            console.log(myLeads)
            inputEl.value = ""

            localStorage.setItem("myLeads", JSON.stringify(myLeads))
            console.log(localStorage.getItem("myLeads"))
            render(myLeads)
      }
})

clearBtn.addEventListener("click", function () {
      localStorage.clear();
      listItems = ""
      ulEl.innerHTML = listItems
      myLeads = []
})

function render(leads) {
      listItems = ""
      for (let i = 0; i < leads.length; i++) {
            listItems += `
                        <li>
                              <a href="https://${leads[i]}" target="_blank">
                                    ${leads[i]}
                              </a>
                        </li>
                  `
      }
      ulEl.innerHTML = listItems
}
function renderTab(leads) {
      listItems = ""
      for (let i = 0; i < leads.length; i++) {
            listItems += `
                        <li>
                              <a href="${leads[i]}" target="_blank">
                                    ${leads[i]}
                              </a>
                        </li>
                  `
      }
      ulEl.innerHTML = listItems
}