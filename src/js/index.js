;(function () {
  const dropdown = document.getElementsByClassName('dropdown')
  const dropdownBtns = document.getElementsByClassName('dropdown-btn')

  const closeDropdown = () => {
    for (let i = 0; i < dropdown.length; i++) {
      dropdown[i].classList.remove('active')
    }
  }

  for (let i = 0; i < dropdownBtns.length; i++) {
    dropdownBtns[i].addEventListener('click', function(event) {
      const dropdownContent = this.parentElement

      dropdownContent.classList.toggle('active')

      event.stopPropagation()
    })
  }

  document.body.addEventListener('click', closeDropdown)


  const $hamburger = document.querySelector('.hamburger')
  const $nav = document.querySelector('header nav')
  const $overlay = document.querySelector('.overlay')

  $hamburger.addEventListener('click', () => {
    $hamburger.classList.toggle('active')
    $nav.classList.toggle('active')
    $overlay.classList.toggle('active')
  })
})()
