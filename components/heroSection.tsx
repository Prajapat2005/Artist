import React from 'react';
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Users, Star, Calendar } from "lucide-react"
import { AspectRatio } from "@/components/ui/aspect-ratio"

const stats = [
    { label: "Active Artists", value: "500+", icon: Users },
    { label: "Events Booked", value: "2,500+", icon: Calendar },
    { label: "Client Rating", value: "4.9/5", icon: Star },
]

const Hero = () => {
    return (
        <section className="bg-gradient-to-br from-primary/20 via-purple-50 to-pink-50 py-5 lg:py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <Badge variant="secondary" className="w-fit">
                                🎭 Trusted by 1000+ Event Planners
                            </Badge>
                            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                                Find Perfect
                                <span className="text-primary block">Artists</span>
                                for Your Events
                            </h1>
                            <p className="text-xl text-gray-600 max-w-lg">
                                Connect with talented performing artists. Browse profiles, compare rates, and book the perfect artist
                                for your next event.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button size="lg" asChild className="text-lg px-8">
                                <Link href="/artists">
                                    Explore Artists <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                            </Button>
                            <Button size="lg" variant="outline" asChild className="text-lg px-8">
                                <Link href="/onboarding">Join as Artist</Link>
                            </Button>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-6 pt-8">
                            {stats.map((stat, index) => (
                                <div key={index} className="text-center">
                                    <div className="flex justify-center mb-2">
                                        <stat.icon className="h-6 w-6 text-primary" />
                                    </div>
                                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                                    <div className="text-sm text-gray-600">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative right-0 hidden lg:block">
                        <div className="relative z-10">
                            <Image
                                src="https://cdn.pixabay.com/photo/2022/06/02/15/01/music-7238254_1280.jpg"
                                width={700}
                                height={600}
                                className="rounded-2xl shadow-2xl object-cover"
                                alt=""
                            />
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;