$(document).ready(function() {
  $('#fullpage').fullpage({
    navigation: false,
    css3: true,
    scrollingSpeed: 1000,
    scrollBar: false,
    easing: 'easeInOutCubic',
    easingcss3: 'ease',
    loopBottom: false,
    loopTop: false,
    loopHorizontal: true,
    continuousVertical: false,
    normalScrollElements: '#element1, .element2',
    scrollOverflow: false,
    touchSensitivity: 15,
    normalScrollElementTouchThreshold: 5,
    slidesNavigation: true,
    slidesNavPosition: 'bottom',
    //Accessibility
    keyboardScrolling: true,
    animateAnchor: true,
    recordHistory: true,

    //Design
    controlArrows: false,
    verticalCentered: true,
    resize : false,
    sectionsColor: ['#FFFFFF', '#FFFFFF'],
    fixedElements: '#header, #footer',
    responsiveWidth: 600,
    responsiveHeight: 0,
  });
});
