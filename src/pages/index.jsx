import dynamic from 'next/dynamic'
import Instructions from '@/components/dom/Instructions'

// Dynamic import is used to prevent a payload when the website starts, that includes threejs, r3f etc..
// WARNING ! errors might get obfuscated by using dynamic import.
// If something goes wrong go back to a static import to show the error.
// https://github.com/pmndrs/react-three-next/issues/49
const Logo = dynamic(() => import('@/components/canvas/Logo'), { ssr: false })

// dom components go here
export default function Page(props) {
  return (
    <Instructions>
      This is a minimal starter for Nextjs + React-three-fiber and Threejs. Click on the atoms nucleus to navigate to
      the /box page. OrbitControls are enabled by default.
    </Instructions>
  )
}

// Canvas components go here
// It will receive same props as Page component (from getStaticProps, etc.)
Page.canvas = (props) => <Logo scale={0.5} route='/box' />

export async function getStaticProps() {
  return { props: { title: 'Index' } }
}
