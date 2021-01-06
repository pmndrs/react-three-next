import { useFrame } from 'react-three-fiber'
import { useMemo, useRef } from 'react'
import { Vector3 } from 'three/src/math/Vector3'

const useAnimateAlongCurve = ({
  lookAhead = 50,
  loopTime = 20000,
  keepLevel = false,
} = {}) => {
  const position = useMemo(() => new Vector3(), [])
  const direction = useMemo(() => new Vector3(), [])
  const lookAt = useMemo(() => new Vector3(), [])
  const curveRef = useRef()
  const objectRef = useRef()

  useFrame(() => {
    const curve = curveRef.current
    const object = objectRef.current
    if (!object || !curve || curve.getLength() === 0) {
      return
    }
    const time = Date.now()
    const t = (time % loopTime) / loopTime

    curve.getPointAt(t, position)
    curve.getTangentAt(t, direction)
    object.position.copy(position)
    curve.getPointAt((t + lookAhead / curve.getLength()) % 1, lookAt)

    if (keepLevel) {
      lookAt.y = object.position.y
    }

    object.matrix.lookAt(object.position, lookAt, object.up)
    object.quaternion.setFromRotationMatrix(object.matrix)
  })

  return { objectRef, curveRef }
}

export default useAnimateAlongCurve
