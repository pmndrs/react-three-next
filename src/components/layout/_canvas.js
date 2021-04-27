import { Canvas } from '@react-three/fiber'
import useStore from '@/helpers/store'
import { Preload } from '@react-three/drei'
import { A11yUserPreferences } from '@react-three/a11y'

const LCanvas = ({ children }) => {
  return (
    <Canvas
      style={{
        position: 'absolute',
        top: 0,
      }}
      onCreated={({ events }) => {
        useStore.setState({ events })
      }}
    >
      <A11yUserPreferences>
        <Preload all />
        {children}
      </A11yUserPreferences>
    </Canvas>
  )
}

export default LCanvas
