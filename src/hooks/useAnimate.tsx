import { useEffect } from "react"

export const useAnimate = ({ classSelector, animationClass }) => {
  let elements;
  let windowHeight;

  const init = () => {
    elements = document.querySelectorAll( `.${ classSelector }` );
    windowHeight = window.innerHeight;
  };

  const checkPosition = () => {
    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      var positionFromTop = elements[i].getBoundingClientRect().top;

      if (positionFromTop - windowHeight <= 0) {
        element.classList.add(animationClass);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', init);
    init();
    checkPosition();
    //console.log('ejecuto aca');
    return () => {
      window.removeEventListener('scroll', checkPosition);
      window.removeEventListener('resize', init);
    }
  }, []);

  return { success: true };
}
