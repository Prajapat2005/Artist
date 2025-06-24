"use client"
import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Music, Mic, Disc3Icon as Dance3, Volume2 } from "lucide-react"

const categories = [
    {
        title: "Singers",
        description: "Professional vocalists for all genres and events",
        icon: Music,
        count: "150+ Artists",
        href: "/artists?category=singers",
    },
    {
        title: "Dancers",
        description: "Choreographers and performers for every style",
        icon: Dance3,
        count: "120+ Artists",
        href: "/artists?category=dancers",
    },
    {
        title: "Speakers",
        description: "Motivational and keynote speakers",
        icon: Mic,
        count: "80+ Artists",
        href: "/artists?category=speakers",
    },
    {
        title: "DJs",
        description: "Professional DJs for parties and events",
        icon: Volume2,
        count: "90+ Artists",
        href: "/artists?category=djs",
    },
];

const Categories = () => {

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Browse by Category</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Discover talented artists across different categories. Find the perfect match for your event needs.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {categories.map((category, index) => (
                        <Link key={index} href={category.href}>
                            <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
                                <CardHeader className="text-center pb-4">
                                    <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                                        <category.icon className="h-8 w-8 text-primary" />
                                    </div>
                                    <CardTitle className="text-xl">{category.title}</CardTitle>
                                    <CardDescription className="text-center">{category.description}</CardDescription>
                                </CardHeader>
                                <CardContent className="text-center">
                                    <Badge variant="secondary">{category.count}</Badge>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default Categories