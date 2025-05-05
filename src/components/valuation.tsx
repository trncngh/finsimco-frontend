"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

interface ValuationProps {
  value: number
}

export function Valuation({ value }: ValuationProps) {
  // Format the value with commas and round to nearest million
  const formattedValue = value.toLocaleString("en-US", {
    maximumFractionDigits: 0,
  })

  return (
    <Card className="w-full shadow-md border-2 border-slate-200">
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold text-center mb-2">Valuation</h3>
        <motion.div
          key={value}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="text-3xl md:text-4xl font-bold text-center text-slate-800"
        >
          ${formattedValue} million
        </motion.div>
      </CardContent>
    </Card>
  )
}
