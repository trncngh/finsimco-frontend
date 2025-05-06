'use client'

import { Card, CardContent } from '@/components/ui/card'
import { VALUATION_TEXT } from '@/constant/text'
import { motion } from 'framer-motion'

interface ValuationProps {
  value: number
}

export function Valuation({ value }: ValuationProps) {
  // Format the value with commas and round to nearest million
  const formattedValue = value.toLocaleString('en-US', {
    maximumFractionDigits: 0,
  })

  return (
    <Card className="w-full border-2 border-slate-200 shadow-md">
      <CardContent className="p-6">
        <h3 className="mb-2 text-center text-xl font-semibold">
          {VALUATION_TEXT.title}
        </h3>
        <motion.div
          key={value}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 100 }}
          className="text-center text-3xl font-bold text-slate-800 md:text-4xl"
        >
          {formattedValue === 'NaN'
            ? VALUATION_TEXT.content
            : `${formattedValue} million`}
        </motion.div>
      </CardContent>
    </Card>
  )
}
