import React from 'react'
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { categories, locations, priceRanges, type Artist } from "@/lib/mock-data"
import { Search } from "lucide-react"

interface FILTER {
    showFilters: boolean,
    clearFilters: () => void,
    searchTerm: string,
    setSearchTerm: (x: string) => void,
    selectedCategories: string[],
    handleCategoryChange: (category: string, checked: boolean) => void,
    selectedPriceRange: string,
    setSelectedPriceRange: (x: string) => void,
    selectedLocation: string,
    setSelectedLocation: (x: string) => void
}

const Filters = ({ showFilters, clearFilters, searchTerm, setSearchTerm, selectedCategories, handleCategoryChange, selectedPriceRange, setSelectedPriceRange, selectedLocation, setSelectedLocation }: FILTER) => {
    return (
        <div className={`lg:w-80 ${showFilters ? "block" : "hidden lg:block"}`}>
            <Card className="sticky top-24">
                <CardHeader>
                    <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold">Filters</h3>
                        <Button variant="ghost" size="sm" onClick={clearFilters}>
                            Clear All
                        </Button>
                    </div>
                </CardHeader>

                <CardContent className="space-y-4">
                    {/* Search */}
                    <div>
                        <Label>Search Artists</Label>
                        <div className="relative mt-1">
                            <Search className="absolute left-3 top-3 text-gray-400 h-4 w-4" />
                            <Input
                                id="search"
                                placeholder="Search by name, category..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="pl-10"
                            />
                        </div>
                    </div>

                    {/* Categories */}
                    <div>
                        <Label className="text-sm font-medium">Categories</Label>
                        <div className="mt-2 space-y-2 max-h-40 overflow-y-scroll">
                            {categories.map((category) => (
                                <div key={category.value} className="flex items-center space-x-2">
                                    <Checkbox
                                        id={category.value}
                                        checked={selectedCategories.includes(category.value)}
                                        onCheckedChange={(checked) => handleCategoryChange(category.value, checked as boolean)}
                                    />
                                    <Label className="text-sm">
                                        {category.label}
                                    </Label>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Location */}
                    <div>
                        <Label htmlFor="location">Location</Label>
                        <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                            <SelectTrigger className="mt-1">
                                <SelectValue placeholder="Select location" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">All Locations</SelectItem>
                                {locations.map((location) => (
                                    <SelectItem key={location} value={location}>
                                        {location}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Price Range */}
                    <div>
                        <Label htmlFor="price">Price Range</Label>
                        <Select value={selectedPriceRange} onValueChange={setSelectedPriceRange}>
                            <SelectTrigger className="mt-1">
                                <SelectValue placeholder="Select price range" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">All Prices</SelectItem>
                                {priceRanges.map((range) => (
                                    <SelectItem key={range.value} value={range.value}>
                                        {range.label}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default Filters