/*****************
* Navbar Active Items
*****************/
$(document).ready(function () {
  if ($(document).scrollTop() < 50) {
    $("#welcome").addClass("activeSec");
  }
  var lastId,
    topMenu = $("#menu"),
    menuItems = topMenu.find("a"),
    scrollItems = menuItems.map(function () {
      var item = $($(this).attr("href"));
      if (item.length) {
        return item;
      }
    });
  menuItems.click(function (e) {
    var href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top;
    $("html, body").stop().animate(
      {
        scrollTop: offsetTop,
      });
    e.preventDefault();
  });
  $(window).scroll(function () {
    var fromTop = $(this).scrollTop();
    var cur = scrollItems.map(function () {
      if ($(this).offset().top <= fromTop + 320) {
        return this;
      }
    });
    cur = cur[cur.length - 1];
    var id = cur && cur.length ? cur[0].id : "";

    if (lastId !== id) {
      lastId = id;
      menuItems
        .parent()
        .removeClass("active")
        .end()
        .filter("[href='#" + id + "']")
        .parent()
        .addClass("active");

      $("section").removeClass("activeSec");
      $("#" + id).addClass("activeSec");
      var color = $("#" + id).attr("data-background-color");
      $(".content-wrapper").css("background-color", color);
      var r = document.querySelector(":root");
      
      style.setProperty('--color-splash-secondary', pink);
      // $("li.active").css("background-color", color);
    }
  });
});


/*****************
* Particle non-interactive
*****************/
// $(window).scroll(function() {
//    if ($(document).scrollTop() < 250) {
//     $(".particles-js-canvas-el").removeClass("negz");
//    } else{
//     $(".particles-js-canvas-el").addClass("negz");
//    }
// });

/*****************
* Navbar Affix on Scroll
*****************/
$(window).scroll(function() {
  var ww = document.body.clientWidth;
  if ($(document).scrollTop() > 50) {
      $('nav').addClass('affix');
  } else {
      $('nav').removeClass('affix');
  }
});

/*****************
* Mobile Dropdown Animation
*****************/
(function($) { 
  $(function() {

    $('.mobile-nav-dropdown a:not(:only-child)').click(function() {
      $(this).siblings('.mobile-drop-menu').toggle();

//      $('.mobile-drop-menu').not($(this).siblings()).hide();
//      e.stopPropagation();
    });

  });
})(jQuery);



/*****************
* Parallax Banner Animation
*****************/
function EasyPeasyParallaxInit() {
   $(".fadeinstay").css({'opacity': 1});
}

function EasyPeasyParallax() {
  scrollPos = $(this).scrollTop();
  var windowBottom = $(this).scrollTop() + $(this).innerHeight();
  var windowTop = $(this).scrollTop() + $(this).innerHeight() - $(window).height();
  $(".EP-fade").each(function() {
      $(this).css({ 'opacity': 1 - (scrollPos/200) });
  });

  $('.EP-stay-015').css({
    'opacity': 0.4 + ((scrollPos)/300) 
  });
  
  $('.EP-stay-015-quick').css({
    'opacity': 0.15 + ((scrollPos)/50) 
  });
  
  $('.EP-fade-stay').css({
    'margin-top': (scrollPos/2)+"px",
    'opacity': 1-(scrollPos/150)
  });


  $('.EP-fade-stay-quick').css({
    'margin-top': (scrollPos)+"px",
    'opacity': 1-(scrollPos/25)
  });
  
  $('.EP-slightfade-slow').css({
    'opacity': 0 + (scrollPos)
  });

  $(".fadeinstay").each(function() {
      objectBottom = $(this).offset().top + $(this).outerHeight();
      if (objectBottom < windowBottom) { //object comes into view (scrolling down)
        if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
      }
  });
    $(".fadeinstay2").each(function() {
      objectMiddle = $(this).offset().top + $(this).outerHeight()/2;
      if (objectMiddle < windowBottom) { //object comes into view (scrolling down)
        if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
      }
    });
  $(".fadein").each(function() {
      objectBottom = $(this).offset().top + $(this).outerHeight();
      if (objectBottom < windowBottom) { //object comes into view (scrolling down)
        if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
      } else { //object goes out of view (scrolling up)
        if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
      }
    });
  $(".fadein-05").each(function() {
      objectMiddle = $(this).offset().top + $(this).outerHeight()/1.5;
      if (objectMiddle < windowBottom) { //object comes into view (scrolling down)
        if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
      } else { //object goes out of view (scrolling up)
        if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
      }
  });
  $(".fadein-2").each(function() {
      objectMiddle = $(this).offset().top + $(this).outerHeight()/2;
      if (objectMiddle < windowBottom) { //object comes into view (scrolling down)
        if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
      } else { //object goes out of view (scrolling up)
        if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
      }
  });
  $(".fadein-3").each(function() {
      objectMiddle = $(this).offset().top + $(this).outerHeight()/3;
      if (objectMiddle < windowBottom) { //object comes into view (scrolling down)
        if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
      } else { //object goes out of view (scrolling up)
        if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
      }
  });
  $(".fadein-top").each(function() {
      objectTop = $(this).offset().top + 100;

      if (objectTop < windowBottom) { //object comes into view (scrolling down)
        if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
      } else { //object goes out of view (scrolling up)
        if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
      }
  });
  $(".fadeout").each(function() {
      /* Check the location of each desired element */
      objectMiddle = $(this).offset().top + $(this).outerHeight()/1.5;
      /* If the element is completely within bounds of the window, fade it in */
      if (objectMiddle > windowTop) { //object comes into view (scrolling down)
        if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
      } else { //object goes out of view (scrolling up)
        if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
      }
  });

  $('.movinright').css({
    'margin-left': 0 + (scrollPos/10),
    'opacity': 1 - (scrollPos/800)
  });

  $(".scrollvanish").each(function() {
      if (scrollPos > 0) { //object comes into view (scrolling down)
        $(this).addClass("displaynone");
      } else {
        $(this).removeClass("displaynone");
      }
  });

  $(".EP-displaynone").each(function() {
      if ($(this).css('opacity') <= 0) {
        $(this).addClass("displaynone");
      } else {
        $(this).removeClass("displaynone");
      }
  });
}

