export interface Artist {
  id: string
  name: string
  category: string[]
  location: string
  priceRange: string
  bio: string
  languages: string[]
  image: string
  rating: number
  reviewCount: number
  experience: string
  availability: "available" | "busy" | "unavailable"
}

export const mockArtists: Artist[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    category: ["singers", "performers"],
    location: "New York, NY",
    priceRange: "$500-1000",
    bio: "Professional jazz and pop vocalist with 10+ years of experience performing at weddings, corporate events, and concerts.",
    languages: ["English", "Spanish"],
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.9,
    reviewCount: 127,
    experience: "10+ years",
    availability: "available",
  },
  {
    id: "2",
    name: "Michael Chen",
    category: ["djs", "producers"],
    location: "Los Angeles, CA",
    priceRange: "$300-800",
    bio: "Award-winning DJ specializing in electronic, hip-hop, and party music. Perfect for clubs, weddings, and private events.",
    languages: ["English", "Mandarin"],
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.8,
    reviewCount: 89,
    experience: "8+ years",
    availability: "available",
  },
  {
    id: "3",
    name: "Isabella Rodriguez",
    category: ["dancers", "choreographers"],
    location: "Miami, FL",
    priceRange: "$400-900",
    bio: "Contemporary and Latin dance specialist. Choreographer for music videos, live performances, and dance competitions.",
    languages: ["English", "Spanish", "Portuguese"],
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.9,
    reviewCount: 156,
    experience: "12+ years",
    availability: "busy",
  },
  {
    id: "4",
    name: "David Thompson",
    category: ["speakers", "coaches"],
    location: "Chicago, IL",
    priceRange: "$1000-2500",
    bio: "Motivational speaker and business coach. Specializes in leadership, entrepreneurship, and personal development.",
    languages: ["English"],
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.7,
    reviewCount: 73,
    experience: "15+ years",
    availability: "available",
  },
  {
    id: "5",
    name: "Emma Wilson",
    category: ["singers", "songwriters"],
    location: "Nashville, TN",
    priceRange: "$600-1200",
    bio: "Country and folk singer-songwriter. Performs original music and covers for intimate venues and festivals.",
    languages: ["English"],
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.8,
    reviewCount: 94,
    experience: "7+ years",
    availability: "available",
  },
  {
    id: "6",
    name: "Carlos Martinez",
    category: ["dancers", "instructors"],
    location: "Austin, TX",
    priceRange: "$350-700",
    bio: "Salsa and ballroom dance instructor. Performs at cultural events and teaches dance workshops.",
    languages: ["English", "Spanish"],
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.6,
    reviewCount: 112,
    experience: "9+ years",
    availability: "available",
  },
  {
    id: "7",
    name: "Lisa Park",
    category: ["speakers", "consultants"],
    location: "San Francisco, CA",
    priceRange: "$800-1800",
    bio: "Tech industry speaker and consultant. Expertise in AI, digital transformation, and innovation.",
    languages: ["English", "Korean"],
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.9,
    reviewCount: 67,
    experience: "11+ years",
    availability: "unavailable",
  },
  {
    id: "8",
    name: "Alex Turner",
    category: ["djs", "producers"],
    location: "Las Vegas, NV",
    priceRange: "$400-1000",
    bio: "Electronic music producer and DJ. Specializes in house, techno, and progressive music for clubs and festivals.",
    languages: ["English"],
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.7,
    reviewCount: 145,
    experience: "6+ years",
    availability: "available",
  },
]

export const categories = [
  { value: "singers", label: "Singers" },
  { value: "dancers", label: "Dancers" },
  { value: "speakers", label: "Speakers" },
  { value: "djs", label: "DJs" },
  { value: "performers", label: "Performers" },
  { value: "choreographers", label: "Choreographers" },
  { value: "producers", label: "Producers" },
  { value: "coaches", label: "Coaches" },
  { value: "instructors", label: "Instructors" },
  { value: "consultants", label: "Consultants" },
  { value: "songwriters", label: "Songwriters" },
]

export const locations = [
  "New York, NY",
  "Los Angeles, CA",
  "Chicago, IL",
  "Houston, TX",
  "Phoenix, AZ",
  "Philadelphia, PA",
  "San Antonio, TX",
  "San Diego, CA",
  "Dallas, TX",
  "San Jose, CA",
  "Austin, TX",
  "Jacksonville, FL",
  "Fort Worth, TX",
  "Columbus, OH",
  "Charlotte, NC",
  "San Francisco, CA",
  "Indianapolis, IN",
  "Seattle, WA",
  "Denver, CO",
  "Washington, DC",
  "Boston, MA",
  "El Paso, TX",
  "Nashville, TN",
  "Detroit, MI",
  "Oklahoma City, OK",
  "Portland, OR",
  "Las Vegas, NV",
  "Memphis, TN",
  "Louisville, KY",
  "Baltimore, MD",
  "Milwaukee, WI",
  "Albuquerque, NM",
  "Tucson, AZ",
  "Fresno, CA",
  "Mesa, AZ",
  "Sacramento, CA",
  "Atlanta, GA",
  "Kansas City, MO",
  "Colorado Springs, CO",
  "Miami, FL",
  "Raleigh, NC",
  "Omaha, NE",
  "Long Beach, CA",
  "Virginia Beach, VA",
  "Oakland, CA",
  "Minneapolis, MN",
  "Tulsa, OK",
  "Arlington, TX",
  "Tampa, FL",
  "New Orleans, LA",
]

export const priceRanges = [
  { value: "$0-300", label: "Under $300" },
  { value: "$300-600", label: "$300 - $600" },
  { value: "$600-1000", label: "$600 - $1,000" },
  { value: "$1000-1500", label: "$1,000 - $1,500" },
  { value: "$1500-2500", label: "$1,500 - $2,500" },
  { value: "$2500+", label: "$2,500+" },
]

export const languages = [
  "English",
  "Spanish",
  "French",
  "German",
  "Italian",
  "Portuguese",
  "Mandarin",
  "Japanese",
  "Korean",
  "Arabic",
  "Hindi",
  "Russian",
  "Dutch",
  "Swedish",
  "Norwegian",
]
