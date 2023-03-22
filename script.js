const tl = gsap.timeline()
const firstText = new SplitType('#first-text')
const secondText = new SplitType('#second-text')



tl.from('.header', {opacity: 0, x: -2000, duration: 3})
   .from('.logo', {opacity: 0, x: -100, duration: 1})
//    .from('.ul', {opacity: 0, x: 500, duration: 1, stagger: 2} )
   .from('.li', {opacity: 0, x: 500, duration: 1, stagger: 1} )
   .from('.container', {opacity: 0, x: -2000, duration: 1})
   .from('.container-left', {opacity: 0, y: -2000, duration: 1})
   .from('.specification', {opacity:0, x: -200, })
   .from('.sizes', {opacity:0, x: -200, })
   .from('.material', {opacity:0, x: -200, })
   .from('.fa-solid', {opacity: 0, x: -100, stagger:1})
   // .from('.p', {opacity:0, y: -200})
   .to('.char', {y:0, stagger: 0.05, delay: 0.2, duration: 0.1})
   
   .from('.container-right', {opacity:0, x: 100, duration:1,})
   .from('.img', {opacity:0, duration: 1, x: 200})
   .from('.small-h3', {opacity: 0, x: 200, duration: 1})
   .from('.small-p', {opacity: 0, x: 200, duration: 1})
   .from('.small-a', {opacity: 0, x: 200, duration: 1})
   .from('.stagger', {opacity:0, x:200, stagger: .5})

   .from('.end', {opacity:0, y: -100, duration:1.5})

   //split-type

   