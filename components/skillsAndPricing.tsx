"use client"

import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { languages, priceRanges, locations } from "@/lib/mock-data"

import { UseFormSetValue } from "react-hook-form"

interface SKILLSANDPRICING {
    selectedLanguages: string[],
    handleLanguageChange: (language: string, checked: boolean) => void,
    errors: any,
    setValue: UseFormSetValue<{
        name: string;
        languages: string[];
        priceRange: string;
        location: string;
        email: string;
        phone: string;
        bio: string;
        categories: string[];
        experience: string;
        portfolioUrl?: string | undefined;
        socialMedia?: string | undefined;
    }>
}

const SkillaAndPricing = ({ selectedLanguages, handleLanguageChange, errors, setValue }: SKILLSANDPRICING) => {
    return (
        <div className="space-y-6">
            <div>
                <Label className="text-base font-medium">Languages Spoken * (Select all that apply)</Label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-3">
                    {languages.map((language) => (
                        <div key={language} className="flex items-center space-x-2">
                            <Checkbox
                                id={language}
                                checked={selectedLanguages.includes(language)}
                                onCheckedChange={(checked) => handleLanguageChange(language, checked as boolean)}
                            />
                            <Label htmlFor={language} className="text-sm">
                                {language}
                            </Label>
                        </div>
                    ))}
                </div>
                {selectedLanguages.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-3">
                        {selectedLanguages.map((lang) => (
                            <Badge key={lang} variant="secondary">
                                {lang}
                            </Badge>
                        ))}
                    </div>
                )}
                {errors.languages && <p className="text-red-500 text-sm mt-1">{errors.languages.message}</p>}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <Label htmlFor="priceRange">Price Range *</Label>
                    <Select onValueChange={(value) => setValue("priceRange", value)}>
                        <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Select your price range" />
                        </SelectTrigger>
                        <SelectContent>
                            {priceRanges.map((range) => (
                                <SelectItem key={range.value} value={range.value}>
                                    {range.label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    {errors.priceRange && <p className="text-red-500 text-sm mt-1">{errors.priceRange.message}</p>}
                </div>

                <div>
                    <Label htmlFor="location">Location *</Label>
                    <Select onValueChange={(value) => setValue("location", value)}>
                        <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Select your location" />
                        </SelectTrigger>
                        <SelectContent>
                            {locations.map((location) => (
                                <SelectItem key={location} value={location}>
                                    {location}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    {errors.location && <p className="text-red-500 text-sm mt-1">{errors.location.message}</p>}
                </div>
            </div>
        </div>
    )
}

export default SkillaAndPricing