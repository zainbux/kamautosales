'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, AlertCircle, Users, ShoppingCart, Gift } from 'lucide-react'

export default function ReferralProgram() {
  const [formData, setFormData] = useState({
    yourName: '',
    yourEmail: '',
    friendName: '',
    friendEmail: '',
    message: ''
  })
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    // For this example, we'll simulate a successful submission
    setTimeout(() => {
      setFormStatus('success')
      setFormData({
        yourName: '',
        yourEmail: '',
        friendName: '',
        friendEmail: '',
        message: ''
      })
    }, 1000)
  }

  return (
    <div className="bg-slate-400 pt-36 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-8">
          Refer a Friend and Earn Rewards
        </h1>
        
        <Card>
          <CardHeader>
            <CardTitle>How It Works</CardTitle>
            <CardDescription>Our referral program is simple and rewarding</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card>
                <CardHeader>
                  <Users className="w-8 h-8 text-blue-600 mb-2" />
                  <CardTitle>Refer a Friend</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">Share the joy of finding the perfect car with your friends and family.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <ShoppingCart className="w-8 h-8 text-blue-600 mb-2" />
                  <CardTitle>They Make a Purchase</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">When your referral buys a car from us, everyone wins!</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Gift className="w-8 h-8 text-blue-600 mb-2" />
                  <CardTitle>Earn Rewards</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">Get $500 cash back for each successful referral!</p>
                </CardContent>
              </Card>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <CardTitle className="mb-4">Refer Someone Today</CardTitle>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="yourName">Your Name</Label>
                  <Input
                    id="yourName"
                    name="yourName"
                    value={formData.yourName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="yourEmail">Your Email</Label>
                  <Input
                    id="yourEmail"
                    name="yourEmail"
                    type="email"
                    value={formData.yourEmail}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="friendName">Friend's Name</Label>
                  <Input
                    id="friendName"
                    name="friendName"
                    value={formData.friendName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="friendEmail">Friend's Email</Label>
                  <Input
                    id="friendEmail"
                    name="friendEmail"
                    type="email"
                    value={formData.friendEmail}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Personal Message (Optional)</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                />
              </div>
              <Button type="submit" className="w-full">
                Submit Referral
              </Button>
            </form>
          </CardContent>
          <CardFooter>
            {formStatus === 'success' && (
              <Alert>
                <CheckCircle2 className="h-4 w-4" />
                <AlertTitle>Success</AlertTitle>
                <AlertDescription>
                  Your referral has been submitted successfully. Thank you for spreading the word!
                </AlertDescription>
              </Alert>
            )}

            {formStatus === 'error' && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>
                  There was an error submitting your referral. Please try again later.
                </AlertDescription>
              </Alert>
            )}
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}