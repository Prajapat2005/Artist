import React from 'react'

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { categories } from "@/lib/mock-data"

interface PERSONALDETAILS {
    selectedCategories: string[],
    handleCategoryChange: (category: string, checked: boolean) => void,
    errors: any,
    setValue: any,
    register: any,
}

const personalDetails = ({ selectedCategories, handleCategoryChange, errors, setValue, register }: PERSONALDETAILS) => {
    return (
        <div className="space-y-6">
            <div>
                <Label className="text-base font-medium">Categories * (Select all that apply)</Label>
                <p className="text-sm text-gray-600 mb-4">Choose the categories that best describe your talents</p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {categories.map((category) => (
                        <div key={category.value} className="flex items-center space-x-2">
                            <Checkbox
                                id={category.value}
                                checked={selectedCategories.includes(category.value)}
                                onCheckedChange={(checked) => handleCategoryChange(category.value, checked as boolean)}
                            />
                            <Label htmlFor={category.value} className="text-sm">
                                {category.label}
                            </Label>
                        </div>
                    ))}
                </div>
                {selectedCategories.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-3">
                        {selectedCategories.map((cat) => (
                            <Badge key={cat} variant="secondary">
                                {categories.find((c) => c.value === cat)?.label}
                            </Badge>
                        ))}
                    </div>
                )}
                {errors.categories && <p className="text-red-500 text-sm mt-1">{errors.categories.message}</p>}
            </div>

            <div>
                <Label htmlFor="experience">Years of Experience *</Label>
                <Select onValueChange={(value) => setValue("experience", value)}>
                    <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select your experience level" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="1-2">1-2 years</SelectItem>
                        <SelectItem value="3-5">3-5 years</SelectItem>
                        <SelectItem value="6-10">6-10 years</SelectItem>
                        <SelectItem value="10+">10+ years</SelectItem>
                    </SelectContent>
                </Select>
                {errors.experience && <p className="text-red-500 text-sm mt-1">{errors.experience.message}</p>}
            </div>

            <div>
                <Label htmlFor="portfolioUrl">Portfolio/Website URL</Label>
                <Input
                    id="portfolioUrl"
                    {...register("portfolioUrl")}
                    placeholder="https://your-portfolio.com"
                    className="mt-1"
                />
                {errors.portfolioUrl && <p className="text-red-500 text-sm mt-1">{errors.portfolioUrl.message}</p>}
            </div>

            <div>
                <Label htmlFor="socialMedia">Social Media Links</Label>
                <Textarea
                    id="socialMedia"
                    {...register("socialMedia")}
                    placeholder="Instagram: @yourhandle&#10;YouTube: youtube.com/yourchannel&#10;TikTok: @yourhandle"
                    className="mt-1"
                />
            </div>
        </div>
    )
}

export default personalDetails