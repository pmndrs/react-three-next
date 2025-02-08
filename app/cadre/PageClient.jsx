"use client"

import React, { useRef, Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

// import CadreSeul from '@/components/CadreSeul';
import CadreMixte from '@latelier22/v8cadrebois/dist/components/CadreMixte'

export default function PageClient() {
    const [frameColor, setFrameColor] = useState('#FFFF00');
    const [largeurCadre, setLargeurCadre] = useState(22.3);
    const [hauteurCadre, setHauteurCadre] = useState(22.3);
    const [largeurFeuillure, setLargeurFeuillure] = useState(1);
    const [hauteurFeuillure, setHauteurFeuillure] = useState(1.5);
    const [largeurBaguette, setLargeurBaguette] = useState(2);
    const [hauteurBaguette, setHauteurBaguette] = useState(2);
    const [baguetteSeule, SetBaguetteSeule] = useState(false);
    const [opacity, setOpacity] = useState(0.5)



    return (
        <>
            <div className="container">
                <div className="espace">
                    <Canvas
                        className="h-screen"
                        frameloop="always" shadows dpr={[1, 2]} camera={{ position: [0, 30, -5], fov: 85 }}>
                        <color attach="background" args={['#EFCDAB']} />
                        <ambientLight intensity={3} />
                        <directionalLight intensity={2}
                            castShadow
                            position={[10, 10, 5]}
                            shadow-mapSize-width={1024}
                            shadow-mapSize-height={1024}
                            shadow-camera-far={50}
                            shadow-camera-left={-10}
                            shadow-camera-right={10}
                            shadow-camera-top={10}
                            shadow-camera-bottom={-10}
                        />
                        <Suspense fallback={null}>
                            <CadreMixte
                                castShadow
                                position={[0, -2.5, 0]}
                                frameColor={frameColor}
                                opacity={opacity}
                                CadreExtWidth={largeurCadre}
                                CadreExtHeight={hauteurCadre}
                                BaguetteWidth={largeurBaguette}
                                BaguetteHeight={hauteurBaguette}
                                RabateHeight={hauteurFeuillure}
                                RabateWidth={largeurFeuillure}
                                BaguetteSeule={baguetteSeule}
                            />
                        </Suspense>
                        <OrbitControls />
                    </Canvas>
                    <label>
                        Couleur Cadre
                        <input type="color" value={frameColor} onChange={(e) => setFrameColor(e.target.value)} />
                    </label>
                </div>
            </div>
        </>
    );
}
