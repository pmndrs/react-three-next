import React, { useState, useRef, useEffect } from 'react';
import { Box } from '@react-three/drei';
import { useThree } from '@react-three/fiber';

const Wall = ({ position, dimensions, color }) => (
    <Box position={position} args={dimensions}>
        <meshStandardMaterial attach="material" color={color} />
    </Box>
);

const Floor = ({ position, dimensions, color }) => (
    <Box position={position} args={dimensions}>
        <meshStandardMaterial attach="material" color={color} />
    </Box>
);

const Room = ({ position = [0, 0, 0], id, width = 10, length = 10, height = 5, wallColor = 'gray', floorColor = 'brown', controlsRef }) => {
    const dimensions = { width, length, height };
    const ref = useRef();

    useEffect(() => {
        if (ref.current) {
            ref.current.position.set(...position);
        }
    }, [position]);

    const moveOrbitTarget = () => {
        console.log("Clicked room position:", position);
        if (controlsRef.current) {
            // OrbitControlsのターゲットをクリックされた部屋の中心位置に設定
            controlsRef.current.target.set(position[0], position[1] + dimensions.height * 2 / 4, position[2]);
            controlsRef.current.update(); 

            // Move the camera to the target position
            controlsRef.current.object.position.set(position[0], 5, position[2]);
            controlsRef.current.object.updateProjectionMatrix();

            controlsRef.current.saveState();
            console.log("OrbitControls", controlsRef.current);
        }
    };

    return (
        <group ref={ref} name={id} onClick={moveOrbitTarget}>
            <Wall position={[-dimensions.width / 2, dimensions.height / 2, 0]} dimensions={[0.1, dimensions.height, dimensions.length]} color={wallColor} />
            <Wall position={[dimensions.width / 2, dimensions.height / 2, 0]} dimensions={[0.1, dimensions.height, dimensions.length]} color={wallColor} />
            <Wall position={[0, dimensions.height / 2, -dimensions.length / 2]} dimensions={[dimensions.width, dimensions.height, 0.1]} color={wallColor} />
            <Wall position={[0, dimensions.height / 2, dimensions.length / 2]} dimensions={[dimensions.width, dimensions.height, 0.1]} color={wallColor} />
            <Floor position={[0, 0, 0]} dimensions={[dimensions.width, 0.1, dimensions.length]} color={floorColor} />
        </group>
    );
};

export default Room;