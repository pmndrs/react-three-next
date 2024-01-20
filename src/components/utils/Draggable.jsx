import React, { useState, useRef, useEffect } from "react";
import * as THREE from "three";
import { useLoader, useThree } from "@react-three/fiber";
import { useRouter } from "next/navigation";
import { DragControls } from "../CustomModule/DragControls";
import { useGesture } from "@use-gesture/react";
import { db } from "../model/db";

export const Draggable = ({ children }) => {
    const ref = useRef();
    const { camera, gl, scene } = useThree();
    let initialX = useRef(0);
    let initialY = useRef(0);
    let initialZ = useRef(0);
    const CLICK_THRESHOLD = 0.05;
    const router = useRouter();

    useEffect(() => {
        const dragControls = new DragControls(
            ref.current?.children,
            camera,
            gl.domElement,
        );
        dragControls.transformGroup = true;

        const orbitControls = scene?.orbitControls;
        orbitControls.addEventListener("change", () => {
            console.log(scene?.camera);
        });

        dragControls.addEventListener("dragstart", (event) => {
            console.log("drag start");
            orbitControls.enabled = false;
            initialX.current = event.object.position.x;
            initialY.current = event.object.position.y;
            initialZ.current = event.object.position.z;
            console.log(initialX.current, initialY.current, initialZ.current);
        });
        dragControls.addEventListener("drag", (event) => {
            // console.log('drag');
            event.object.position.z = 0; // This will prevent moving z axis, but will be on 0 line. change this to your object position of z axis.
        });
        dragControls.addEventListener("dragend", (event) => {
            console.log("drag end");
            console.log("event: ", event);
            orbitControls.enabled = true;
            const id = event.object.userData.customId;
            const posX = event.object.position.x;
            const posY = event.object.position.y;
            const position = "" + posX + "," + posY;
            const scale = event.object.scale.x; // Assuming uniform scaling
            db.contents.update(id, {
                position: position,
                scale: scale,
            });

            const movedX = event.object.position.x;
            const movedY = event.object.position.y;
            const movedZ = event.object.position.z;

            const movedDist = Math.sqrt(
                Math.pow(movedX - initialX.current, 2) +
                Math.pow(movedY - initialY.current, 2) +
                Math.pow(movedZ - initialZ.current, 2),
            );

            if (movedDist < CLICK_THRESHOLD) {
                // Perform click action here
                router.push(`/item?id=${id}`);
            } else {
                // Perform drag action here
            }
        });
    }, [camera, gl.domElement, scene]);

    return <group ref={ref}>{children}</group>;
};