import { quub, Ticker, cameras, MouseLooker } from 'quub'
import * as cubeRenderer from './cubeRenderer'
import * as screenRenderer from './screenRenderer'

const camera = new cameras.PerspectiveCamera()
const _mouseLooker = new MouseLooker({ rotationVector: camera.transform.rot })

// the cube will be centered at (0,0,0), so back the camera up a bit
camera.transform.pos[ 2 ] = 5

quub.init({
  canvas: document.getElementById('mainCanvas') as HTMLCanvasElement,
  camera: camera,
})

const ticker = new Ticker({
  onAnimationFrame() {
    quub.clear(0.1, 0.3, 0.5, 1)
    camera.calcViewProjectionMatrix()
    screenRenderer.render(ticker.tt)
    cubeRenderer.transform.rot[ 0 ] += ticker.dt * 0.001
    cubeRenderer.transform.rot[ 1 ] += ticker.dt * 0.0001
    cubeRenderer.transform.rot[ 2 ] += ticker.dt * 0.00001
    cubeRenderer.render()
  },
})
ticker.start()
