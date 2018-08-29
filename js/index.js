$(function() {
  /* Bootstrap elements */
  $('.carousel').carousel()

  getTemas();

  /* ONCLICKS */
  $("#menu").click(function() {
    openSidenav();
  });

  $(".closebtn").click(function() {
    closeSidenav();
  });
});

function openSidenav() {
  $(".sidenav").addClass(
    "sidenav-open"
  ); /* Adds class s-open to move sidenav */
  $("#main").addClass("main-move"); /* Main moves with sidenav */
}

function closeSidenav() {
  $(".sidenav").removeClass(
    "sidenav-open"
  ); /* Removes class to close sidenav */
  $("#main").removeClass(
    "main-move"
  ); /* Removes class to set main to normal state */
}

function getTemas() {
  $.ajax({
    type: "POST",
    url: "server/getTemas.php",
    dataType: "json",
    success: function(response) {
      response.forEach(element => {
        $("#leftSideNav").append(
          `<a href="#${element.id_tema}">${element.tema}</a>
          <hr/>`
        );
      });
    }
  });
}

function getSubtemas(tema) {
  $("#sub-main").html("");
  $.ajax({
    type: "POST",
    url: "server/getSubtemas.php",
    dataType: "json",
    data: {
      tema : tema
    },
    success: function(response) {
      response.forEach(element => {
        $("#sub-main").append(
          `<div class="alert alert-primary" role="alert">
            <a href="#${element.id_subtema}">${element.subtema}</a>
          </div>`
        );
      });
    }
  });
}
