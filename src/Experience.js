import { Suspense } from 'react'
import { Html, OrbitControls } from '@react-three/drei'
import { Noise, Vignette, DepthOfField, Bloom, EffectComposer } from '@react-three/postprocessing'
import { BlendFunction } from 'postprocessing'
import { Perf } from 'r3f-perf'
import Scene from './Scene'

export default function Experience()
{
    return <>

        {/* <Perf position="top-left" /> */}

        <OrbitControls makeDefault minDistance={ 1 } maxDistance={ 15 }  />

        <color args={ [ "#3e3e3e" ] } attach="background" />
        
        <EffectComposer>

            <Noise
                premultiply
                blendFunction={ BlendFunction.SOFT_LIGHT }
            />

            <Vignette
                offset={0.3 }
                darkness={ 1.1 }
                blendFunction={ BlendFunction.NORMAL }
            />

            {/* <DepthOfField
                focusDistance={ 0.01 }
                focalLength={ 0.025 }
                bokehScale={ 6 }
            /> */}

            <Bloom
                mipmapBlur
                // make everything bloom, control intensity at color
                intensity={ 0.1 }
                luminanceThreshold={ 0 }
            />
        </EffectComposer>

        <Suspense fallback={<Html center>Loading.</Html>}>
            <Scene />
        </Suspense>


    </>
}