import React from 'react'

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Upload, X, Camera } from "lucide-react"

interface PERSONALINFORMATION {
    profileImage: string | null,
    setProfileImage: (x: string | null) => void,
    handleImageUpload: (x: React.ChangeEvent<HTMLInputElement>) => void,
    register: any,
    errors: any,
    watch: any,
}

const PersonalInformation = ({ profileImage, setProfileImage, handleImageUpload, register, errors, watch }: PERSONALINFORMATION) => {
    return (
        <div className="space-y-6">
            {/* Profile Image Upload */}
            <div className="flex flex-col items-center space-y-4">
                <div className="relative">
                    {profileImage ? (
                        <div className="relative">
                            <img
                                src={profileImage || "/placeholder.svg"}
                                alt="Profile"
                                className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
                            />
                            <button
                                type="button"
                                onClick={() => setProfileImage(null)}
                                className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                            >
                                <X className="h-4 w-4" />
                            </button>
                        </div>
                    ) : (
                        <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center border-4 border-white shadow-lg">
                            <Camera className="h-8 w-8 text-gray-400" />
                        </div>
                    )}
                </div>
                <div>
                    <Label htmlFor="profile-image" className="cursor-pointer">
                        <div className="flex items-center space-x-2 text-sm text-primary hover:text-primary/80">
                            <Upload className="h-4 w-4" />
                            <span>Upload Profile Photo</span>
                        </div>
                    </Label>
                    <Input
                        id="profile-image"
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input id="name" {...register("name")} placeholder="Enter your full name" className="mt-1" />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                </div>

                <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                        id="email"
                        type="email"
                        {...register("email")}
                        placeholder="your@email.com"
                        className="mt-1"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                </div>
            </div>

            <div>
                <Label htmlFor="phone">Phone Number *</Label>
                <Input id="phone" {...register("phone")} placeholder="+1 (555) 123-4567" className="mt-1" />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
            </div>

            <div>
                <Label htmlFor="bio">Professional Bio *</Label>
                <Textarea
                    id="bio"
                    {...register("bio")}
                    placeholder="Tell us about your experience, style, and what makes you unique as a performer..."
                    className="mt-1 min-h-32"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                    <span>{errors.bio?.message}</span>
                    <span>{watch("bio")?.length || 0}/500</span>
                </div>
            </div>
        </div>
    )
}

export default PersonalInformation;