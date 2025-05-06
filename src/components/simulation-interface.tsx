'use client'

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { INSTRUCTION_TEXT } from '@/constant/text'
import { AlertCircle } from 'lucide-react'
import { useEffect, useState } from 'react'
import { FirstTimeGuidance } from './first-time-guidance'
import { InputFields } from './input-fields'
import { Modal } from './mocule/modal'
import { Timer } from './organism/timer'
import { PieChart } from './pie-chart'
import { Sidebar } from './sidebar'
import { Valuation } from './valuation'

interface SimulationInterfaceProps {
  team: 'team1' | 'team2'
}

/**
 * SimulationInterface is the main component of the business negotiation simulation.
 * It renders a sidebar with links to instruction videos and text, a timer, a user profile,
 * and a form with input fields, toggle buttons, and a submit button.
 * The form data is stored in the component's state and is updated when the user changes
 * the input fields or toggle buttons.
 * The component also renders a valuation component that displays the calculated valuation
 * based on the form data, and a pie chart component that displays the interest distribution
 * based on the form data.
 * The component also renders modals for the instruction videos and text.
 */
export default function SimulationInterface({
  team,
}: SimulationInterfaceProps) {
  const [showVideoModal, setShowVideoModal] = useState(false)
  const [showTextModal, setShowTextModal] = useState(false)
  const [showTimeAlert, setShowTimeAlert] = useState(false)
  const [formData, setFormData] = useState({
    ebitda: 10,
    interestRate: 20,
    multiple: 10,
    factorScore: 2,
    companyName: 'ABC Corp.',
    description: "This is the company's description. This company is #1!",
  })

  const [toggleStates, setToggleStates] = useState({
    ebitda: 'TBD',
    interestRate: 'TBD',
    multiple: 'TBD',
    factorScore: 'TBD',
    companyName: 'TBD',
    description: 'TBD',
  })

  const [valuation, setValuation] = useState(0)
  const [pieChartData, setPieChartData] = useState(20)

  // Calculate valuation whenever relevant form data changes
  useEffect(() => {
    const calculatedValuation =
      formData.ebitda * formData.multiple * formData.factorScore
    setValuation(calculatedValuation)
    setPieChartData(formData.interestRate)
  }, [formData])

  // Handle form data changes
  const handleInputChange = (field: string, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  // Handle toggle changes
  const handleToggleChange = (field: string, value: 'TBD' | 'OK') => {
    setToggleStates((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  // Handle form submission
  const handleSubmit = () => {
    console.log('Form submitted:', formData, toggleStates)
    // Here you would typically send the data to a server
    // or trigger the next step in the simulation
  }

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar
        onVideoClick={() => setShowVideoModal(true)}
        onTextClick={() => setShowTextModal(true)}
      />

      {/* Main Content */}
      <div className="flex-1 p-4">
        <div className="w-full">
          <div className="mb-6 flex items-start justify-between">
            <Timer
              onTimeAlert={() => setShowTimeAlert(true)}
              onTimeAlertClose={() => setShowTimeAlert(false)}
            />
          </div>

          {showTimeAlert && (
            <Alert variant="destructive" className="mb-4 animate-pulse">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Time is running out!</AlertTitle>
              <AlertDescription>
                You have less than 15 minutes left in the current stage. Please
                finalize your decisions.
              </AlertDescription>
            </Alert>
          )}

          <Card className="border-slate-200 shadow-lg">
            <CardContent className="p-6">
              <FirstTimeGuidance />

              <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-2">
                <div>
                  <InputFields
                    formData={formData}
                    toggleStates={toggleStates}
                    onInputChange={handleInputChange}
                    onToggleChange={handleToggleChange}
                    isTeam1={team === 'team1'}
                  />

                  <div className="mt-8 flex justify-center">
                    <Button
                      size="lg"
                      className="px-8 py-6 text-lg font-semibold"
                      onClick={handleSubmit}
                    >
                      SUBMIT
                    </Button>
                  </div>
                </div>

                <div className="flex flex-col items-center justify-center">
                  <Valuation value={valuation} />
                  <div className="mt-8 w-full max-w-md">
                    <PieChart percentage={pieChartData} />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Modals */}
      {showVideoModal && (
        <Modal
          onClose={() => setShowVideoModal(false)}
          title="Video Instructions"
          className="sm:max-w-3xl"
        >
          <div className="flex aspect-video items-center justify-center rounded-md bg-slate-100">
            <div className="p-8 text-center">
              <p className="mb-4 text-slate-500">
                Video player would be embedded here
              </p>
              <p className="text-sm text-slate-400">
                This is a placeholder for the instructional video
              </p>
            </div>
          </div>
        </Modal>
      )}

      {showTextModal && (
        <Modal
          title="Text Instructions"
          onClose={() => setShowTextModal(false)}
        >
          <p className="whitespace-pre-line text-slate-700">
            {INSTRUCTION_TEXT}
          </p>
        </Modal>
      )}
    </div>
  )
}
