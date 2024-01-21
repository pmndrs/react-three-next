'use client'

import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useMemo, useRef, useState } from 'react'
import { Line, useCursor, MeshDistortMaterial, Resize } from '@react-three/drei'
import { useRouter } from 'next/navigation'
import { RigidBody } from "@react-three/rapier";

export function Model(props) {
    const { scene } = useGLTF('/models/house.glb')

    return (
        <group>
            <primitive object={scene} {...props} />
        </group>
    )
}