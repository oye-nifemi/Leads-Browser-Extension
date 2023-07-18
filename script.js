let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function () {
      if (inputEl.value == "") {
            alert("Enter a lead.")
      }
      else{
            myLeads.push(inputEl.value)
            console.log(myLeads)
            inputEl.value = ""
            
            listItems = ""
            for(let i = 0; i < myLeads.length; i++){
                  listItems += `
                        <li>
                              <a href="https://${myLeads[i]}" target="_blank">
                                    ${myLeads[i]}
                              </a>
                        </li>
                  `
            }
            ulEl.innerHTML = listItems
      }

})