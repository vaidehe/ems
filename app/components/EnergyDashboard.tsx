'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function EnergyDashboard() {
  const [currentUsage, setCurrentUsage] = useState(5.2)

  return (
    <Card>
      <CardHeader>
        <CardTitle>Energy Dashboard</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <p className="text-lg">Current Energy Usage:</p>
          <p className="text-3xl font-bold text-primary">{currentUsage} kWh</p>
        </div>
        <Button 
          onClick={() => setCurrentUsage((prev) => +(prev - 0.1).toFixed(1))}
        >
          Simulate Energy Saving
        </Button>
      </CardContent>
    </Card>
  )
}

