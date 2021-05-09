  import { ArcLayer } from '@deck.gl/layers';

  const vsDeclaration = `
  `

  const vsMain = `
  `

  const fsDeclaration = `
  uniform float time;
  `

  const fsColorFilter = `
  // float tripDuration = 10.0;
  // float dateDiff = 5.0;
  // float normalisedArch = fract(geometry.uv.x);

  // // Head of the trip animation curve
  // float rMax = smoothstep(0.0, tripDuration, dateDiff);

  // // Tail of the trip animation curve
  // float rMin = smoothstep(tripDuration, tripDuration + tripDuration, dateDiff);

  // float alpha = 0.0;
  // bool animationHasFinished = dateDiff > tripDuration;
  // if(!animationHasFinished)
  // {
  //   alpha = normalisedArch > rMax ? 0.0 : 1.0;
  // }
  // else
  // {
  //   alpha = normalisedArch > rMin ? 1.0 : 0.0;
  // }

  // if (alpha == 0.0) {
  //   discard;
  // }

  // color.a *= alpha;
  `

  //@ts-ignore
  class AnimatedArcLayer extends ArcLayer {
    getShaders() {
      const shaders = super.getShaders();
      shaders.inject = {
        'vs:#decl': vsDeclaration,
        'vs:#main-end': vsMain,
        'fs:#decl': fsDeclaration,
        'fs:DECKGL_FILTER_COLOR': fsColorFilter
      };
      return shaders;
    }

    initializeState(params : any) {
      console.log(params)
      super.initializeState(params);
    }

    draw(opts : any) {
      super.draw(opts);
      //@ts-ignore
      this.setNeedsRedraw();
    }
  }

  export { AnimatedArcLayer }