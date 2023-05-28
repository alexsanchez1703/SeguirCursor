import { useEffect, useState } from 'react'

const SeguirPuntero = () => {
  const [enable, setEnable] = useState(false)
  const [position, setPosition] = useState({x:0, y:0})

  useEffect(()=>{
    console.log("efecto", {enable})

    const handleMove = (e) => {
      const {clientX, clientY} = e
      console.log('handleMove', {clientX, clientY})
      setPosition({x:clientX, y: clientY})
    }
    if(enable) {
      window.addEventListener('pointermove', handleMove)
    }
    return () => {
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enable])
  
  useEffect(() => {
    document.body.classList.toggle('no-cursor', enable)
    return () => {
      document.body.classList.remove('no-cursor')
    }
  }, [enable])

  return (
    <>
    <div style={{
      position: 'absolute',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      border: '1px solid #fff',
      borderRadius: '50%',
      opacity: 0.8,
      pointerEvents: 'none',
      left: -25,
      top: -25,
      width: 50,
      height: 50,
      transform: `translate(${position.x}px, ${position.y}px)`
    }}
    />
   <button onClick={() => setEnable(!enable)}>{enable ? "Desactivar" : "Activar"} seguir puntero</button>
    </>
  )
}

function App() {
  return (
    <main>
      <SeguirPuntero />
    </main>
  )
}

export default App
