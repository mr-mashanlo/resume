import LocomotiveScroll from 'locomotive-scroll';

export function initLocomotive() {
  new LocomotiveScroll( {
    el: document.querySelector( '[data-scroll-container]' ),
    smooth: true
  } );
  console.log( 'locomotive' );
}
