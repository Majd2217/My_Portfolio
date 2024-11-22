"use client"

import React, { useEffect, useRef } from 'react'

interface Snowflake {
  x: number
  y: number
  size: number
  speedY: number
  speedX: number
  opacity: number
}

const MovingBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const snowflakes: Snowflake[] = []
    const snowflakeCount = 100

    const createSnowflake = (): Snowflake => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 3 + 1,
      speedY: Math.random() * 1 + 0.5,
      speedX: Math.random() * 0.5 - 0.25,
      opacity: Math.random() * 0.5 + 0.5
    })

    for (let i = 0; i < snowflakeCount; i++) {
      snowflakes.push(createSnowflake())
    }

    const drawSnowflake = (snowflake: Snowflake) => {
      if (!ctx) return
      ctx.beginPath()
      ctx.arc(snowflake.x, snowflake.y, snowflake.size, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(255, 255, 255, ${snowflake.opacity})`
      ctx.fill()
    }

    const updateSnowflake = (snowflake: Snowflake) => {
      snowflake.y += snowflake.speedY
      snowflake.x += snowflake.speedX

      if (snowflake.y > canvas.height) {
        snowflake.y = 0
        snowflake.x = Math.random() * canvas.width
      }

      if (snowflake.x > canvas.width) {
        snowflake.x = 0
      } else if (snowflake.x < 0) {
        snowflake.x = canvas.width
      }
    }

    const animate = () => {
      if (!ctx) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      snowflakes.forEach((snowflake) => {
        drawSnowflake(snowflake)
        updateSnowflake(snowflake)
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleMouseMove = (event: MouseEvent) => {
      const mouseX = event.clientX
      const mouseY = event.clientY

      snowflakes.forEach((snowflake) => {
        const dx = mouseX - snowflake.x
        const dy = mouseY - snowflake.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < 100) {
          const angle = Math.atan2(dy, dx)
          const force = (100 - distance) / 100
          snowflake.x -= Math.cos(angle) * force * 2
          snowflake.y -= Math.sin(angle) * force * 2
        }
      })
    }

    window.addEventListener('mousemove', handleMouseMove)

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
    />
  )
}

export default MovingBackground

