import { useRef, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { useMatcapTexture, Center, Text3D } from '@react-three/drei'
import * as THREE from 'three'

const torusGeometry = new THREE.TorusGeometry(1, 0.6, 16, 32)
const material = new THREE.MeshMatcapMaterial()

export default function Scene()
{
    /** Animation: Method 2 */
    const donuts = useRef([])

    /** Set Matcap from online library */
    const [ matcapTexture ] = useMatcapTexture('2E2E2D_7D7C76_A3A39F_949C94', 256)

    useEffect(() => {

        matcapTexture.encoding = THREE.sRGBEncoding
        matcapTexture.needsUpdate = true

        material.matcap = matcapTexture
        material.needsUpdate = true
    })

    useFrame((state, delta) => {

        for(const donut of donuts.current) {
            donut.rotation.y += delta * 0.5
        }
    })
    
    return <>
        <Center>
            <Text3D
                font="./fonts/helvetiker_regular.typeface.json"
                size={ 0.75 }
                height={ 0.2 }
                curveSegments={ 12 }
                bevelEnabled
                bevelThickness={ 0.02 }
                bevelOffset={ 0 }
                bevelSegments={ 5 }
            >
                Amira Deuraseh
                <meshBasicMaterial
                    color={ [ 1 * 10, 1 * 10, 1 * 10 ] }
                    toneMapped={ false }
                />

            </Text3D>
        </Center>

        { [...Array(300)].map((value, index) =>
            <mesh
                ref={ (element) => { donuts.current[index] = element } }
                key={ index }
                geometry= { torusGeometry }
                material={ material }
                position={ [
                    (Math.random() - 0.5) * 20,
                    (Math.random() - 0.5) * 20,
                    (Math.random() - 0.5) * 20,
                ] }
                scale= { 0.2 + Math.random() * 0.2 }
                rotation={ [
                    Math.random() * Math.PI,
                    Math.random() * Math.PI,
                    0
                ] }
            />
        ) }
    </>
}