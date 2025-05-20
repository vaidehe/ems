'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"

export default function DeviceControls() {
  const [hvacOn, setHvacOn] = useState(false)
  const [lightingOn, setLightingOn] = useState(false)
  const [temperature, setTemperature] = useState([22])
  const [brightness, setBrightness] = useState([50])

  return (
    <Card>
      <CardHeader>
        <CardTitle>Device Controls</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center justify-between">
          <Label htmlFor="hvac-switch">HVAC System</Label>
          <Switch
            id="hvac-switch"
            checked={hvacOn}
            onCheckedChange={setHvacOn}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="temperature-slider">Temperature (°C)</Label>
          <Slider
            id="temperature-slider"
            min={16}
            max={30}
            step={1}
            value={temperature}
            onValueChange={setTemperature}
            disabled={!hvacOn}
          />
          <div className="text-right text-sm text-muted-foreground">
            {temperature}°C
          </div>
        </div>
        <div className="flex items-center justify-between">
          <Label htmlFor="lighting-switch">Lighting</Label>
          <Switch
            id="lighting-switch"
            checked={lightingOn}
            onCheckedChange={setLightingOn}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="brightness-slider">Brightness (%)</Label>
          <Slider
            id="brightness-slider"
            min={0}
            max={100}
            step={1}
            value={brightness}
            onValueChange={setBrightness}
            disabled={!lightingOn}
          />
          <div className="text-right text-sm text-muted-foreground">
            {brightness}%
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

