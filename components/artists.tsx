import React from 'react'
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { categories, Artist } from "@/lib/mock-data"
import { MapPin, DollarSign, Star } from "lucide-react"
import Image from "next/image"

interface ARTISTS {
    viewMode: string,
    filteredArtists: Artist[],
    getAvailabilityColor: (x: string) => string,
}

const Artists = ({ viewMode, filteredArtists, getAvailabilityColor }: ARTISTS) => {
    return (
        <div className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6" : "space-y-4"}>

            {filteredArtists.map((artist) => (
                <Card
                    key={artist.id}
                    className={`hover:shadow-lg transition-shadow ${viewMode === "list" ? "flex flex-row" : ""}`}
                >
                    <div className={viewMode === "list" ? "w-48 flex-shrink-0" : ""}>
                        <Image
                            src={artist.image || "/placeholder.svg"}
                            alt={artist.name}
                            width={300}
                            height={300}
                            className={`object-cover ${viewMode === "list" ? "w-full h-full rounded-l-lg" : "w-full h-48 rounded-t-lg"}`}
                        />
                    </div>

                    <div className="flex-1">
                        <CardHeader className={viewMode === "list" ? "pb-2" : ""}>
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-lg font-semibold">{artist.name}</h3>
                                    <div className="flex items-center gap-1 text-sm text-gray-600 mt-1">
                                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                        <span>{artist.rating}</span>
                                        <span>({artist.reviewCount} reviews)</span>
                                    </div>
                                </div>
                                <Badge className={getAvailabilityColor(artist.availability)}>{artist.availability}</Badge>
                            </div>
                        </CardHeader>

                        <CardContent className="space-y-3">
                            <div className="flex flex-wrap gap-1">
                                {artist.category.map((cat) => (
                                    <Badge key={cat} variant="secondary" className="text-xs">
                                        {categories.find((c) => c.value === cat)?.label || cat}
                                    </Badge>
                                ))}
                            </div>

                            <p className="text-sm text-gray-600 line-clamp-2">{artist.bio}</p>

                            <div className="flex items-center gap-4 text-sm text-gray-600">
                                <div className="flex items-center gap-1">
                                    <MapPin className="h-4 w-4" />
                                    <span>{artist.location}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <DollarSign className="h-4 w-4" />
                                    <span>{artist.priceRange}</span>
                                </div>
                            </div>

                            <div className="flex gap-2 pt-2">
                                <Button className="flex-1" size="sm">
                                    Ask for Quote
                                </Button>
                                <Button variant="outline" size="sm">
                                    View Profile
                                </Button>
                            </div>
                        </CardContent>
                    </div>
                </Card>
            ))}
        </div>
    )
}

export default Artists