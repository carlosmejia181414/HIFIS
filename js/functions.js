(function ($) {
  ("use strict");

  /*Aside panel + nav*/
  var $Main_nav = $(".main_nav");
  var $Mc = $("#main_container");
  var $Layer = $(".layer");
  var $Btn_m = $("#menu-button-mobile");
  var $Tabs_c = $(".main_nav .nav-tabs a");

  $Main_nav.on("click", function () {
    $Mc.addClass("show_container");
    $Layer.addClass("layer-is-visible");
  });
  $(".close_in").on("click", function () {
    $Mc.removeClass("show_container");
    $(".main_nav .nav-tabs li a").removeClass("active");
    $(".tab-pane").removeClass("active");
    $Layer.removeClass("layer-is-visible");
  });
  $Tabs_c.on("click", function (e) {
    var href = $(this).attr("href");
    $(".wrapper_in").animate(
      {
        scrollTop: $(href).offset().top,
      },
      "fast"
    );
    e.preventDefault();
    if ($(window).width() <= 767) {
      $Btn_m.removeClass("active");
      $Main_nav.slideToggle(300);
    }
  });
  $Btn_m.on("click", function () {
    $Main_nav.slideToggle(500);
    $(this).toggleClass("active");
  });

  $(window).on("resize", function () {
    var width = $(window).width();
    if (width <= 767) {
      $Main_nav.hide();
    } else {
      $Main_nav.show();
    }
  });

  /* Scroll to top small screens: chanhe the top position offset based on your content*/
  var $Scrolbt = $("button.backward,button.forward");
  var $Element = $(".wrapper_in");

  if (window.innerWidth < 800) {
    $Scrolbt.on("click", function () {
      $Element.animate({ scrollTop: 500 }, "slow");
      return false;
    });
  }

  if (window.innerWidth < 600) {
    $Scrolbt.on("click", function () {
      $Element.animate({ scrollTop: 610 }, "slow");
      return false;
    });
  }

  /* Tooltip */
  var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });

  /* Accordion*/
  function toggleChevron(e) {
    $(e.target)
      .prev(".card-header")
      .find("i.indicator")
      .toggleClass("icon_minus_alt2 icon_plus_alt2");
  }
  $("#accordion").on("hidden.bs.collapse shown.bs.collapse", toggleChevron);
  function toggleIcon(e) {
    $(e.target)
      .prev(".panel-heading")
      .find(".indicator")
      .toggleClass("icon_minus_alt2 icon_plus_alt2");
  }

  /* Video modal*/
  $(".video_modal").magnificPopup({
    type: "iframe",
  });

  /*  Image popups */
  $(".magnific-gallery").each(function () {
    $(this).magnificPopup({
      delegate: "a",
      type: "image",
      gallery: {
        enabled: true,
      },
    });
  });

  /* Carousel*/
  $(".owl-carousel").owlCarousel({
    items: 1,
    dots: false,
    loop: true,
    autoplay: true,
    autoHeight: true,
    autoplayTimeout: 3500,
    animateOut: "fadeOut",
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });

  /*  Wizard */
  jQuery(function ($) {
    "use strict";
    // Chose here which method to send the email, available:
    // Simple phpmail text/plain > quote_send.php (default)
    // PHPMailer text/html > phpmailer/quote_phpmailer.php
    // PHPMailer text/html SMTP > phpmailer/quote_phpmailer_smtp.php
    // PHPMailer with html template > phpmailer/quote_phpmailer_template.php
    // PHPMailer with html template SMTP> phpmailer/quote_phpmailer_template_smtp.php
    $("form#wrapped").attr("action", "quote_send.html");
    $("#wizard_container")
      .wizard({
        stepsWrapper: "#wrapped",
        submit: ".submit",
        beforeSelect: function (event, state) {
          if ($("input#website").val().length != 0) {
            return false;
          }
          if (!state.isMovingForward) return true;
          var inputs = $(this).wizard("state").step.find(":input");
          return !inputs.length || !!inputs.valid();
        },
      })
      .validate({
        errorPlacement: function (error, element) {
          if (element.is(":radio") || element.is(":checkbox")) {
            error.insertBefore(element.next());
          } else {
            error.insertAfter(element);
          }
        },
      });
    //  progress bar
    $("#progressbar").progressbar();
    $("#wizard_container").wizard({
      afterSelect: function (event, state) {
        $("#progressbar").progressbar("value", state.percentComplete);
        $("#location").text(
          "(" + state.stepsComplete + "/" + state.stepsPossible + ")"
        );
      },
    });
  });

  /* Check and radio input styles */
  $("input.icheck").iCheck({
    checkboxClass: "icheckbox_square-yellow",
    radioClass: "iradio_square-yellow",
  });

  // Obtener la fecha actual
  var fecha = new Date();
  var dia = fecha.getDate() - 1;
  var mes = fecha.getMonth();
  var nombresMeses = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  var nombreMes = nombresMeses[mes];
  // Formatear la fecha como "DD/MM/AAAA"
  var fechaFormateada = nombreMes + " " + dia + "th";
  document.getElementById("lbldate").textContent = fechaFormateada;
  document.getElementById("lbldate2").textContent = fechaFormateada;
  document.getElementById("SurveyButton").style.display = "none";

  document.addEventListener("DOMContentLoaded", function () {
    // Obtén una referencia al botón forward
    var forwardButton2 = document.querySelector(".StartSurvey");

    // Escucha el evento de clic en el botón forward
    forwardButton2.addEventListener("click", function () {
      // Simula un clic en el botón StartSurvey cuando se hace clic en el botón forward
      document.getElementById("SurveyButton").click();
    });

    // function validateForm() {
    //   var startfirstname = document.forms["startForm"]["startfirstname"].value;
    //   var startlocation = document.forms["startForm"]["startlocation"].value;
    //   var startemail = document.forms["startForm"]["startemail"].value;
    //   var radios = document.getElementsByName("question_1111");
    //   var radioSeleccionado = false;
    //   var radios2 = document.getElementsByName("question_1112");
    //   var radioSeleccionado2 = false;

    //   if (startfirstname === "") {
    //     Swal.fire({
    //       title: "Error",
    //       text: "Enter your Name !",
    //       icon: "error",
    //     });
    //     return false;
    //   }
    //   if (startlocation === "") {
    //     Swal.fire({
    //       title: "Error",
    //       text: "Enter the Location !",
    //       icon: "error",
    //     });
    //     return false;
    //   }

    //   if (startemail === "") {
    //     Swal.fire({
    //       title: "Error",
    //       text: "Enter your Email !",
    //       icon: "error",
    //     });
    //     return false;
    //   }

    //   for (var i = 0; i < radios.length; i++) {
    //     if (radios[i].checked) {
    //       radioSeleccionado = true;
    //       break;
    //     }
    //   }

    //   if (radioSeleccionado) {
    //   } else {
    //     Swal.fire({
    //       title: "Error",
    //       text: "Enter your Name !",
    //       icon: "error",
    //     });
    //   }

    //   for (var i = 0; i < radios2.length; i++) {
    //     if (radios2[i].checked) {
    //       radioSeleccionado2 = true;
    //       break;
    //     }
    //   }

    //   if (radioSeleccionado2) {
    //   } else {
    //     Swal.fire({
    //       title: "Error",
    //       text: "Enter your Name !",
    //       icon: "error",
    //     });
    //   }
    //   return true;
    // }
  });
})(window.jQuery); // JavaScript Document
