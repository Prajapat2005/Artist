"use client"

import { useState, useEffect, useMemo } from "react"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { mockArtists, type Artist } from "@/lib/mock-data"
import { Filter, Grid, List } from "lucide-react"
import Filters from "@/components/filters"
import Artists from "@/components/artists"

export default function ArtistsPage() {
  const searchParams = useSearchParams()
  const [artists, setArtists] = useState<Artist[]>(mockArtists)
  const [filteredArtists, setFilteredArtists] = useState<Artist[]>(mockArtists)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedLocation, setSelectedLocation] = useState("")
  const [selectedPriceRange, setSelectedPriceRange] = useState("")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [showFilters, setShowFilters] = useState(false)

  useEffect(() => {
    const categoryParam = searchParams.get("category")
    if (categoryParam) {
      setSelectedCategories([...selectedCategories, categoryParam])
    }
  }, [searchParams]);

  // Filter artists based on selected criteria
  const applyFilters = useMemo(() => {
    let filtered = artists

    // Search term filter
    if (searchTerm) {
      filtered = filtered.filter(
        (artist) =>
          artist.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          artist.bio.toLowerCase().includes(searchTerm.toLowerCase()) ||
          artist.category.some((cat) => cat.toLowerCase().includes(searchTerm.toLowerCase())),
      )
    }

    // Category filter
    if (selectedCategories.length > 0) {
      filtered = filtered.filter((artist) => artist.category.some((cat) => selectedCategories.includes(cat)))
    }

    // Location filter
    if (selectedLocation) {
      filtered = filtered.filter((artist) => artist.location.includes(selectedLocation))
    }

    // Price range filter
    if (selectedPriceRange) {
      filtered = filtered.filter((artist) => artist.priceRange === selectedPriceRange)
    }

    return filtered

  }, [artists, searchTerm, selectedCategories, selectedLocation, selectedPriceRange]);

  useEffect(() => {
    setFilteredArtists(applyFilters)
  }, [applyFilters])

  const handleCategoryChange = (category: string, checked: boolean) => {
    if (checked) {
      setSelectedCategories((prev) => [...prev, category])
    } else {
      setSelectedCategories((prev) => prev.filter((c) => c !== category))
    }
  }

  const clearFilters = () => {
    setSearchTerm("")
    setSelectedCategories([])
    setSelectedLocation("")
    setSelectedPriceRange("")
  }

  const getAvailabilityColor = (availability: string) => {
    switch (availability) {
      case "available":
        return "bg-green-100 text-green-800"
      case "busy":
        return "bg-yellow-100 text-yellow-800"
      case "unavailable":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto px-2 sm:px-4 lg:px-6 py-4">
        <div className="flex flex-col lg:flex-row gap-8">

          {/* Filters Sidebar */}
          <Filters
            showFilters={showFilters}
            clearFilters={clearFilters}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            selectedCategories={selectedCategories}
            handleCategoryChange={handleCategoryChange}
            selectedPriceRange={selectedPriceRange}
            setSelectedPriceRange={setSelectedPriceRange}
            selectedLocation={selectedLocation}
            setSelectedLocation={setSelectedLocation}
          />

          {/* Main Content */}

          <div className="flex-1">
            {/* Controls */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <div className="flex items-center gap-4">
                <Button variant="outline" size="sm" onClick={() => setShowFilters(!showFilters)} className="lg:hidden">
                  <Filter className="h-4 w-4 mr-2" />
                  Filters
                </Button>
                <p className="text-sm text-gray-600">
                  {filteredArtists.length} artist{filteredArtists.length !== 1 ? "s" : ""} found
                </p>
              </div>

              <div className="flex items-center gap-2">
                <Button
                  variant={viewMode === "grid" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Artists Grid/List */}
            {filteredArtists.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No artists found matching your criteria.</p>
                <Button onClick={clearFilters} className="mt-4">
                  Clear Filters
                </Button>
              </div>
            ) : (
              <Artists
                viewMode={viewMode}
                filteredArtists={filteredArtists}
                getAvailabilityColor={getAvailabilityColor}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