$(document).ready(function(){
  EasyPeasyParallaxInit();
  EasyPeasyParallax();
  $(window).scroll(function() {
    EasyPeasyParallax();
  });
});

  
/*****************
* Darkmode Switch animations
*****************/
gsap.set("#moon, .star", {opacity: 0});
gsap.set("#sun, #cloud, #moon", {x: 15});
gsap.set(".star", {x: 35, y: -5});


$("#day").click(function(){
  gsap.to("#sun", 1, {x: -157, opacity: 0, ease: Power1.easeInOut});
  gsap.to("#cloud", .5, {opacity: 0, ease: Power1.easeInOut});
  gsap.to("#moon", 1, {x: -157, rotate: -360, transformOrigin: "center", opacity: 1, ease: Power1.easeInOut});
  gsap.to(".star", .5, {opacity: 1, ease: Power1.easeInOut});
  gsap.to("#night", 1, {background: "#224f6d", borderColor: "#cad4d8", ease: Power1.easeInOut});
  $(this).css({"pointer-events": "none"});
  document.documentElement.setAttribute("data-theme", "dark");
  sessionStorage.setItem("dark", "true");
  setTimeout(function(){
    $("#night").css({"pointer-events": "all"})
  }, 1000);

});

$("#night").click(function(){
  gsap.to("#sun", 1, {x: 15, opacity: 1, ease: Power1.easeInOut});
  gsap.to("#cloud", 1, {opacity: 1, ease: Power1.easeInOut});
  gsap.to("#moon", 1, {opacity: 0, x: 35, rotate: 360, transformOrigin: "center", ease: Power1.easeInOut});
  gsap.to(".star", 1, {opacity: 0, ease: Power1.easeInOut});
  gsap.to("#night", 1, {background: "#9cd6ef", borderColor: "#65c0e7", ease: Power1.easeInOut});
  $(this).css({"pointer-events": "none"});
  document.documentElement.setAttribute("data-theme", "light");
  sessionStorage.setItem("dark", "false");
  setTimeout(function(){
    $("#day").css({"pointer-events": "all"})
  }, 1000);

});

/* Preset Darkmode */
$(document).ready(function(){
  if (sessionStorage.getItem('dark') == "false"){
    document.documentElement.setAttribute("data-theme", "light");
} else {
   setTimeout(function () {
     document.getElementById("day").click();
   }, 500);
}
});


/*****************
* Modal
*****************/
var modal = document.getElementById("myModal");
var modalwrap = document.getElementById("modal-wrapper");
var modalbtn = document.getElementById("mymodalBtn");
var modalspan = document.getElementsByClassName("modalclose")[0];

modalbtn.onclick = function() {
  modal.style.display = "block";
}

modalspan.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modalwrap) {
    modal.style.display = "none";
  }
}


/*****************
* Form, allow label to 'show up'
*****************/
$(document).ready(function () {
  $.support.placeholder = (function () {
    var i = document.createElement("input");
    return "placeholder" in i;
  })();

  if ($.support.placeholder) {
    $(".form-label").each(function () {
      $(this).addClass("js-hide-label");
    });

    $(".form-group")
      .find("input, textarea")
      .on("keyup blur focus", function (e) {
        var $this = $(this),
          $label = $this.parent().find("label");

        switch (e.type) {
          case "keyup":
            {
              $label.toggleClass("js-hide-label", $this.val() == "");
            }
            break;
          case "blur":
            {
              if ($this.val() == "") {
                $label.addClass("js-hide-label");
              } else {
                $label
                  .removeClass("js-hide-label")
                  .addClass("js-unhighlight-label");
              }
            }
            break;
          case "focus":
            {
              if ($this.val() !== "") {
                $label.removeClass("js-unhighlight-label");
              }
            }
            break;
          default:
            break;
        }
      });
  }
});

