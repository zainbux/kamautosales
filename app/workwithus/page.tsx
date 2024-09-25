import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutUs() {
  return (
    <div className="bg-slate-500 pt-60 min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-8">
          About Car Auto Sales
        </h1>
        
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Our Story</CardTitle>
            <CardDescription>Driving dreams since 1985</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">
              Kam Auto Sales has been a trusted name in the automotive industry since its inception founded by Kam a hardworking and experienced car enthusiest who looks forward to  helping you find the best ride for you.
            </p>
            <p className="text-gray-700 mb-4">
              We pride ourselves on our commitment to quality, customer satisfaction, and our deep-rooted 
              passion for automobiles. Our team of experienced professionals is dedicated to helping you 
              find the perfect vehicle that fits your lifestyle and budget.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Our Values</CardTitle>
            <CardDescription>What drives us forward</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Integrity in every transaction</li>
              <li>Customer-first approach</li>
              <li>Quality vehicles at fair prices</li>
              <li>Exceptional after-sales service</li>
              <li>Commitment to community involvement</li>
            </ul>
          </CardContent>
        </Card>


      </div>
    </div>
  )
}