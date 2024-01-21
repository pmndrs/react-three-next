import React, { useState, useRef, useEffect } from 'react';
import { Box } from '@react-three/drei';

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

const Room = ({ onRoomClick, position = [0, 0, 0], id, width = 10, length = 10, height = 5, wallColor = 'gray', floorColor = 'brown' }) => {
    const dimensions = { width, length, height };
    const ref = useRef();

    useEffect(() => {
        if (ref.current) {
            ref.current.position.set(...position);
        }
    }, [position]);

    const handleClick = () => {
        onRoomClick([position[0], 0.5, position[2]])
    }

    return (
        <group ref={ref} name={id} onClick={handleClick}>
            <Wall position={[-dimensions.width / 2, dimensions.height / 2, 0]} dimensions={[0.1, dimensions.height, dimensions.length]} color={wallColor} />
            <Wall position={[dimensions.width / 2, dimensions.height / 2, 0]} dimensions={[0.1, dimensions.height, dimensions.length]} color={wallColor} />
            <Wall position={[0, dimensions.height / 2, -dimensions.length / 2]} dimensions={[dimensions.width, dimensions.height, 0.1]} color={wallColor} />
            <Wall position={[0, dimensions.height / 2, dimensions.length / 2]} dimensions={[dimensions.width, dimensions.height, 0.1]} color={wallColor} />
            <Floor position={[0, 0, 0]} dimensions={[dimensions.width, 0.1, dimensions.length]} color={floorColor} />
        </group>
    );
};

export default Room;