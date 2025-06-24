"use client"

import type React from "react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { CheckCircle, User, Briefcase, DollarSign, Camera } from "lucide-react"
import PersonalInformation from "@/components/personalInfo"
import PersonalDetails from "@/components/personalDetails"
import SkillaAndPricing from "@/components/skillsAndPricing"
import ReviewAndSubmit from "@/components/reviewAndSubmit"

const formSchema = z.object({
  // Personal Information
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  bio: z.string().min(50, "Bio must be at least 50 characters").max(500, "Bio must be less than 500 characters"),

  // Professional Information
  categories: z.array(z.string()).min(1, "Select at least one category"),
  languages: z.array(z.string()).min(1, "Select at least one language"),
  experience: z.string().min(1, "Experience is required"),
  priceRange: z.string().min(1, "Price range is required"),
  location: z.string().min(1, "Location is required"),

  // Portfolio
  portfolioUrl: z.string().url("Invalid URL").optional().or(z.literal("")),
  socialMedia: z.string().optional(),
})

type FormData = z.infer<typeof formSchema>

export default function OnboardingPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([])
  const [profileImage, setProfileImage] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const totalSteps = 4
  const progress = (currentStep / totalSteps) * 100

  const { register, handleSubmit, formState: { errors }, setValue, watch, trigger } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      categories: [],
      languages: [],
    },
  })

  const handleCategoryChange = (category: string, checked: boolean) => {
    let newCategories: string[]
    if (checked) {
      newCategories = [...selectedCategories, category]
    } else {
      newCategories = selectedCategories.filter((c) => c !== category)
    }
    setSelectedCategories(newCategories)
    setValue("categories", newCategories)
  }

  const handleLanguageChange = (language: string, checked: boolean) => {
    let newLanguages: string[]
    if (checked) {
      newLanguages = [...selectedLanguages, language]
    } else {
      newLanguages = selectedLanguages.filter((l) => l !== language)
    }
    setSelectedLanguages(newLanguages)
    setValue("languages", newLanguages)
  }

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setProfileImage(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const nextStep = async () => {
    let fieldsToValidate: (keyof FormData)[] = []

    switch (currentStep) {
      case 1:
        fieldsToValidate = ["name", "email", "phone", "bio"]
        break
      case 2:
        fieldsToValidate = ["categories", "experience"]
        break
      case 3:
        fieldsToValidate = ["languages", "priceRange", "location"]
        break
    }

    const isValid = await trigger(fieldsToValidate)
    if (isValid) {
      setCurrentStep((prev) => Math.min(prev + 1, totalSteps))
    }
  }

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1))
  }

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    console.log("Form submitted:", { ...data, profileImage })

    setIsSubmitting(false)
    setCurrentStep(totalSteps + 1) // Success step
  }

  const stepTitles = ["Personal Information", "Professional Details", "Skills & Pricing", "Review & Submit"]

  const stepIcons = [User, Briefcase, DollarSign, CheckCircle]

  if (currentStep > totalSteps) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-md text-center">
          <CardHeader>
            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <CardTitle className="text-2xl">Application Submitted!</CardTitle>
            <CardDescription>
              Thank you for joining Artistly. We'll review your profile and contact you within 24 hours.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild className="w-full">
              <a href="/">Return to Homepage</a>
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Join Artistly</h1>
          <p className="text-gray-600">Create your artist profile and start receiving booking requests</p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-700">
              Step {currentStep} of {totalSteps}
            </span>
            <span className="text-sm text-gray-500">{Math.round(progress)}% Complete</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Step Indicators */}
        <div className="flex justify-between mb-8">
          {stepTitles.map((title, index) => {
            const StepIcon = stepIcons[index]
            const stepNumber = index + 1
            const isActive = stepNumber === currentStep
            const isCompleted = stepNumber < currentStep

            return (
              <div key={index} className="flex flex-col items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${isCompleted
                    ? "bg-green-500 text-white"
                    : isActive
                      ? "bg-primary text-white"
                      : "bg-gray-200 text-gray-500"
                    }`}
                >
                  <StepIcon className="h-5 w-5" />
                </div>
                <span
                  className={`text-xs text-center max-w-20 ${isActive ? "text-primary font-medium" : "text-gray-500"}`}
                >
                  {title}
                </span>
              </div>
            )
          })}
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Card>
            <CardHeader>
              <CardTitle>{stepTitles[currentStep - 1]}</CardTitle>
              <CardDescription>
                {currentStep === 1 && "Tell us about yourself"}
                {currentStep === 2 && "Share your professional background"}
                {currentStep === 3 && "Set your skills and pricing"}
                {currentStep === 4 && "Review your information before submitting"}
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-6">
              {/* Step 1: Personal Information */}
              {currentStep === 1 && (
                <PersonalInformation
                  profileImage={profileImage}
                  setProfileImage={setProfileImage}
                  handleImageUpload={handleImageUpload}
                  register={register}
                  errors={errors}
                  watch={watch}
                />
              )}

              {/* Step 2: Professional Details */}
              {currentStep === 2 && (
                <PersonalDetails
                  selectedCategories={selectedCategories}
                  handleCategoryChange={handleCategoryChange}
                  errors={errors}
                  setValue={setValue}
                  register={register}
                />
              )}

              {/* Step 3: Skills & Pricing */}
              {currentStep === 3 && (
                <SkillaAndPricing
                  selectedLanguages={selectedLanguages}
                  handleLanguageChange={handleLanguageChange}
                  errors={errors}
                  setValue={setValue}
                />
              )}

              {/* Step 4: Review & Submit */}
              {currentStep === 4 && (
                <ReviewAndSubmit
                  watch={watch}
                  selectedCategories={selectedCategories}
                  selectedLanguages={selectedLanguages}
                />
              )}
            </CardContent>

            {/* Navigation Buttons */}
            <div className="flex justify-between p-6 border-t">
              <Button type="button" variant="outline" onClick={prevStep} disabled={currentStep === 1}>
                Previous
              </Button>

              {currentStep < totalSteps ? (
                <Button type="button" onClick={nextStep}>
                  Next Step
                </Button>
              ) : (
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Submit Application"}
                </Button>
              )}
            </div>
          </Card>
        </form>
      </div>
    </div>
  )
}
