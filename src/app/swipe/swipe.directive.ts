import { AfterViewInit, Directive, ElementRef, EventEmitter, Output, Renderer2 } from '@angular/core';


@Directive({
  selector: '[appSwipe]'
})
export class SwipeDirective implements AfterViewInit {

  /** x position at touchstart */
  xDown = null;
  /** y position at touchstart */
  yDown = null;
  /** Timestamp at touchstart */
  time = 0;

  @Output() swipeLeft: EventEmitter<any>; // if writing this code by hand, double check you import EventEmitter from '@angular/core' and not from 'events' or you wil get the error "Type EventEmitter is not generic"
  @Output() swipeRight: EventEmitter<any>;
  // @Output() swipeUp: EventEmitter<any>;
  // @Output() swipeDown: EventEmitter<any>;

  constructor(private renderer: Renderer2, private elRef: ElementRef) {
    this.swipeRight = new EventEmitter<any>();
    this.swipeLeft = new EventEmitter<any>();
    // this.swipeUp = new EventEmitter<any>();
    // this.swipeDown = new EventEmitter<any>();
  }

  ngAfterViewInit() {
    /** Listen for touchstart event on element directive is attached to */
    this.renderer.listen(this.elRef.nativeElement, 'touchstart', (event: TouchEvent) => {
      this.handleTouchStart(event);
    });

    /** Listen for touchend event on element directive is attached to */
    this.renderer.listen(this.elRef.nativeElement, 'touchend', (event: TouchEvent) => {
      this.handleTouchMove(event);
    });

    this.renderer.listen(this.elRef.nativeElement, 'mousedown', (event: MouseEvent) => {
      this.handleMouseStart(event);
    });
    
    this.renderer.listen(this.elRef.nativeElement, 'mousemove', (event: MouseEvent) => {
      this.handleMouseMove(event);
    });
  }

  private handleTouchStart(event: TouchEvent) {
    this.xDown = event.touches[0].pageX;
    this.yDown = event.touches[0].pageY;
    this.time = event.timeStamp;
  }

  handleTouchMove(event: TouchEvent) {
    if ( ! this.xDown || ! this.yDown ) {
      return;
    }

    /** @see https://stackblitz.com/edit/angular-swipe-events-with-hostlistner */
    const touch = event.touches[0] || event.changedTouches[0];

    const xUp = touch.pageX;
    const yUp = touch.pageY;

    const xDiff = this.xDown - xUp;
    const yDiff = this.yDown - yUp;
    const timeDiff = event.timeStamp - this.time;

    // simulate a swipe -> less than 500 ms and more than 60 px
    if (timeDiff < 500) {
      // touch movement lasted less than 500 ms
      if (Math.abs(xDiff) > 60) {
        // delta x is at least 60 pixels
        if (xDiff > 0) {
          this.swipeRight.emit(event);
        } else {
          this.swipeLeft.emit(event);
        }
      }

      /*if (Math.abs(yDiff) > 60) {
        // delta y is at least 60 pixels
        if (yDiff > 0) {
          this.swipeDown.emit(event);
        } else {
          this.swipeUp.emit(event);
        }
      }*/
    }

    // Reset values.
    this.xDown = null;
    this.yDown = null;
  }
  
  private handleMouseStart(event: MouseEvent) {
    this.xDown = event.pageX; // unsure if clientX, layerX, pageX, movementX. Not screenX anyways
    this.yDown = event.pageY;
    this.time = event.timeStamp;
  }

  handleMouseMove(event: MouseEvent) {
    if ( ! this.xDown || ! this.yDown ) {
      return;
    }

    /** @see https://stackblitz.com/edit/angular-swipe-events-with-hostlistner */
    
    const xUp = event.pageX;
    const yUp = event.pageY;


    const xDiff = this.xDown - xUp;
    const yDiff = this.yDown - yUp;
    const timeDiff = event.timeStamp - this.time;

    // simulate a swipe -> less than 500 ms and more than 60 px
    if (timeDiff < 500) {
      // touch movement lasted less than 500 ms
      if (Math.abs(xDiff) > 60) {
        // delta x is at least 60 pixels
        if (xDiff > 0) {
          this.swipeRight.emit(event);
        } else {
          this.swipeLeft.emit(event);
        }
      }

      /*if (Math.abs(yDiff) > 60) {
        // delta y is at least 60 pixels
        if (yDiff > 0) {
          this.swipeDown.emit(event);
        } else {
          this.swipeUp.emit(event);
        }
      }*/
    }

    // Reset values if all mouse buttons up
    if (event.buttons === 0) {
      this.xDown = null;
      this.yDown = null;
    }
  }
}
