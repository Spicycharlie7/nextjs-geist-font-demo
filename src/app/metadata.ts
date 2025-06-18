import type { Metadata } from "next"

const defaultMetadata: Metadata = {
  title: {
    default: "FanSpace - Share Your Content",
    template: "%s | FanSpace"
  },
  description: "Join thousands of creators sharing exclusive content and building meaningful connections with their audience",
  keywords: [
    "content creators",
    "subscription platform",
    "exclusive content",
    "fan community",
    "digital creators",
    "content monetization"
  ],
  authors: [{ name: "FanSpace" }],
  creator: "FanSpace",
  publisher: "FanSpace",
  robots: {
    index: true,
    follow: true
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://fanspace.example.com",
    siteName: "FanSpace",
    title: "FanSpace - Share Your Content",
    description: "Join thousands of creators sharing exclusive content and building meaningful connections with their audience",
    images: [
      {
        url: "https://images.pexels.com/photos/3182834/pexels-photo-3182834.jpeg",
        width: 1200,
        height: 630,
        alt: "FanSpace - Share Your Content"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "FanSpace - Share Your Content",
    description: "Join thousands of creators sharing exclusive content and building meaningful connections with their audience",
    images: ["https://images.pexels.com/photos/3182834/pexels-photo-3182834.jpeg"]
  }
}

export default defaultMetadata
