$(function() {
  /* Bootstrap elements */
  $(".carousel").carousel();

  getTemas();
  var tema = getTemaURL("id_tema");

  if (getTemaURL("id_tema") != "") {
    getSubtemas(tema);
  }

  /* ONCLICKS */
  $("#menu").click(function() {
    openSidenav();
  });

  $(".closebtn").click(function() {
    closeSidenav();
  });

  setTimeout(function(){
    $(".preloader").fadeOut();
  }, 1500);
});

function openSidenav() {
  $(".sidenav").addClass(
    "sidenav-open"
  ); /* Adds class s-open to move sidenav */
  //$("#main").addClass("main-move"); /* Main moves with sidenav */
}

function closeSidenav() {
  $(".sidenav").removeClass(
    "sidenav-open"
  ); /* Removes class to close sidenav */
  $("#main").removeClass(
    "main-move"
  ); /* Removes class to set main to normal state */
}

function getTemaURL(variable) {
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (pair[0] == variable) {
      return pair[1];
    }
  }
  return false;
}

function getTemas() {
  $.ajax({
    type: "POST",
    url: "server/getTemas.php",
    dataType: "json",
    success: function(response) {
      response.forEach(element => {
        $("#leftSideNav").append(
          `<a id="temas" href="?id_tema=${element.id_tema}">${element.tema}</a>
          <hr/>`
        );
      });
    }
  });
}

function getSubtemas(tema) {
  $("#carousel").addClass("none");
  $.ajax(
    {
      type: "POST",
      url: "server/getSubtemas.php",
      dataType: "json",
      data: {
        tema: tema
      },
      success: function(response) {
        response.forEach(element => {
          $("#sub-main").append(
            `<div class="alert alert-primary" role="alert">
            <a href="&id_subtema=${element.id_subtema}">${element.subtema}</a>
          </div>`
          );
        });
      }
    },
    $("#sub-main").removeClass("none")
  );
}
