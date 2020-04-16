window.onload = function () {
    let totalHeight = 0;

    const sections = document.querySelectorAll('.section');

    for (let i = 0; i < sections.length; i++) {
        totalHeight = 180 * i + 180;
    }

    const bg = document.querySelector('#background');

    bg.style.height = totalHeight + 'vh';

    document.querySelector('#footer').style.top = totalHeight + 'vh';

    document.querySelector('#timeline-items').style.height = totalHeight + 'vh';
}