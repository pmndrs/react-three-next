'use client'

import { useGLTF, Line, useCursor, MeshDistortMaterial } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useMemo, useRef, useState, useEffect, useContext } from 'react'
import { useRouter } from 'next/navigation'
import { RigidBody, BoxCollider } from "@react-three/rapier";
import { BoxGeometry, MeshStandardMaterial } from 'three';
import { Vector3 } from 'three';
import { Center } from '@react-three/drei';
import ButtonContext from '../dom/ButtonContext'

// Room
export const Room = ({ ...props }) => {
    return (
        <>
            < Center>
                {/* Floor */}
                <Floor />
            </Center>
        </>
    );
};

export const Floor = ({ ...props }) => {
    const [lines, setLines] = useState([]);

    const floorMaterial = new MeshStandardMaterial({ color: "#F7FFF7" });
    const floorGeometry = new BoxGeometry(30, 50, 0.3); // Reduce the size of the room

    // Assuming the floor is centered at [0, 0, 0] and rotated to lie flat
    const originPosition = [0, 0, 0];
    const floorOffset = [15, 0, 25];
    const floorPosition = originPosition.map((value, index) => value + floorOffset[index]);
    const floorRotation = [Math.PI / 2, 0, 0]; // Rotate to lie flat

    useEffect(() => {
        console.log(lines);
    }, [lines]);

    return (
        <>
            {/* Floor */}
            <mesh geometry={floorGeometry} material={floorMaterial} position={floorPosition} rotation={[Math.PI / 2, 0, 0]} />
            {/* Grid */}
            <Grid setLines={setLines} position={originPosition} rotation={floorRotation} />
        </>
    );
}

export const GridLine = ({ start, end, rotation }) => {
    const [enabled, setEnabled] = useState(false);
    const { isButtonOn, toggleButton } = useContext(ButtonContext);
    const color = enabled ? "#ffffff" : "#A3A3A3";
    const points = [new Vector3(...start), new Vector3(...end)];

    const handleClick = () => {
        setEnabled(!enabled); // Toggle the state
    };

    // Create a larger, invisible box around the line to serve as a click target
    const clickTargetGeometry = new THREE.CylinderGeometry(0.2, 0.2, new Vector3(...start).distanceTo(new Vector3(...end)), 32);
    const clickTargetMaterial = new THREE.MeshBasicMaterial({ visible: false });

    return (
        <>
            {isButtonOn && (
                <>
                    <Line
                        points={points}
                        color={color}
                    />
                    <mesh
                        geometry={clickTargetGeometry}
                        material={clickTargetMaterial}
                        position={[(start[0] + end[0]) / 2, (start[1] + end[1]) / 2, (start[2] + end[2]) / 2]}
                        rotation={rotation}
                        onClick={handleClick} // Attach the click handler to the invisible mesh
                    />
                </>
            )}
            <Wall
                start={start}
                end={end}
                enabled={enabled}
            />
        </>
    );
};


export const Grid = ({ setLines, position, rotation, ...props }) => {
    const yOffset = 0.2; // Offset along the y-axis

    const lines = useMemo(() => {
        const newLines = [];
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                const enabled = Math.random() > 0.5; // Randomly enable or disable each line

                // Vertical line
                newLines.push(
                    <GridLine
                        key={`v${i}-${j}`}
                        start={[i * 3, yOffset, j * 5]}
                        end={[(i + 1) * 3, yOffset, j * 5]}
                        rotation={[0, 0, Math.PI / 2]}
                        enabled={enabled}
                    />
                );

                // Horizontal line
                newLines.push(
                    <GridLine
                        key={`h${i}-${j}`}
                        start={[i * 3, yOffset, j * 5]}
                        end={[i * 3, yOffset, (j + 1) * 5]}
                        rotation={[Math.PI / 2, 0, 0]}
                        enabled={enabled}
                    />
                );
            }
        }
        return newLines;
    }, []); // Empty dependency array means the lines array will only be created once


    // Update the lines state in the Room component
    useEffect(() => {
        setLines(lines);
    }, [lines, setLines]);

    return (
        <group position={position}>
            {lines}
        </group>
    );
};

export const Wall = ({ start, end, enabled }) => {
    // Only render the wall if the grid line is enabled
    if (!enabled) {
        return null;
    }

    const wallHeight = 3;

    // Calculate the position and size of the wall
    const position = [(start[0] + end[0]) / 2, (start[1] + end[1]) / 2 + wallHeight / 2, (start[2] + end[2]) / 2];
    const size = [Math.abs(end[0] - start[0]), wallHeight, Math.abs(end[2] - start[2])];

    // Create the wall geometry and material
    const wallGeometry = new THREE.BoxGeometry(...size);
    const wallMaterial = new THREE.MeshStandardMaterial({ color: "#F7FFF7" });

    return (
        <mesh
            geometry={wallGeometry}
            material={wallMaterial}
            position={position}
        />
    );
};