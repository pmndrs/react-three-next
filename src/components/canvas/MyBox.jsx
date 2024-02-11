import React from "react";
import { OrbitControls, Stats, RoundedBox } from "@react-three/drei";

const MyBox = ({ position, rotation, scale, color }) => {
    return (
        <>
            <RoundedBox
                args={[3, 3, 0.25]}
                position={position}
                rotation={rotation}
                scale={scale}
                radius={0.1}
            >
                <meshLambertMaterial attach="material" color={color} />
            </RoundedBox>
            <OrbitControls />
        </>
    );
};
export default MyBox;
