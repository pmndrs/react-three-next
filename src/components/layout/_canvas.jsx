import { Canvas } from '@react-three/fiber'
import useStore from '@/helpers/store'
import { Preload } from '@react-three/drei'
import { A11yUserPreferences } from '@react-three/a11y'

const LCanvas = ({ children }) => {
  const dom = useStore((state) => state.dom)

  return (
    <Canvas
      style={{
        position: 'absolute',
        top: 0,
      }}
      onCreated={(state) => state.events.connect(dom.current)}
    >
      <A11yUserPreferences>
        <Preload all />
        {children}
      </A11yUserPreferences>
    </Canvas>
  )
}

export default LCanvas
