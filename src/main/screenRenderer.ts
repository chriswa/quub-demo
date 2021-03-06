import * as twgl from 'twgl.js'
import { quub } from 'quub'

const vertexShaderSource = `
  attribute vec4 a_position;
  attribute vec2 a_texcoord;
  varying vec2 v_texcoord;
  void main() {
    gl_Position = a_position;
    v_texcoord = a_texcoord;
  }
`

const fragmentShaderSource = `
  precision mediump float;

  uniform float u_time;
  varying vec2 v_texcoord;

  const float PI = 3.14159;
  const float scale = 10.0;

  // sample shader code from https://www.bidouille.org/prog/plasma

  void main() {
    float t = mod(u_time / 1000.0, PI * 12.0);
    float v = 0.0;
    vec2 c = v_texcoord * scale - scale/2.0;
    v += sin((c.x+t));
    v += sin((c.y+t)/2.0);
    v += sin((c.x+c.y+t)/2.0);
    c += scale/2.0 * vec2(sin(t/3.0), cos(t/2.0));
    v += sin(sqrt(c.x*c.x+c.y*c.y+1.0)+t);
    v = v/2.0;
    vec3 col = vec3(0.0, sin(PI*v) * 0.2, sin(PI*v) * 0.3);
    gl_FragColor = vec4(col, 1);
  }
`

export let programInfo: twgl.ProgramInfo | undefined = undefined
export let bufferInfo: twgl.BufferInfo | undefined = undefined
export const texture: WebGLTexture | undefined = undefined

quub.onReady((gl) => {
  programInfo = twgl.createProgramInfo(gl, [ vertexShaderSource, fragmentShaderSource ])

  const arrays = {
    a_position: [ -1, -1, 0, 1, -1, 0, 1, 1, 0, -1, 1, 0 ],
    a_texcoord: [ 0, 0, 1, 0, 1, 1, 0, 1 ],
    indices: [ 0, 1, 2, 0, 2, 3 ],
  }
  bufferInfo = twgl.createBufferInfoFromArrays(gl, arrays)
})

export function render(tt: number) {
  quub.gl.useProgram(programInfo!.program)
  const uniforms = {
    u_time: tt,
  }
  twgl.setUniforms(programInfo!, uniforms)
  twgl.setBuffersAndAttributes(quub.gl, programInfo!, bufferInfo!)
  quub.gl.depthMask(false)
  quub.gl.drawElements(quub.gl.TRIANGLES, bufferInfo!.numElements, quub.gl.UNSIGNED_SHORT, 0)
  quub.gl.depthMask(true)
}
