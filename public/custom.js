$(document).ready(function () {

  var navbarToggler = document.getElementById("navbarToggler");
  $(".nav-link").click(function () {
    if (navbarToggler.classList.contains("show"))
      navbarToggler.classList.remove("show");
  });

});