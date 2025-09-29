gsap.registerPlugin(SplitText, ScrollTrigger, Flip);
let darkOn;
const ceoitem = document.querySelector('.listcontain');
let cardsize = document.querySelector('.ceocard').offsetWidth;
let theme = document.querySelector('.darkfile');
const darkbutton = document.querySelector('.darkcontain');

function darksafe () {
        if (localStorage.getItem(darkOn) === null) {
                darkOn = false;
                localStorage.setItem('darkOn', darkOn);
        }else if (localStorage.getItem(darkOn) !== null) {
                darkOn = localStorage.getItem(darkOn)
        }
}
function darkall () {
        darksafe ();
        function currentcolor () {
                if (localStorage.getItem(darkOn) === true) {
                        theme.setAttribute('href', 'css/darkmode.css');
                }else if (localStorage.getItem(darkOn) === false) {
                        theme.setAttribute('href', 'css/lightmode.css');
                }
        }
        currentcolor ()


        function changeofcolor () {
                darkOn = localStorage.getItem('darkOn');
                darkbutton.addEventListener('click', () => {
                        let current = darkOn;
                        if (current === false) {
                                theme.setAttribute('href', 'css/darkmode.css');
                                darkOn = true;
                                localStorage.setItem('darkOn', darkOn);
                                document.querySelector('.darkicon').setAttribute('src', 'image/darkmodeimage/moonDark.svg');
                                document.querySelector('.searchsvg').setAttribute('src', 'image/darkmodeimage/searchDark.svg');
                                document.querySelector('.searchsvg1').setAttribute('src', 'image/darkmodeimage/UserDark.svg');
                                document.querySelector('.mmdi-logo').setAttribute('src', 'image/darkmodeimage/mmdilogoDark.svg');
                                document.querySelector('.bnana').setAttribute('src', 'image/darkmodeimage/googleDark.svg');
                                document.querySelector('.seemore').setAttribute('src', 'image/darkmodeimage/arrow-rightDark.svg');
                                document.querySelector('.seemore1').setAttribute('src', 'image/darkmodeimage/arrow-rightDark.svg');
                        }else{
                                theme.setAttribute('href', 'css/lightmode.css');
                                darkOn = false;
                                localStorage.setItem('darkOn', darkOn);
                                document.querySelector('.darkicon').setAttribute('src', 'image/moon.svg');
                                document.querySelector('.searchsvg').setAttribute('src', 'image/Search.svg');
                                document.querySelector('.searchsvg1').setAttribute('src', 'image/Users.svg');
                                document.querySelector('.mmdi-logo').setAttribute('src', 'image/mmdi-logo.svg');
                                document.querySelector('.bnana').setAttribute('src', 'image/google.svg');
                                document.querySelector('.seemore').setAttribute('src', 'image/arrow-right.svg');
                                document.querySelector('.seemore1').setAttribute('src', 'image/arrow-right.svg');
                        }
                })
        }
        changeofcolor();
}


