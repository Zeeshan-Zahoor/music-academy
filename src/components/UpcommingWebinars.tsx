'use client';

import Link from "next/link"
import { HoverEffect } from "./ui/card-hover-effect";

function UpcommingWebinars() {
    const fearturedWebinars = [
  {
    title: "Spotify",
    description:
      "A digital music streaming service that gives users access to millions of songs, podcasts, and playlists from artists all over the world.",
    link: "https://spotify.com",
  },
  {
    title: "Apple Music",
    description:
      "A music and video streaming service developed by Apple that offers access to a vast catalog of songs, curated playlists, and exclusive content.",
    link: "https://music.apple.com",
  },
  {
    title: "SoundCloud",
    description:
      "An online audio distribution platform that enables users to upload, promote, and share music and podcasts.",
    link: "https://soundcloud.com",
  },
  {
    title: "YouTube Music",
    description:
      "A music streaming service developed by YouTube that allows users to browse songs, music videos, live performances, and remixes.",
    link: "https://music.youtube.com",
  },
  {
    title: "Tidal",
    description:
      "A subscription-based music streaming platform known for high-fidelity audio quality and exclusive artist content.",
    link: "https://tidal.com",
  },
  {
    title: "Deezer",
    description:
      "A global music streaming service offering personalized recommendations, playlists, podcasts, and radio stations.",
    link: "https://deezer.com",
  },
  {
    title: "Bandcamp",
    description:
      "An online music platform where artists can share and sell their music directly to fans.",
    link: "https://bandcamp.com",
  },
];

  return (
    <div className="p-12 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center">
                <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">Featured Webinars</h2>
                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Enhance Your Musical Journey</p>
            </div>
            <div className="mt-10">
                <HoverEffect items={fearturedWebinars.map(webinar => (
                    {
                        title: webinar.title,
                        description: webinar.description,
                        link: webinar.link
                    }
                ))}/>
            </div>
            <div className="mt-10 text-center">
                <Link href={"/"}
                    className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200">
                        View All Webinars
                </Link>
            </div>
        </div>
    </div>
  )
}

export default UpcommingWebinars