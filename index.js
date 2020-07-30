const transitionAboutTitle = () => {
    const aboutTitle = document.querySelector(".about__title");
    if(aboutTitle) {
        aboutTitle.addEventListener('transitionend',transitionAboutArticle, true )
        aboutTitle.className = "about__after_title";
    }
    
    
}

const transitionAboutArticle = () => {
    const aboutAriticle = document.querySelector('.about__article');
    if(aboutAriticle) {
        aboutAriticle.className = "about__after_article";
    }
    console.log(aboutAriticle);
    
}

window.addEventListener('load', () => {
    transitionAboutTitle();
})

