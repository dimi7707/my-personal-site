import { useEffect } from "react"

export const useAnimate = ({ classSelector, animationClass }) => {
  let elements;
  let windowHeight;

  const init = () => {
    elements = document.querySelectorAll( `.${ classSelector }` );
    windowHeight = window.innerHeight;
  };

  const checkPosition = () => {
    for (let i = 0; i < elements.length; i++) {
      let element = elements[i];
      let positionFromTop = elements[i].getBoundingClientRect().top;

      if (positionFromTop - windowHeight <= 0 && !element.className.includes(animationClass)) {
        element.className += ` ${ animationClass }`;
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', init);
    init();
    checkPosition();
    return () => {
      window.removeEventListener('scroll', checkPosition);
      window.removeEventListener('resize', init);
    }
  }, []);
}
