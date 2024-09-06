export const onScroll = () => {
    const element = document.querySelector(".content");
    
    element.onscroll = (event) => {
        console.log('scroll')
    };
}
