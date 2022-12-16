
function myFunction() {
    // leftNavbar
    let hide = document.getElementsByClassName('leftNavbar')[0].style.display = "none "



    let gridstyle = document.getElementsByClassName('section-container')[0]

    gridstyle.classList.add("change");



    // console.log(grid);
}
function myFunctionreverse() {
    // leftNavbar
    let hide = document.getElementsByClassName('leftNavbar')[0].style.display = "block "
    console.log(hide);
    let gridstyle = document.getElementsByClassName('section-container')[0]

    gridstyle.classList.remove("change");

}

function OpenmyCard() {
    let maincontainer = document.getElementsByClassName("main-container")[0]
    let carddetail = document.getElementsByClassName("data")[0]

    maincontainer.classList.add('dimmcontainer');
    carddetail.classList.remove('close');


}

function closeCarddetail() {
    let maincontainer = document.getElementsByClassName("main-container")[0]
    let carddetail = document.getElementsByClassName("data")[0]

    maincontainer.classList.remove('dimmcontainer');
    carddetail.classList.add('close');


}

{
    let slideIndex = 0;
    showSlides();

    function showSlides() {
        let i;
        let slides = document.getElementsByClassName("slide");
        
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1 }
        
        slides[slideIndex - 1].style.display = "block";
         
        setTimeout(showSlides, 2000);
    }
}

function myFunction1() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }