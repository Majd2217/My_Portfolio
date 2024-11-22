"use client"

import React, { useEffect, useRef, useState } from 'react'
import { Button } from "@/components/ui/button"

interface Ball {
  x: number
  y: number
  dx: number
  dy: number
  radius: number
}

const InteractiveSoccerField: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [score, setScore] = useState({ left: 0, right: 0 })
  const [gameStarted, setGameStarted] = useState(false)
  const ballRef = useRef<Ball>({
    x: 300,
    y: 200,
    dx: 2,
    dy: 0,
    radius: 10
  })
  const [celebration, setCelebration] = useState<string | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resetBall = () => {
      ballRef.current = {
        x: canvas.width / 2,
        y: canvas.height / 2,
        dx: Math.random() > 0.5 ? 2 : -2,
        dy: 0,
        radius: 10
      }
    }

    const drawField = () => {
      if (!ctx) return
      // Field
      ctx.fillStyle = '#4CAF50'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Center line
      ctx.strokeStyle = 'white'
      ctx.lineWidth = 2
      ctx.beginPath()
      ctx.moveTo(canvas.width / 2, 0)
      ctx.lineTo(canvas.width / 2, canvas.height)
      ctx.stroke()

      // Center circle
      ctx.beginPath()
      ctx.arc(canvas.width / 2, canvas.height / 2, 50, 0, Math.PI * 2)
      ctx.stroke()

      // Goals
      ctx.fillStyle = 'white'
      ctx.fillRect(0, canvas.height / 2 - 50, 10, 100)
      ctx.fillRect(canvas.width - 10, canvas.height / 2 - 50, 10, 100)
    }

    const drawBall = () => {
      if (!ctx) return
      ctx.fillStyle = 'white'
      ctx.beginPath()
      ctx.arc(ballRef.current.x, ballRef.current.y, ballRef.current.radius, 0, Math.PI * 2)
      ctx.fill()
    }

    const updateBall = () => {
      const ball = ballRef.current
      ball.x += ball.dx
      ball.y += ball.dy

      // Bounce off top and bottom
      if (ball.y + ball.radius > canvas.height || ball.y - ball.radius < 0) {
        ball.dy = -ball.dy
      }

      // Check for goals
      if (ball.x + ball.radius > canvas.width && ball.y > canvas.height / 2 - 50 && ball.y < canvas.height / 2 + 50) {
        setScore(prev => ({ ...prev, left: prev.left + 1 }))
        resetBall()
        setCelebration('GOAL! Left team scores!')
        setTimeout(() => setCelebration(null), 2000)
      } else if (ball.x - ball.radius < 0 && ball.y > canvas.height / 2 - 50 && ball.y < canvas.height / 2 + 50) {
        setScore(prev => ({ ...prev, right: prev.right + 1 }))
        resetBall()
        setCelebration('GOAL! Right team scores!')
        setTimeout(() => setCelebration(null), 2000)
      }

      // Bounce off sides
      if (ball.x + ball.radius > canvas.width || ball.x - ball.radius < 0) {
        ball.dx = -ball.dx
      }
    }

    let animationFrameId: number

    const animate = () => {
      if (!ctx) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      drawField()
      drawBall()
      if (gameStarted) {
        updateBall()
      }
      animationFrameId = requestAnimationFrame(animate)
    }

    canvas.width = 600
    canvas.height = 400

    resetBall()
    animate()

    canvas.addEventListener('mousemove', (e) => {
      const rect = canvas.getBoundingClientRect()
      const mouseY = e.clientY - rect.top
      ballRef.current.y = mouseY
    })

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [gameStarted])

  const handleStartPause = () => {
    setGameStarted(prev => !prev)
    if (gameStarted) {
      // Reset the ball and score when pausing
      setScore({ left: 0, right: 0 })
      if (canvasRef.current) {
        ballRef.current = {
          x: canvasRef.current.width / 2,
          y: canvasRef.current.height / 2,
          dx: Math.random() > 0.5 ? 2 : -2,
          dy: 0,
          radius: 10
        }
      }
    }
  }

  return (
    <div className="flex flex-col items-center">
      <canvas
        ref={canvasRef}
        className="border border-gray-300 rounded-lg shadow-lg"
        width={600}
        height={400}
      />
      <div className="mt-4 text-xl font-bold">
        Score: {score.left} - {score.right}
      </div>
      {celebration && (
        <div className="mt-2 text-lg font-bold text-green-600 animate-bounce">
          {celebration}
        </div>
      )}
      <Button 
        className="mt-4"
        onClick={handleStartPause}
      >
        {gameStarted ? 'Pause Game' : 'Start Game'}
      </Button>
      <div className="mt-4 text-sm text-white max-w-md text-center">
        <p>How to play: Move your mouse up and down to control the ball. Try to score in the opponent's goal!</p>
      </div>
    </div>
  )
}

export default InteractiveSoccerField

