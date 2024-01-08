// const scrollToSection = (id) => {
//   const path = window.location.pathname

//   const element = document.getElementById(id)

//   if (path !== '/') {
//     window.location.replace(window.location.origin + `/#${id}`)
//   }

//   if (element) {
//     element.scrollIntoView({
//       behavior: 'smooth',
//     })
//   }
// }

// export default scrollToSection

const scrollToSection = (id) => {
  const path = window.location.pathname
  const element = document.getElementById(id)
  const headerHeight = 40 // Adjust this value based on your actual header height

  if (path !== '/') {
    window.location.replace(window.location.origin + `/#${id}`)
  }

  if (element) {
    const offset = element.offsetTop - headerHeight
    window.scrollTo({
      top: offset,
      behavior: 'smooth',
    })
  }
}

export default scrollToSection
