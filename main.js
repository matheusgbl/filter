const selects = document.querySelectorAll("#filter_select")

window.onclick = (ev) => {
  if(!ev.target.matches('#filter_select') && !ev.target.closest('.filter_select')){
    selects.forEach((select) => {
      select.classList.remove('active')
    })
  }
}

selects.forEach((select) => {
  select.addEventListener('click', (ev) => {
    selects.forEach(selectElement => selectElement.classList.remove('active'))
    ev.currentTarget.classList.add('active')
  })
})


// -------------------------------------------------------------------------- //


const selectsContainer = document.querySelectorAll("#select_container")
const courseContainer = document.querySelector("#course_container")
const keysChecked = new Set([])

function displayCourse(course) {
  const container = document.createElement("li")
  const title = document.createElement("h1")
  const schoolarshipLevel = document.createElement("span")


  title.classList.add('title_course')
  schoolarshipLevel.classList.add('schoolarshipLevel')
  
  title.textContent = course.title
  schoolarshipLevel.textContent = course.schoolarshipLevel

  container.appendChild(title)
  container.appendChild(schoolarshipLevel)
  courseContainer.appendChild(container)
}

async function handleChange() {
  const data = await api.get()
  courseContainer.innerHTML = ''
  const filteredData = data.filter((course) => keysChecked.has(course.schoolarshipLevel) || keysChecked.has(course.macroArea) || keysChecked.has(course.difficultyLevel))
  console.log(filteredData)
  if(filteredData.length){
    filteredData.forEach((course) =>{
      displayCourse(course)
    })
  }else{
    data.forEach((course) => {
      displayCourse(course)
    })
  }
}

selectsContainer.forEach((selectContainer) => {
  const selectCheckboxes = selectContainer.querySelectorAll("input[type='checkbox']")
  selectCheckboxes.forEach((selectCheckbox) => {
    selectCheckbox.addEventListener('input', (ev) => {
      const isChecked = ev.currentTarget.checked
      if (isChecked) {
        keysChecked.add(ev.currentTarget.getAttribute('data-id'))
      } else {
        keysChecked.delete(ev.currentTarget.getAttribute('data-id'))
      }
      handleChange()
    })
  })
})

handleChange();