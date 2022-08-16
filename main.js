const selects = document.querySelectorAll("#filter_select")
const overlay = document.querySelector("#filter_select_overlay")

selects.forEach((select) => {
  select.addEventListener('click', (ev) => {
    ev.currentTarget.classList.toggle('active')
    overlay.classList.toggle('active')
  })
})
overlay.addEventListener('click', () => {
  const selectsActive = document.querySelectorAll("#filter_select.active")
  selectsActive.forEach((select) => select.classList.remove('active'))
  overlay.classList.remove('active')
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
  const filteredData = data.filter((course) => keysChecked.has(course.key))
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
        keysChecked.add(ev.currentTarget.id)
      } else {
        keysChecked.delete(ev.currentTarget.id)
      }
      handleChange()
    })
  })
})

handleChange();