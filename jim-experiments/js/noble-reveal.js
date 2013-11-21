Reveal.initialize({
    controls: false,
    progress: false,
    history: false,
    keyboard: false,
    touch: false,
    overview: false,
    center: true,
    mouseWheel: false,

    // Transition style
    transition: 'linear', // default/cube/page/concave/zoom/linear/fade/none

    // Transition speed
    transitionSpeed: 'default', // default/fast/slow

    // Transition style for full page backgrounds
    backgroundTransition: 'default' // default/linear/none

});

$('.js-answer').on('click', function(event) {
  event.preventDefault();
  Reveal.next();
});