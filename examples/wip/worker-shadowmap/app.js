import {OffscreenAnimationLoop} from 'luma.gl';
import createWorker from 'webworkify-webpack';

// Required by webworkify-webpack :(
const worker = createWorker(require.resolve('./worker'));

const animationLoop = new OffscreenAnimationLoop({worker});

export default animationLoop;

/* expose on Window for standalone example */
/* global window */
if (typeof window !== 'undefined') {
  window.animationLoop = animationLoop;
}

