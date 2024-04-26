const sildeShow = ()=>{
    for(let i = 0;i<=5;i++){
        const div = document.createElement('div');
        div.style.backgroundImage = `url(images/slideshow/section-1-bg-${i}.jpg)`;
        i === 1 && div.classList.add('change')
        document.querySelector('.slideshow').appendChild(div);
    }
}

sildeShow();


const divs = document.querySelectorAll('.slideshow div')

let a = 1

const slideshow = () => {
    setInterval(() => {
        a++

        const div = document.querySelector('.slideshow .change')

        div.classList.remove('change')

        if(a < divs.length) {
            div.nextElementSibling.classList.add('change')
        } else {
            divs[0].classList.add('change')
            a = 1
        }
    }, 10000)};
slideshow()

let x = 0
let y = 20
let z = 0
let bool = true
let interval;

const cube = document.querySelector('.cube')

document.querySelector('.top-x-control').addEventListener('click', () => {
    cube.style.transform = `rotateX(${x += 20}deg) rotateY(${y}deg) rotateZ(${z}deg)`
})

document.querySelector('.bottom-x-control').addEventListener('click', () => {
    cube.style.transform = `rotateX(${x -= 20}deg) rotateY(${y}deg) rotateZ(${z}deg)`
})

document.querySelector('.left-y-control').addEventListener('click', () => {
    cube.style.transform = `rotateX(${x}deg) rotateY(${y -= 20}deg) rotateZ(${z}deg) `
})

document.querySelector('.right-y-control').addEventListener('click', () => {
    cube.style.transform = `rotateX(${x}deg) rotateY(${y += 20}deg) rotateZ(${z}deg) `
})

document.querySelector('.top-z-control').addEventListener('click', () => {
    cube.style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z -= 20}deg) `
})

document.querySelector('.bottom-z-control').addEventListener('click', () => {
    cube.style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z += 20}deg) `
})

const playPause = () => {
    if(bool) {
        interval = setInterval(() => {
            cube.style.transform = `rotateX(${x}deg) rotateY(${y++}deg) rotateZ(${z}deg)`
        }, 100)
    } else {
        clearInterval(interval)
    }
}

playPause()

document.querySelector('.controls').addEventListener('mouseover', () => {
    bool = false
    playPause()
})

document.querySelector('.controls').addEventListener('mouseout', () => {
    bool = true
    playPause()
})
const section3Content = document.querySelector('.section-3-content');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            section3Content.classList.add('change');
        } else {
            section3Content.classList.remove('change');
        }
    });
}, { threshold: 0.3 });

observer.observe(section3Content);

const watchBands = document.querySelector('.watch-bands');
const watchCases = document.querySelector('.watch-cases');

const watchTopControl = document.querySelector('.watch-top-control');
const watchRightControl = document.querySelector('.watch-right-control');
const watchBottomControl = document.querySelector('.watch-bottom-control');
const watchLeftControl = document.querySelector('.watch-left-control');

let axisY = 0;
let axisX = 0;

const hideControl = () => {
    if (axisY === -175) {
        watchTopControl.classList.add('hideControl');
    } else {
        watchTopControl.classList.remove('hideControl');
    }

    if (axisY === 105) {
        watchBottomControl.classList.add('hideControl');
    } else {
        watchBottomControl.classList.remove('hideControl');
    }

    if (axisX === -140) {
        watchRightControl.classList.add('hideControl');
    } else {
        watchRightControl.classList.remove('hideControl');
    }

    if (axisX === 140) {
        watchLeftControl.classList.add('hideControl');
    } else {
        watchLeftControl.classList.remove('hideControl');
    }
};

watchTopControl.addEventListener('click', () => {
    axisY -= 35;
    watchCases.style.marginTop = `${axisY}rem`;
    hideControl();
});

watchBottomControl.addEventListener('click', () => {
    axisY += 35;
    watchCases.style.marginTop = `${axisY}rem`;
    hideControl();
});

watchRightControl.addEventListener('click', () => {
    axisX -= 35;
    watchBands.style.marginLeft = `${axisX}rem`;
    hideControl();
});

watchLeftControl.addEventListener('click', () => {
    axisX += 35;
    watchBands.style.marginLeft = `${axisX}rem`;
    hideControl();
});
