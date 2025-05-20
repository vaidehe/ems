import AnalyticsDashboard from '../components/AnalyticsDashboard'
import DeviceControls from '../components/DeviceControls'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function AnalyticsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6 text-center">Home Energy Analytics</h1>
        <div className="grid gap-6 md:grid-cols-2">
          <AnalyticsDashboard />
          <DeviceControls />
        </div>
      </main>
      <Footer />
    </div>
  )
}