if (screen.width > 1100) {
        document.addEventListener("DOMContentLoaded", (event) => {
                const logo = gsap.timeline();
                logo.fromTo('.logo', {x: -10, opacity: 0}, {duration: 1, x: 0, opacity: 1});
                gsap.fromTo('.headerLinks', {y:-10, opacity:0}, {duration: 0.5, y: 0, opacity:1, stagger: {from: 'start', each: 0.2}});
                logo.fromTo('.hero-pic', {x: 20, opacity: 0}, {duration: 0.5, x: 0, opacity: 1});
                const herotext = gsap.timeline()
                SplitText.create(".heroTitle", {
                        type: "words, lines",
                        linesClass: "line",
                        autoSplit: true,
                        mask: "lines",
                        onSplit: (self) => {
                        split = gsap.from(self.lines, {
                                duration: 1,
                                yPercent: 100,
                                opacity: 0,
                                stagger: 0.4,
                                ease: "expo.out",
                        });
                        return split;
                        }
                });

                SplitText.create(".heroDisc", {
                        type: "words, lines",
                        linesClass: "line",
                        autoSplit: true,
                        mask: "lines",
                        onSplit: (self) => {
                        split = gsap.from(self.lines, {
                                duration: 1,
                                yPercent: 100,
                                opacity: 0,
                                stagger: 0.2,
                                ease: "expo.out",
                        });
                        return split;
                        }
                });
                const buttons = gsap.timeline()
                buttons.fromTo('.heroB', {x: -100}, {duration: 1, x: 0, ease: "back.out(1)"})
                buttons.fromTo('.heroB-secound', {x: -500}, {duration: 1, x: 0, ease: "back.out(1)"}, "-=0.75")

                // hero section done

                const Scrolbrands = {
                        trigger: '.brands'
                }
                gsap.timeline({scrollTrigger: Scrolbrands}).fromTo('.logoes, .byebye', {y: -24, opacity: 0}, {duration: 1, y: 0, opacity: 1, stagger: {from: 'start', each: 0.2}})

                // end of brands Animation
                const scrolexpe1 ={
                        trigger: '.expedis'
                } 
                const expe1 = gsap.timeline({scrollTrigger: scrolexpe1});
                expe1.fromTo('.image1', {x: -100, opacity: 0}, {duration: 1, x: 0, opacity: 1})

                SplitText.create(".expeTitle", {
                        type: "words, lines",
                        linesClass: "line",
                        autoSplit: true,
                        mask: "lines",
                        onSplit: (self) => {
                        split = expe1.from(self.lines, {
                                duration: 1,
                                yPercent: 100,
                                opacity: 0,
                                stagger: 0.4,
                                ease: "expo.out",
                        }, "-=0.75");
                        return split;
                        }
                });

                SplitText.create(".expedis", {
                        type: "words, lines",
                        linesClass: "line",
                        autoSplit: true,
                        mask: "lines",
                        onSplit: (self) => {
                        split = expe1.from(self.lines, {
                                duration: 1,
                                yPercent: 100,
                                opacity: 0,
                                stagger: 0.2,
                                ease: "expo.out",
                        }, "-=0.75");
                        return split;
                        }
                });
                
                const inputtriger = {
                        trigger: '.radioeplay'
                }
                const expeinput = gsap.timeline({scrollTrigger: inputtriger});
                expeinput.fromTo('.input', {x: 100, opacity: 0}, {duration: 0.5, x: 0, opacity: 1, stagger: {from: 'start', each: 0.2}});

                // end of expe1
                const expe2triger = {
                        trigger: '.cardTitle'
                }
                const expe2 = gsap.timeline({scrollTrigger: expe2triger});
                
                SplitText.create(".expe2Title", {
                        type: "words, lines",
                        linesClass: "line",
                        autoSplit: true,
                        mask: "lines",
                        onSplit: (self) => {
                        split = expe2.from(self.lines, {
                                duration: 1,
                                yPercent: 100,
                                opacity: 0,
                                stagger: 0.4,
                                ease: "expo.out",
                        });
                        return split;
                        }
                });
                SplitText.create(".expe2disq", {
                        type: "words, lines",
                        linesClass: "line",
                        autoSplit: true,
                        mask: "lines",
                        onSplit: (self) => {
                        split = expe2.from(self.lines, {
                                duration: 1,
                                yPercent: 100,
                                opacity: 0,
                                stagger: 0.2,
                                ease: "expo.out",
                        }, "-=0.5");
                        return split;
                        }
                });

                expe2.fromTo('.card1', {x: -100, opacity: 0}, {duration: 0.5, opacity: 1, x: 0}, "-=0.5")
                expe2.fromTo('.card2', {x: -500, opacity: 0}, {duration: 0.5, opacity: 1, x: 0})
                expe2.fromTo('.expe2img', {x: 100, opacity: 0, rotation: 45}, {duration: 0.5, rotation: 0, opacity: 1, x: 0},"-=1" )

                // end of the expe2

                const tooltrigger = {
                        trigger: '.card'
                }
                const tool = gsap.timeline({scrollTrigger: tooltrigger});
                SplitText.create(".tooltitle", {
                        type: "words, lines",
                        linesClass: "line",
                        autoSplit: true,
                        mask: "lines",
                        onSplit: (self) => {
                        split = tool.from(self.lines, {
                                duration: 1,
                                yPercent: 100,
                                opacity: 0,
                                stagger: 0.4,
                                ease: "expo.out",
                        });
                        return split;
                        }
                });
                SplitText.create(".tooldis", {
                        type: "words, lines",
                        linesClass: "line",
                        autoSplit: true,
                        mask: "lines",
                        onSplit: (self) => {
                        split = tool.from(self.lines, {
                                duration: 1,
                                yPercent: 100,
                                opacity: 0,
                                stagger: 0.2,
                                ease: "expo.out",
                        });
                        return split;
                        }
                });

                tool.fromTo('.card', {y: -56, opacity: 0}, {duration: 0.5, y: 0, opacity: 1, stagger: {from: 'start', each: 0.2}}, "-=1")

                // end of tool container

                const customertri = {
                        trigger: '.ceoName'
                }
                const customertime = gsap.timeline({scrollTrigger: customertri});
                SplitText.create(".ceotitle", {
                        type: "words, lines",
                        linesClass: "line",
                        autoSplit: true,
                        mask: "lines",
                        onSplit: (self) => {
                        split = customertime.from(self.lines, {
                                duration: 1,
                                yPercent: 100,
                                opacity: 0,
                                stagger: 0.4,
                                ease: "expo.out",
                        });
                        return split;
                        }
                });
                SplitText.create(".ceoexpe", {
                        type: "words, lines",
                        linesClass: "line",
                        autoSplit: true,
                        mask: "lines",
                        onSplit: (self) => {
                        split = customertime.from(self.lines, {
                                duration: 1,
                                yPercent: 100,
                                opacity: 0,
                                stagger: 0.2,
                                ease: "expo.out",
                        });
                        return split;
                        }
                });

                customertime.fromTo('.ceocontain', {y: 36, opacity: 0}, {duration: 0.5, opacity: 1, y: 0, onComplete: () => ceocardmove ()}, "-=1")

        });

}



document.querySelector('.darkcontain').addEventListener('click' , () => {
        const switching = gsap.timeline({onStart: flippingcon(),onComplete: darkall() })
        function flippingcon() {
                document.querySelector('.darkicon').style.display = 'none';
                const state = Flip.getState('.darkcontain', { props: 'backgroundColor'});
                document.querySelector('.darkcontain').classList.toggle('newone1');
                Flip.from(state, {
                duration: 0.7,
                ease: "power1.inOut",
                absolute: true,
                });
        }
        switching.to('.darkcontain', {duration: 1, opacity: 0}, "+=1");
})


function ceocardmove () {
    setInterval(() => { 
        ceoitem.scrollLeft += cardsize+32;
        check()
    }, 3000);

    function check() {
        if (ceoitem.scrollLeft > 3075) {
            ceoitem.classList.add('scrollend')
            ceoitem.scrollLeft = 0;
            ceoitem.classList.remove('scrollend')
        }

    }
}

// testing ground

