import Header from '../components/Header'
import Footer from '../components/Footer'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6 text-center">About SmartEnergy</h1>
        <Card>
          <CardHeader>
            <CardTitle>Our Mission</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              At SmartEnergy, we're committed to revolutionizing home energy management. Our goal is to empower homeowners with the tools and insights they need to optimize their energy consumption, reduce costs, and minimize their environmental impact.
            </p>
            <p className="mb-4">
              Founded in 2025, we've been at the forefront of smart home technology, continuously innovating to bring you the most advanced and user-friendly energy management solutions.
            </p>
            <p>
              Our team of experts combines deep knowledge in energy systems, IoT technology, and data analytics to deliver a comprehensive platform that makes energy management simple and effective for every homeowner.
            </p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  )
}

