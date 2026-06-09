import React from 'react'
import { StickyScroll } from './ui/sticky-scroll-reveal'

const musicSchoolContent = [
  {
    title: "Live Jam Sessions",
    description:
      "Create music together in real time with band members, producers, and collaborators from anywhere in the world. Share melodies, experiment with sounds, and build tracks seamlessly without missing a beat.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--purple-500),var(--pink-500))] text-white">
        Live Jam Sessions
      </div>
    ),
  },
  {
    title: "Instant Beat Sync",
    description:
      "Stay perfectly in sync with every rhythm and sound update as it happens. Whether you're layering drums, adding vocals, or tweaking synths, everyone hears the latest version instantly.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="/music-studio.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="music studio demo"
        />
      </div>
    ),
  },
  {
    title: "Track History",
    description:
      "Never lose your creative flow again. Easily revisit previous versions of your tracks, recover old mixes, and compare edits without worrying about overwriting your best ideas.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--red-500))] text-white">
        Track History
      </div>
    ),
  },
  {
    title: "Endless Inspiration",
    description:
      "Discover fresh sounds, remix ideas, and creative samples whenever inspiration runs low. Keep your music evolving with tools designed to spark creativity and keep the energy alive.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--blue-500))] text-white">
        Endless Inspiration
      </div>
    ),
  },
];

function WhyChooseUs() {
  return (
    <div>
        <StickyScroll content={musicSchoolContent}/>
    </div>
  )
}

export default WhyChooseUs