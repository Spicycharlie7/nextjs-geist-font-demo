"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20">
      <Card className="w-full max-w-md p-6 bg-[#27272A] border-white/10">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Welcome back</h1>
          <p className="text-white/70">Log in to your FanSpace account</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="bg-[#1A1A1A] border-white/10"
              required
            />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Password</Label>
              <Link href="/forgot-password" className="text-sm text-[#2563EB] hover:underline">
                Forgot password?
              </Link>
            </div>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="bg-[#1A1A1A] border-white/10"
              required
            />
          </div>

          <Button type="submit" className="w-full bg-[#2563EB] hover:bg-[#2563EB]/90">
            Log In
          </Button>
        </form>

        <div className="relative my-8">
          <Separator className="bg-white/10" />
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#27272A] px-2 text-white/40 text-sm">
            OR
          </span>
        </div>

        <div className="space-y-4">
          <Button variant="outline" className="w-full border-white/10 hover:bg-white/5" onClick={() => console.log("Google login")}>
            Continue with Google
          </Button>
          <Button variant="outline" className="w-full border-white/10 hover:bg-white/5" onClick={() => console.log("Twitter login")}>
            Continue with Twitter
          </Button>
        </div>

        <div className="mt-6 text-center text-white/70">
          Don't have an account?{" "}
          <Link href="/signup" className="text-[#2563EB] hover:underline">
            Sign up
          </Link>
        </div>
      </Card>
    </div>
  )
}
