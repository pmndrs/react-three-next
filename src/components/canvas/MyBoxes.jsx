
import React from "react";
import MyBox from "./MyBox";

const MyBoxes = ({ position, rotation, scale, color }) => {
    return (
        <>
            <pointLight position={[5, 5, 5]} />

            <MyBox position={[0, 0, 0]} color={"red"} />
            <MyBox
                rotation={[0, Math.PI / 2, Math.PI / 2]}
                position={[7, 0, 0]}
                scale={[5, 5, 0.5]}
            />
            <MyBox
                rotation={[0, Math.PI / 2, Math.PI / 2]}
                position={[-7, 0, 0]}
                scale={[5, 5, 0.5]}
            />
            <MyBox
                rotation={[Math.PI / 2, 0, 0]}
                position={[0, -7, 0]}
                scale={[5, 5, 0.5]}
            />
            <MyBox rotation={[0, 0, 0]} position={[0, 0, -7]} scale={[5, 5, 0.5]} />

            <MyBox
                rotation={[Math.PI / 2, 0, 0]}
                position={[0, 7, 0]}
                scale={[5, 5, 0.5]}
            />

        </>
    );
};
export default MyBoxes;




