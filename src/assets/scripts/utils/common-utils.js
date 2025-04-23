import { disablePageScroll, enablePageScroll } from '@fluejs/noscroll';
import { gsap } from 'gsap/dist/gsap.js';
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin.js';

gsap.registerPlugin(ScrollToPlugin);

export function lockBody() {
    disablePageScroll();
}

export function unlockBody() {
    enablePageScroll();
}

export function scrollTo(id = false, offset = 0, force = false) {
    const target = document.getElementById(id || '__app');

    if (target) {
        const position = target.getBoundingClientRect().top + window.pageYOffset;

        if (force) {
            window.scroll({
                top: position - offset,
                left: 0,
                behavior: 'instant',
            });
        } else {
            gsap.to(window, {
                duration: .5,
                scrollTo:
                    { y: position, offsetY: offset },
            });
        }
    }
}

export function debounce(func, wait, immediate) {
    let timeout;
    return function executedFunction() {
        /* eslint-disable */
        const context = this;
        /* eslint-enable */

        const args = arguments;

        function later() {
            timeout = null;

            if (!immediate) {
                func.apply(context, args);
            }
        }

        const callNow = immediate && !timeout;

        clearTimeout(timeout);
        timeout = setTimeout(later, wait);

        if (callNow) {
            func.apply(context, args);
        }
    };
}

/* eslint-disable */
export function throttle(func, ms) {
    let isThrottled = false;
    let savedArgs;
    let savedThis;

    function wrapper() {
        if (isThrottled) {
            savedArgs = arguments;
            savedThis = this;
            return;
        }

        func.apply(this, arguments);

        isThrottled = true;

        setTimeout(function() {
            isThrottled = false;
            if (savedArgs) {
                wrapper.apply(savedThis, savedArgs);
                savedArgs = savedThis = null;
            }
        }, ms);
    }

    return wrapper;
}

export function remToPx(rem) {
    return parseFloat(rem) * parseFloat(getComputedStyle(document.documentElement).fontSize);
}

export function scrollToHorizontalCenter(parentBlock, childBlock) {
    const width = childBlock?.getBoundingClientRect()?.width;

    if (parentBlock && width) {
        parentBlock.scrollLeft = width / 2 - window.innerWidth / 2;
    }
}
/* eslint-enable */
