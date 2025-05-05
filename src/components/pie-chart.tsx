"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"

interface PieChartProps {
  percentage: number
}

export function PieChart({ percentage }: PieChartProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const size = Math.min(canvas.parentElement?.clientWidth || 300, 300)
    canvas.width = size
    canvas.height = size

    // Calculate center and radius
    const centerX = size / 2
    const centerY = size / 2
    const radius = size / 2 - 10

    // Clear canvas
    ctx.clearRect(0, 0, size, size)

    // Draw background circle (remaining percentage)
    ctx.beginPath()
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI)
    ctx.fillStyle = "#D1D5DB" // Light gray
    ctx.fill()

    // Draw percentage slice
    ctx.beginPath()
    ctx.moveTo(centerX, centerY)
    ctx.arc(centerX, centerY, radius, -0.5 * Math.PI, (percentage / 100) * 2 * Math.PI - 0.5 * Math.PI)
    ctx.closePath()
    ctx.fillStyle = "#4B5563" // Dark gray
    ctx.fill()

    // Draw inner circle (donut hole)
    ctx.beginPath()
    ctx.arc(centerX, centerY, radius * 0.6, 0, 2 * Math.PI)
    ctx.fillStyle = "white"
    ctx.fill()

    // Draw percentage text
    ctx.font = "bold 24px Arial"
    ctx.fillStyle = "#1F2937"
    ctx.textAlign = "center"
    ctx.textBaseline = "middle"
    ctx.fillText(`${percentage}%`, centerX, centerY)
  }, [percentage])

  return (
    <Card className="w-full shadow-md border-2 border-slate-200">
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold text-center mb-4">Interest Distribution</h3>
        <div className="flex justify-center">
          <canvas ref={canvasRef} className="max-w-full" />
        </div>
      </CardContent>
    </Card>
  )
}
