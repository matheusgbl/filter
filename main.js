// --------------------------------- add and remove class ---------------------- //

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
const keysChecked = {
  courseType: [],
  schoolarshipLevel: [],
  difficultyLevel: [],
  macroArea: [],
  careerObjective: []
}

let data = []
let searchKey = ''

function createCourseElement(course) {
  const container = document.createElement("li")
  const title = document.createElement("h1")
  const schoolarshipLevel = document.createElement("span")


  title.classList.add('title_course')
  schoolarshipLevel.classList.add('schoolarshipLevel')
  container.setAttribute('data-id', 'course-' + course.id)
  container.style.display = 'block'
  
  title.textContent = course.title
  schoolarshipLevel.textContent = course.schoolarshipLevel

  container.appendChild(title)
  container.appendChild(schoolarshipLevel)
  courseContainer.appendChild(container)
}

// function createActivedContainer(activedItem){
//   const container = document.createElement("li")
//   const button = document.createElement("button")

//   container.classList.add()
  
// }

api.get().then((res) => {
  data = JSON.parse(res)
  data.forEach((course) => {
    createCourseElement(course);
  })
})
 
let hiddenCourse = []

function isCourse(courseKey, key, course) {
  if (key.length) {
    var isHidden = true;

    for (var i = 0; i < key.length; i++) {
      var filter = key[i];

      if(Array.isArray(courseKey)){
        courseKey.forEach((cKey) => {
          if (filter.includes(cKey)) {
            isHidden = false;
          }
        })
      }

      else if (filter.includes(courseKey)) {
        isHidden = false;
        break;
      }
    }

    if (isHidden) {
      hiddenCourse.push(course);
    }
  }
}

function handleCourse(id, isHidden){
  const elementId = `[data-id="course-${id}"]`
  courseContainer.querySelector(elementId).style.display = isHidden ? 'none' : 'block'
}

function search(text, key){
  return text.toLowerCase().includes(key.toLowerCase())
}

async function handleChange(value) {
  hiddenCourse = []

  data.forEach((course) => {    
    isCourse(course.courseType, keysChecked.courseType, course)
    isCourse(course.macroArea, keysChecked.macroArea, course)
    isCourse(course.schoolarshipLevel, keysChecked.schoolarshipLevel, course)
    isCourse(course.careerObjective, keysChecked.careerObjective, course)
  })

  const filteredData = data.filter((course) => !hiddenCourse.includes(course))
  hiddenCourse.forEach((course) => {
    handleCourse(course.id, true)
  })
  if (value){
    const searchFilterData = filteredData.length ? filteredData.filter((course) => {
      return search(JSON.stringify(course), value)
    }) : data.filter((course) => {
      return search(JSON.stringify(course), value)
    })
    filteredData?.forEach((course) => {
      handleCourse(course.id, true)
    })
    searchFilterData.forEach((course) =>{
      handleCourse(course.id)
    })
  } else if (filteredData.length) {
    filteredData.forEach((course) =>{
      handleCourse(course.id)
    })
  }
}

selectsContainer.forEach((selectContainer) => {
  const selectCheckboxes = selectContainer.querySelectorAll("input[type='checkbox']")
  selectCheckboxes.forEach((selectCheckbox) => {
    selectCheckbox.addEventListener('input', (ev) => {
      const isChecked = ev.currentTarget.checked
      if (isChecked) {
        keysChecked[ev.currentTarget.getAttribute('data-key')].push(ev.currentTarget.getAttribute('data-value'))
      } else {
        keysChecked[ev.currentTarget.getAttribute('data-key')] = 
          keysChecked[ev.currentTarget.getAttribute('data-key')]
            .filter((key) => 
              key !== ev.currentTarget.getAttribute('data-value')
            )
      }
      handleChange(searchKey)
    })
  })
})

handleChange();


// ---------------------------- SEARCH COURSE AREA------------------------- //

const searchInput = document.querySelector("[data-search]")

searchInput.addEventListener("keypress", (event) => {
  if (event.key === 'Enter'){
  const value = event.target.value
  searchKey = value
  searchButton(searchKey)
  }
})

function searchButton(){
  const value = searchInput.value
  if(value === ''){
    alert('digite um valor')
  }
  hiddenCourse = []

  data.forEach((course) => {    
    isCourse(course.courseType, keysChecked.courseType, course)
    isCourse(course.difficultyLevel, keysChecked.difficultyLevel, course)
    isCourse(course.macroArea, keysChecked.macroArea, course)
    isCourse(course.schoolarshipLevel, keysChecked.schoolarshipLevel, course)
  })

  const filteredData = data.filter((course) => !hiddenCourse.includes(course))
  hiddenCourse.forEach((course) => {
    handleCourse(course.id, true)
  })
  if (value){
    const searchFilterData = filteredData.length ? filteredData.filter((course) => {
      return search(JSON.stringify(course), value)
    }) : data.filter((course) => {
      return search(JSON.stringify(course), value)
    })
    filteredData?.forEach((course) => {
      handleCourse(course.id, true)
    })
    searchFilterData.forEach((course) =>{
      handleCourse(course.id)
    })
  } else if (filteredData.length) {
    filteredData.forEach((course) =>{
      handleCourse(course.id)
    })
  }
}