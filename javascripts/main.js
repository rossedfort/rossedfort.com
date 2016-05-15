$(document).ready(function() {
  $('#fullpage').fullpage({
    navigation: false,
    css3: true,
    scrollingSpeed: 1000,
    scrollBar: false,
    easing: 'easeInOutCubic',
    easingcss3: 'ease',
    loopBottom: true,
    loopTop: false,
    loopHorizontal: true,
    continuousVertical: false,
    normalScrollElements: '#element1, .element2',
    scrollOverflow: false,
    touchSensitivity: 15,
    normalScrollElementTouchThreshold: 5,

    //Accessibility
    keyboardScrolling: true,
    animateAnchor: true,
    recordHistory: true,

    //Design
    controlArrows: true,
    verticalCentered: true,
    resize : false,
    sectionsColor: ['#fff', '#fff', '#fff'],
    fixedElements: '#header, #footer',
    responsiveWidth: 600,
    responsiveHeight: 0,
  });
  if (isMobile.any()) {
    $('.main').addClass('mobile');
    $('.welcome').addClass('welcome-text-mobile');
  } else {
    $('.main').addClass('web');
    $('.welcome').addClass('welcome-text-web');
  }
});

var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};
