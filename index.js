gsap.registerPlugin(ScrollTrigger);



let html_bar = document.querySelector('.html-bar')
let html_p = document.getElementById('html-p')
let css_bar = document.querySelector('.css-bar')
let css_p = document.getElementById('css-p')
let js_bar = document.querySelector('.js-bar')
let js_p = document.getElementById('js-p')
let python_bar = document.querySelector('.python-bar')
let python_p = document.getElementById('python-p')
let ap = document.getElementById('ap')
let head = document.querySelectorAll(".head")



let i = 0
function grow() {

    if (i < 91) {
        html_bar.style.width = i + '%'
        html_p.innerHTML = i + '%'
        css_bar.style.width = i + '%'
        css_bar.innerHTML = i + '%'
        i++;

    }
    if (i < 71) {
        js_bar.style.width = i + '%'
        js_p.innerHTML = i + '%'

    }
    if (i < 51) {
        python_bar.style.width = i + '%'
        python_p.innerHTML = i + '%'

    }
}


// gsap animations

const t1 = gsap.timeline()
t1.from('.intro', { opacity: 0, x: '-40vw', duration: '1.5', ease: 'Power4easeIn' })
    .from('.picture', { opacity: 0, duration: '2', ease: 'slow' }, 0.2)
    .from('.title1', { opacity: 0, x: '40vw', duration: '1', ease: 'Power4easeIn' }, 0.5)
    .from('#snap', { opacity: 0, y: '-20vh', ease: 'Power2easeIn', stagger: '0.1s' }, 1)
    .from('.b', { opacity: 0, x: '-40vw', duration: '1.5', ease: 'Power4easeIn' })

    .to('.intro', {
        y: '-10vw', scrollTrigger: {
            trigger: ".intro",
            scrub: true,
            start: "200px 60%",
            end: "300px 20%",
            // markers: true,

        }
    })
    .to('.title1', {
        y: '-10vw', scrollTrigger: {
            trigger: ".intro",
            scrub: true,
            start: "300px 60%",
            end: "400px 20%",
            // markers: true,

        }
    })
    .to('.picture', {
        y: '-10vw', scrollTrigger: {
            trigger: ".intro",
            scrub: true,
            start: "300px 60%",
            end: "400px 20%",
            // markers: true,

        }
    })
    .to('.dis', {
        y: '-10vw', scrollTrigger: {
            trigger: ".intro",
            scrub: true,
            start: "320px 60%",
            end: "500px 20%",
            // markers: true,

        }
    })
    .to('.b', {
        y: '-10vw', scrollTrigger: {
            trigger: ".b",
            scrub: true,
            start: "-20px 60%",
            end: "80px 20%",
            // markers: true,

        }
    })
    .from('#bout', {
        y: '-10vw', opacity: 0, scrollTrigger: {
            trigger: '.b',
            scrub: true,
            start: '200px 60%',
            end: '280px 20%',
            // markers:true
        }
    })
    .from('.my-introduction', {
        x: '-20vw', scrollTrigger: {
            trigger: '.b',
            scrub: true,
            start: '230px 60%',
            end: '280px 20%',
            // markers:true
        }
    })
    .from('.my-introduction2', {
        x: '-20vw', scrollTrigger: {
            trigger: '.b',
            scrub: true,
            start: '230px 60%',
            end: '280px 20%',
            // markers:true
        }
    })
    .from('.content1', {
        opacity: 0, scrollTrigger: {
            trigger: '.b',
            scrub: true,
            start: '300px 60%',
            end: '370px 20%',
            // markers:true
        }
    })
    .from('#first', {
        x: '10vw', opacity: 0, scrollTrigger: {
            trigger: '.b',
            scrub: true,
            start: '200vw 60%',
            end: '300vw 20%',
            // markers:true
        }
    })

    .from('#skill', {
        x: '-30vw', scrollTrigger: {
            trigger: '#skill',
            scrub: true,
            start: '140px 60%',
            end: '200px 40%',
            // markers:true,
            onEnter: () => setInterval(grow, 20)

        }
    })
    .from('#skills', {
        x: '50vw', scrollTrigger: {
            trigger: '#skill',
            scrub: true,
            start: '140px 60%',
            end: '200px 40%',



        }
    })
    .from('#projects', {
        x: '-30vw', scrollTrigger: {
            trigger: '#projects',
            scrub: true,
            start: '0px 60%',
            end: '60px 40%',
            // markers : true
        }
    })
    .from('#p1', {
        opacity: 0, scrollTrigger: {
            trigger: '#projects',
            scrub: true,
            start: '120px 60%',
            end: '180px 40%',
            // markers : true
        }
    })
    .from('#p2', {
        opacity: 0, scrollTrigger: {
            trigger: '#p1',
            scrub: true,
            start: '60px 60%',
            end: '120px 40%',
            // markers : true
        }
    })
    .from('#p3', {
        opacity: 0, scrollTrigger: {
            trigger: '#p2',
            scrub: true,
            start: '60px 60%',
            end: '120px 40%',
            // markers: true
        }
    })
    .from('#p4', {
        opacity: 0, scrollTrigger: {
            trigger: '#p3',
            scrub: true,
            start: '60px 60%',
            end: '120px 40%',
            // markers : true
        }
    })
    // .from('#contact', {
    //     y: '-20vw', opacity: 0, scrollTrigger: {
    //         trigger: '#contact',
    //         scrub: 'true',
    //         start: '100px 60%',
    //         end: '200px 40%',
    //         // markers:true
    //     }
    // })
    // .from('.contact-text', {
    //     x: '-20vw', opacity: 0, scrollTrigger: {
    //         trigger: '#contact',
    //         scrub: 'true',
    //         start: '200px 60%',
    //         end: '300px 40%',
    //         // markers:true
    //     }
    // })
    // .from('#contact-picture', {
    //     opacity: 0, scrollTrigger: {
    //         trigger: '#contact',
    //         scrub: 'true',
    //         start: '400px 60%',
    //         end: '500px 40%',
    //         // markers:true
    //     }
    // })
    // .from('.contact-box', {
    //     opacity: 0, scrollTrigger: {
    //         trigger: '#contact',
    //         scrub: 'true',
    //         start: '400px 60%',
    //         end: '500px 40%',
    //         // markers:true
    //     }
    // })




// dark mode
document.body.style.backgroundColor = 'white';

ap.addEventListener('click', function dark_mode() {
    if (document.body.style.backgroundColor == 'white') {
        console.log('hi')

        document.body.style.backgroundColor = '#393E46';
        document.body.style.color = 'white';
        for (i = 0; i < head.length; i++) {
            head[i].style.color = "white";
          }

    }
    else if (document.body.style.backgroundColor == 'black') {
        document.body.style.backgroundColor = 'white'
        document.body.style.color = 'black'

    }
    




})