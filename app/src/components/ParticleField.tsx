import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function ParticleField() {
  const containerRef = useRef<HTMLDivElement>(null)
  const cleanupRef = useRef<(() => void) | null>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Prevent double init
    if (cleanupRef.current) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    camera.position.z = 12

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.domElement.style.width = '100%'
    renderer.domElement.style.height = '100%'
    renderer.domElement.style.display = 'block'
    container.appendChild(renderer.domElement)

    const isMobile = window.innerWidth < 768
    const particleCount = isMobile ? 1500 : 3000
    const radius = 5

    const geometry = new THREE.BufferGeometry()
    const positions = new Float32Array(particleCount * 3)
    const colors = new Float32Array(particleCount * 3)

    const color1 = new THREE.Color('#2563eb')
    const color2 = new THREE.Color('#06b6d4')
    const color3 = new THREE.Color('#ffffff')

    for (let i = 0; i < particleCount; i++) {
      const phi = Math.acos(-1 + (2 * i) / particleCount)
      const theta = Math.PI * (1 + Math.sqrt(5)) * i
      const r = radius * (0.8 + Math.random() * 0.4)

      positions[i * 3] = r * Math.cos(theta) * Math.sin(phi)
      positions[i * 3 + 1] = r * Math.sin(theta) * Math.sin(phi)
      positions[i * 3 + 2] = r * Math.cos(phi)

      const colorMix = Math.random()
      let finalColor: THREE.Color
      if (colorMix < 0.5) {
        finalColor = color1.clone().lerp(color2, colorMix * 2)
      } else {
        finalColor = color2.clone().lerp(color3, (colorMix - 0.5) * 2)
      }
      colors[i * 3] = finalColor.r
      colors[i * 3 + 1] = finalColor.g
      colors[i * 3 + 2] = finalColor.b
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))

    const material = new THREE.PointsMaterial({
      size: 0.05,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    })

    const particles = new THREE.Points(geometry, material)
    scene.add(particles)

    const mouse = { x: 0, y: 0 }
    const targetMouse = { x: 0, y: 0 }

    const onMouseMove = (e: MouseEvent) => {
      targetMouse.x = (e.clientX / window.innerWidth) * 2 - 1
      targetMouse.y = -(e.clientY / window.innerHeight) * 2 + 1
    }

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('resize', onResize)

    let animId: number

    const animate = () => {
      animId = requestAnimationFrame(animate)
      particles.rotation.y += 0.001
      particles.rotation.x += 0.0005

      mouse.x += (targetMouse.x - mouse.x) * 0.05
      mouse.y += (targetMouse.y - mouse.y) * 0.05

      particles.position.x = mouse.x * 0.5
      particles.position.y = mouse.y * 0.5

      renderer.render(scene, camera)
    }

    animate()

    cleanupRef.current = () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('resize', onResize)
      geometry.dispose()
      material.dispose()
      renderer.dispose()
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }
    }

    return () => {
      if (cleanupRef.current) {
        cleanupRef.current()
        cleanupRef.current = null
      }
    }
  }, [])

  return (
    <div
      ref={containerRef}
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'auto',
      }}
    />
  )
}
