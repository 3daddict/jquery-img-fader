$( document ).ready(function() {
    console.log( "ready!" );
});

const cycleImages = () => {
    let images = $('#imageSet img');
    let now = images.filter(':visible');
    let next = now.next().length ? now.next() : images.first();
    const speed = 2000;

    now.fadeOut(speed);
    next.fadeIn(speed);
}

$(() => {
    setInterval(cycleImages, 4000);
});