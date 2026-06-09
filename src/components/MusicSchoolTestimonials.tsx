'use client';

import { cn } from "@/lib/utils";
import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const testimonials = [
  {
    quote:
      "Music can change the world because it can change people.",
    name: "Bono",
    title: "Singer & Songwriter",
  },
  {
    quote:
      "One good thing about music, when it hits you, you feel no pain.",
    name: "Bob Marley",
    title: "Reggae Legend",
  },
  {
    quote:
      "Without music, life would be a mistake.",
    name: "Friedrich Nietzsche",
    title: "Philosopher",
  },
  {
    quote:
      "Where words fail, music speaks.",
    name: "Hans Christian Andersen",
    title: "Author",
  },
  {
    quote:
      "Music is the universal language of mankind.",
    name: "Henry Wadsworth Longfellow",
    title: "Poet",
  },
  {
    quote:
      "Turn up the volume, close your eyes, and let the rhythm take over.",
    name: "Daft Punk",
    title: "Electronic Music Duo",
  },
  {
    quote:
      "Jazz is not dead, it just smells funny.",
    name: "Frank Zappa",
    title: "Musician & Composer",
  },
  {
    quote:
      "Music expresses that which cannot be put into words.",
    name: "Victor Hugo",
    title: "Writer",
  },
  {
    quote:
      "Life seems to go on without effort when I am filled with music.",
    name: "George Eliot",
    title: "Novelist",
  },
  {
    quote:
      "Music is powerful. As people listen to it, they can be affected.",
    name: "Ray Charles",
    title: "Singer & Pianist",
  },
];

function MusicSchoolTestimonials() {
  return (
    <div className="relative flex h-[50rem] w-full items-center justify-center bg-white dark:bg-black">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
        <InfiniteMovingCards
                    items={testimonials}
                    direction="right"
                    speed="slow"
                />
    </div>
  )
}

export default MusicSchoolTestimonials