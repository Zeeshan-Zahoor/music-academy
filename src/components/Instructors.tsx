'use client';

import { AnimatedTooltip } from "./ui/animated-tooltip";
import { WavyBackground } from "./ui/wavy-background"

const instructors = [
  {
    id: 1,
    name: 'Elena Briggs',
    designation: 'Vocal Coach',
    image:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 2,
    name: 'Marcus Reid',
    designation: 'Guitar Instructor',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 3,
    name: 'Sophia Carter',
    designation: 'Piano Instructor',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 4,
    name: 'Daniel Foster',
    designation: 'Drum Coach',
    image:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 5,
    name: 'Olivia Bennett',
    designation: 'Violin Instructor',
    image:
      'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=800&q=60',
  },
];

function Instructors() {
  return (
    <div className="relative h-[40rem] overflow-hidden flex items-center justify-center">
        <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
            <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8">Meet Out Instructors</h2>
            <p className="text-base md:text-lg text-white text-center mb-4">Discover the talented professionals who will guide your musical journey</p>
            <div className="flex flex-row items-center justify-center mb-10 w-full">
                <AnimatedTooltip items={instructors}/>
            </div>
        </WavyBackground>
    </div>
  )
}

export default Instructors