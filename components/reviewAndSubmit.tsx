import React from 'react'

import { Badge } from "@/components/ui/badge"
import { categories } from "@/lib/mock-data"

interface REVIEW {
    watch: any,
    selectedCategories: string[],
    selectedLanguages: string[],
}

const ReviewAndSubmit = ({ watch, selectedCategories, selectedLanguages }: REVIEW) => {
    return (
        <div className="space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Review Your Information</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <h4 className="font-medium text-gray-900 mb-2">Personal Information</h4>
                        <div className="space-y-1 text-sm">
                            <p>
                                <span className="font-medium">Name:</span> {watch("name")}
                            </p>
                            <p>
                                <span className="font-medium">Email:</span> {watch("email")}
                            </p>
                            <p>
                                <span className="font-medium">Phone:</span> {watch("phone")}
                            </p>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-medium text-gray-900 mb-2">Professional Details</h4>
                        <div className="space-y-1 text-sm">
                            <p>
                                <span className="font-medium">Experience:</span> {watch("experience")}
                            </p>
                            <p>
                                <span className="font-medium">Location:</span> {watch("location")}
                            </p>
                            <p>
                                <span className="font-medium">Price Range:</span> {watch("priceRange")}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-4">
                    <h4 className="font-medium text-gray-900 mb-2">Categories</h4>
                    <div className="flex flex-wrap gap-2">
                        {selectedCategories.map((cat) => (
                            <Badge key={cat} variant="secondary">
                                {categories.find((c) => c.value === cat)?.label}
                            </Badge>
                        ))}
                    </div>
                </div>

                <div className="mt-4">
                    <h4 className="font-medium text-gray-900 mb-2">Languages</h4>
                    <div className="flex flex-wrap gap-2">
                        {selectedLanguages.map((lang) => (
                            <Badge key={lang} variant="secondary">
                                {lang}
                            </Badge>
                        ))}
                    </div>
                </div>

                <div className="mt-4">
                    <h4 className="font-medium text-gray-900 mb-2">Bio</h4>
                    <p className="text-sm text-gray-700">{watch("bio")}</p>
                </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-medium text-blue-900 mb-2">What happens next?</h4>
                <ul className="text-sm text-blue-800 space-y-1">
                    <li>• We'll review your profile within 24 hours</li>
                    <li>• You'll receive an email confirmation once approved</li>
                    <li>• Your profile will be visible to event planners</li>
                    <li>• You'll start receiving booking requests</li>
                </ul>
            </div>
        </div>
    )
}

export default ReviewAndSubmit