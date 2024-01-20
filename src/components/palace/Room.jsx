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

const Room = ({ position = [0, 0, 0], id, width = 10, length = 10, height = 5, wallColor = 'gray', floorColor = 'brown' }) => {
    const dimensions = { width, length, height };
    const ref = useRef();

    useEffect(() => {
        if (ref.current) {
            ref.current.position.set(...position);
        }
    }, [position]);

    const { camera } = useThree();

    const handleClick = () => {
        console.log(`Clicked component id: ${id}`);
        console.log(`Center position: ${position}`);
    
        // Move the camera to the room's position
        camera.position.x = position[0] - 1;
        camera.position.y = position[1];
        camera.position.z = position[2] - 1;

        console.log(`Camera position: ${camera}`);
    };
    return (
        <group ref={ref} onClick={handleClick} name={id}>
            <Wall position={[-dimensions.width / 2, dimensions.height / 2, 0]} dimensions={[0.1, dimensions.height, dimensions.length]} color={wallColor} />
            <Wall position={[dimensions.width / 2, dimensions.height / 2, 0]} dimensions={[0.1, dimensions.height, dimensions.length]} color={wallColor} />
            <Wall position={[0, dimensions.height / 2, -dimensions.length / 2]} dimensions={[dimensions.width, dimensions.height, 0.1]} color={wallColor} />
            <Wall position={[0, dimensions.height / 2, dimensions.length / 2]} dimensions={[dimensions.width, dimensions.height, 0.1]} color={wallColor} />
            <Floor position={[0, 0, 0]} dimensions={[dimensions.width, 0.1, dimensions.length]} color={floorColor} />
        </group>
    );
};

export default Room;