document.addEventListener("DOMContentLoaded", (event) => {
    let ctx = gsap.context (() => {
        gsap.to('.logoName', {x : 100, opacity: 0.5, duration: 5})
    })
});
