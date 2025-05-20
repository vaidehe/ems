import Header from './components/Header'
import Footer from './components/Footer'
import EnergyDashboard from './components/EnergyDashboard'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6 text-center">Smart Home Energy Management</h1>
        <EnergyDashboard />
      </main>
      <Footer />
    </div>
  )
}

