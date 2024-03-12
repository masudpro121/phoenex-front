"use client";
import React from "react";
import TemplateCard from "./templateCard";
import { Fragment, useState } from "react";

import Image from "next/image";

import avatar1 from "@/assets/comics/uploadContent/avatar10.png";
import avatar5 from "@/assets/comics/uploadContent/avatar11.png";
import avatar7 from "@/assets/comics/uploadContent/avatar12.png";
import avatar9 from "@/assets/comics/uploadContent/avatar2.png";
import avatar6 from "@/assets/comics/uploadContent/avatar3.png";
import avatar8 from "@/assets/comics/uploadContent/avatar4.png";
import back from "@/assets/comics/uploadContent/back.png";
import { useWorkspaceContext } from "@/context/workspaceProvider";
import Link from "next/link";

const items = [
  {
    topic: "Adventure in Wonderland",
    panels: "46",
    style: "Vibrant Cartoon",
    image: avatar1,
    detail: [
      {
        panel: ["A futuristic city skyline with towering skyscrapers against a setting sun."],
        caption: "New Babylon, a city of progress and prosperity.",
      },
      {
        panel: [
          "Inside a high-tech laboratory, Dr. Amelia Carson works on an advanced experiment.",
          "An explosion rocks the lab, causing chaos.",
        ],
        caption: "Dr. Amelia Carson, a brilliant scientist pushing the boundaries of technology.",
      },
      {
        panel: ["Amidst the smoke, a mysterious figure emerges, glowing with strange energy. "],
        caption: "The Catalyst, a being of pure energy, unleashed.",
      },
      {
        panel: ["A futuristic city skyline with towering skyscrapers against a setting sun."],
        caption: "New Babylon, a city of progress and prosperity.",
      },
      {
        panel: [
          "Inside a high-tech laboratory, Dr. Amelia Carson works on an advanced experiment.",
          "An explosion rocks the lab, causing chaos.",
        ],
        caption: "Dr. Amelia Carson, a brilliant scientist pushing the boundaries of technology.",
      },
      {
        panel: ["Amidst the smoke, a mysterious figure emerges, glowing with strange energy. "],
        caption: "The Catalyst, a being of pure energy, unleashed.",
      },
    ],
  },
  {
    topic: "Space Odyssey",
    panels: "32",
    style: "Sci-Fi Futuristic",
    image: avatar5,
    detail: [
      {
        panel: ["A magical forest with ancient trees and glowing fireflies."],
        caption: "Enchanted Woodlands, where nature holds secrets untold.",
      },
      {
        panel: [
          "Exploring an underwater city filled with bioluminescent marine life.",
          "Encountering mysterious creatures in the depths of the ocean.",
        ],
        caption: "Oceanic Odyssey, a journey to the heart of the underwater realm.",
      },
      {
        panel: ["In a futuristic space station, astronauts embark on a mission to the stars."],
        caption: "Stellar Hub, where dreams take flight beyond the Earth's atmosphere.",
      },
      {
        panel: ["A serene mountaintop with a view of clouds drifting below."],
        caption: "Summit Serenity, where the air is crisp, and the mind is clear.",
      },
      {
        panel: ["Roaming through a vibrant marketplace filled with exotic spices and textiles."],
        caption: "Market Melange, where colors and aromas create a tapestry of culture.",
      },
      {
        panel: ["At the edge of a cliff, feeling the rush of wind as waves crash below."],
        caption: "Cliffside Vista, a place where nature meets the power of the elements.",
      },
      {
        panel: [
          "Journeying through an ancient desert, uncovering the secrets of lost civilizations.",
        ],
        caption: "Desert Chronicles, where the sands whisper tales of the past.",
      },
      {
        panel: ["In a cozy library filled with books, each telling a different story."],
        caption: "Library Lore, where knowledge is the key to endless adventures.",
      },
      {
        panel: ["Witnessing a celestial event as stars align in a mesmerizing cosmic dance."],
        caption: "Celestial Ballet, where the universe choreographs its own masterpiece.",
      },
    ],
  },
  {
    topic: "Mystery Mansion",
    panels: "38    ",
    style: "Dark Noir",
    image: avatar7,
    detail: [
      {
        panel: ["A futuristic cityscape with neon lights illuminating the night."],
        caption: "Neon Metropolis, where the city comes alive in a symphony of lights.",
      },
      {
        panel: ["Exploring a mystical realm with floating islands and ancient ruins."],
        caption: "Mystic Isles, where magic and history intertwine in ethereal landscapes.",
      },
      {
        panel: ["In a secret garden filled with blooming flowers and hidden pathways."],
        caption: "Enchanted Garden, a haven of beauty and serenity concealed from the world.",
      },
      {
        panel: ["Adventuring through a dense jungle, discovering exotic wildlife and plants."],
        caption: "Jungle Expedition, where nature's wonders unfold in every step.",
      },
      {
        panel: ["A steampunk-inspired cityscape with airships soaring above industrial spires."],
        caption:
          "Steam City, where innovation and Victorian aesthetics blend into a unique skyline.",
      },
      {
        panel: ["At the summit of a snow-capped mountain, surrounded by majestic peaks."],
        caption: "Snowy Apex, where the air is crisp, and the panorama is breathtaking.",
      },
      {
        panel: [
          "Navigating through a cyberpunk alley, where neon signs create a dazzling display.",
        ],
        caption: "Cyber Alley, where the streets pulse with energy in the heart of the future.",
      },
      {
        panel: ["Witnessing a cosmic event as planets align in a celestial dance."],
        caption: "Celestial Alignment, a celestial spectacle beyond the boundaries of space.",
      },
      {
        panel: ["In a futuristic laboratory, groundbreaking experiments unfold."],
        caption: "Future Lab, where science and innovation redefine the possibilities.",
      },
    ],
  },
  {
    topic: "Time Travel Chronicles",
    panels: "20",
    style: "Retro Pixel Art",
    image: avatar9,
    detail: [
      {
        panel: ["A bustling cyberpunk cityscape with holographic billboards and flying vehicles."],
        caption: "Cyber Metropolis, where the future collides with urban vibrancy.",
      },
      {
        panel: ["Exploring a celestial garden with floating islands and radiant flora."],
        caption: "Celestial Oasis, where nature meets the cosmos in a harmonious blend.",
      },
      {
        panel: ["In a hidden sanctuary filled with ancient wisdom and serene meditation spots."],
        caption: "Tranquil Sanctuary, a retreat for the mind, body, and soul.",
      },
      {
        panel: [
          "Venturing through a bioluminescent forest, where flora and fauna glow in the dark.",
        ],
        caption: "Luminescent Grove, where the enchanted forest comes alive at night.",
      },
      {
        panel: ["A steampunk city suspended in the clouds, with floating platforms and airships."],
        caption: "Skyward Haven, where innovation takes flight among the clouds.",
      },
      {
        panel: ["At the summit of a majestic waterfall, surrounded by lush greenery and rainbows."],
        caption: "Cascade Vista, where the beauty of nature cascades in a symphony.",
      },
      {
        panel: ["Roaming through a retro-futuristic city with neon signs and vintage aesthetics."],
        caption: "Retro Futura, where the past and the future collide in a stylish embrace.",
      },
      {
        panel: ["Witnessing a planetary conjunction as celestial bodies align in the night sky."],
        caption: "Celestial Convergence, a cosmic ballet of planets and stars.",
      },
      {
        panel: [
          "In an advanced research facility, scientists unlock the mysteries of the universe.",
        ],
        caption: "Quantum Hub, where knowledge pushes the boundaries of human understanding.",
      },
    ],
  },
  {
    topic: "Magical Quest",
    panels: "30",
    style: "Whimsical Fantasy",
    image: avatar6,
    detail: [
      {
        panel: ["A futuristic city skyline with towering skyscrapers against a setting sun."],
        caption: "New Babylon, a city of progress and prosperity.",
      },
      {
        panel: [
          "Inside a high-tech laboratory, Dr. Amelia Carson works on an advanced experiment.",
          "An explosion rocks the lab, causing chaos.",
        ],
        caption: "Dr. Amelia Carson, a brilliant scientist pushing the boundaries of technology.",
      },
      {
        panel: ["Amidst the smoke, a mysterious figure emerges, glowing with strange energy. "],
        caption: "The Catalyst, a being of pure energy, unleashed.",
      },
      {
        panel: ["A futuristic city skyline with towering skyscrapers against a setting sun."],
        caption: "New Babylon, a city of progress and prosperity.",
      },
      {
        panel: [
          "Inside a high-tech laboratory, Dr. Amelia Carson works on an advanced experiment.",
          "An explosion rocks the lab, causing chaos.",
        ],
        caption: "Dr. Amelia Carson, a brilliant scientist pushing the boundaries of technology.",
      },
      {
        panel: ["Amidst the smoke, a mysterious figure emerges, glowing with strange energy. "],
        caption: "The Catalyst, a being of pure energy, unleashed.",
      },
    ],
  },
  {
    topic: "Superhero Showdown",
    panels: "45",
    style: "Bold Comic Book",
    image: avatar8,
    detail: [
      {
        panel: ["A serene beach at sunrise, with gentle waves and golden sands."],
        caption: "Sunrise Serenity, where nature paints a masterpiece in the morning light.",
      },
      {
        panel: [
          "Exploring a futuristic underwater city, surrounded by vibrant marine life.",
          "Encountering advanced technology beneath the ocean's depths.",
        ],
        caption: "Subaquatic Metropolis, an exploration of the marvels beneath the waves.",
      },
      {
        panel: ["In a cozy mountain cabin, surrounded by snow-covered peaks and evergreen trees."],
        caption: "Mountain Retreat, where warmth and tranquility meet the winter wilderness.",
      },
      {
        panel: [
          "Navigating through a bustling night market, with colorful stalls and aromatic delights.",
        ],
        caption: "Night Bazaar, where the senses come alive in a nocturnal spectacle.",
      },
      {
        panel: ["A surreal desert landscape with towering rock formations and a vast, starry sky."],
        caption: "Starry Dunes, where the magic of the desert unfolds under the cosmic canvas.",
      },
      {
        panel: ["Amidst ancient ruins, uncovering the secrets of a long-lost civilization."],
        caption: "Lost Civilization, a journey through time to decipher the mysteries of the past.",
      },
      {
        panel: [
          "Roaming through a vibrant cherry blossom garden, petals gently falling in the breeze.",
        ],
        caption: "Sakura Haven, where spring blooms in a symphony of pink and white.",
      },
      {
        panel: ["Witnessing a celestial phenomenon, as meteor showers illuminate the night sky."],
        caption:
          "Meteor Symphony, a cosmic spectacle that paints the sky with fleeting brilliance.",
      },
      {
        panel: [
          "In a state-of-the-art space station, scientists conduct groundbreaking experiments.",
        ],
        caption: "Space Odyssey, where innovation and discovery propel humanity beyond the stars.",
      },
    ],
  },
  {
    topic: "Adventure in Wonderland",
    panels: "46",
    style: "Vibrant Cartoon",
    image: avatar1,
    detail: [
      {
        panel: [
          "A tranquil meadow bathed in soft sunlight, with wildflowers swaying in the breeze.",
        ],
        caption: "Meadow Bliss, where nature's beauty unfolds in a peaceful symphony.",
      },
      {
        panel: [
          "Embarking on an intergalactic journey aboard a sleek spaceship, navigating through stardust.",
        ],
        caption: "Stardust Voyage, a cosmic adventure through the vastness of the universe.",
      },
      {
        panel: ["Discovering an ancient temple hidden within a dense, mystical forest."],
        caption:
          "Temple Enigma, where the secrets of the ancients are shrouded in nature's embrace.",
      },
      {
        panel: [
          "Exploring an underwater cavern adorned with bioluminescent creatures and coral formations.",
        ],
        caption: "Abyssal Wonder, where the depths of the ocean reveal a mesmerizing spectacle.",
      },
      {
        panel: [
          "A futuristic floating cityscape, with levitating platforms and advanced technology.",
        ],
        caption: "Floating Utopia, where innovation defies gravity in a city suspended in the air.",
      },
      {
        panel: [
          "In a vibrant market filled with exotic spices, textiles, and the lively chatter of traders.",
        ],
        caption:
          "Bazaar Melange, where cultural richness and diversity converge in a lively marketplace.",
      },
      {
        panel: [
          "Roaming through an otherworldly landscape, with towering crystalline formations and ethereal colors.",
        ],
        caption: "Crystal Spires, where fantasy meets reality in a surreal dreamscape.",
      },
      {
        panel: ["Witnessing the mesmerizing dance of the Northern Lights in the Arctic sky."],
        caption:
          "Aurora Elegance, where the polar night becomes a canvas for celestial illumination.",
      },
      {
        panel: [
          "Inside a cutting-edge laboratory, scientists push the boundaries of technological advancement.",
        ],
        caption: "Tech Nexus, where innovation and discovery shape the future of science.",
      },
    ],
  },
  {
    topic: "Space Odyssey",
    panels: "32",
    style: "Sci-Fi Futuristic",
    image: avatar5,
    detail: [
      {
        panel: [
          "A cozy cabin nestled in a snowy mountain range, surrounded by pristine winter landscapes.",
        ],
        caption: "Winter Retreat, where warmth meets the charm of a snowy wonderland.",
      },
      {
        panel: ["Embarking on a jungle safari, encountering exotic wildlife and lush vegetation."],
        caption: "Jungle Expedition, where the heart of the wilderness unveils its untamed beauty.",
      },
      {
        panel: [
          "Strolling through a vibrant city park, with blooming flowers and playful squirrels.",
        ],
        caption: "Urban Oasis, where nature thrives in the heart of the bustling city.",
      },
      {
        panel: ["Exploring an ancient library filled with dusty books and forgotten knowledge."],
        caption: "Forgotten Archives, where the past whispers its tales through time-worn pages.",
      },
      {
        panel: [
          "A serene lakeside retreat, with crystal-clear waters reflecting the surrounding mountains.",
        ],
        caption:
          "Lakeside Tranquility, where nature's mirror reflects a scene of peaceful serenity.",
      },
      {
        panel: [
          "Roaming through a futuristic metropolis, where skyscrapers touch the clouds and neon lights dazzle the night.",
        ],
        caption:
          "Neo Cityscape, where technology and urban aesthetics converge in a dazzling display.",
      },
      {
        panel: [
          "At the edge of a cliff, witnessing a breathtaking sunset over a vast, rolling landscape.",
        ],
        caption: "Sunset Horizon, where the sun bids farewell in a spectacular display of colors.",
      },
      {
        panel: [
          "Amidst a field of blooming cherry blossoms, capturing the essence of spring in full bloom.",
        ],
        caption:
          "Cherry Blossom Haven, where the air is filled with the sweet fragrance of renewal.",
      },
      {
        panel: [
          "Inside a state-of-the-art space station, where scientists conduct experiments in the pursuit of knowledge.",
        ],
        caption:
          "Space Laboratory, where the mysteries of the cosmos unfold within the confines of innovation.",
      },
    ],
  },
  {
    topic: "Mystery Mansion",
    panels: "38    ",
    style: "Dark Noir",
    image: avatar7,
    detail: [
      {
        panel: [
          "A magical forest illuminated by fireflies, with ancient trees whispering tales of old.",
        ],
        caption:
          "Enchanted Grove, where nature's enchantment comes alive in the glow of firefly lights.",
      },
      {
        panel: [
          "Embarking on a cosmic journey through a mesmerizing galaxy, with stars as far as the eye can see.",
        ],
        caption:
          "Celestial Odyssey, where the universe unfolds its cosmic tapestry in a dazzling display.",
      },
      {
        panel: [
          "Discovering a hidden cavern filled with glowing crystals and mysterious rock formations.",
        ],
        caption: "Crystal Abyss, where the underground world unveils its glittering treasures.",
      },
      {
        panel: [
          "Exploring an ancient cityscape adorned with intricate architecture and historical wonders.",
        ],
        caption:
          "Historic Marvels, where the echoes of the past resonate through time-honored structures.",
      },
      {
        panel: [
          "A futuristic metropolis with sleek skyscrapers and flying vehicles, painting the city in neon hues.",
        ],
        caption: "Neon Horizon, where the cityscape transforms into a vibrant neon symphony.",
      },
      {
        panel: [
          "Strolling through a sunflower field bathed in golden sunlight, with petals dancing in the breeze.",
        ],
        caption:
          "Sunflower Fields, where the radiant blooms create a sea of yellow under the sun's embrace.",
      },
      {
        panel: [
          "Roaming through a bustling market filled with eclectic stalls, where cultures converge in a lively spectacle.",
        ],
        caption:
          "Cultural Bazaar, where the richness of diverse traditions comes together in a vibrant marketplace.",
      },
      {
        panel: [
          "Witnessing a meteor shower under a star-studded sky, as celestial wonders streak across the darkness.",
        ],
        caption:
          "Meteor Shower Spectacle, where the cosmos puts on a dazzling display of shooting stars.",
      },
      {
        panel: [
          "Inside a cutting-edge laboratory where scientists push the boundaries of technological innovation.",
        ],
        caption:
          "Innovation Nexus, where the future unfolds in the hands of pioneering researchers.",
      },
    ],
  },
];

function ChooseTemplatePage() {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  const [template, setTemplate] = useState();
  const [original, setOriginal] = useState(true);
  const { sidebar, setSidebar } = useWorkspaceContext();

  return (
    <div className="bg-[white] flex flex-row p-4 w-full rounded-3xl h-full">
      <div
        className={` ${
          template ? "w-[40%] p-3 border-r-4" : "w-[0%] overflow-hidden"
        } " whitespace-nowrap duration-700 overflow-y-hidden transition-width overflow-x-hidden flex flex-col border-[#D8D8D8] " `}
      >
        <div className="flex flex-row items-center pb-2">
          <Image onClick={() => setTemplate()} className="w-[40px]" src={back} alt={"back"} />
          <h3 className=" ml-2 text-[28px] font-bold">Elevate Storytelling</h3>
        </div>
        <div className="flex flex-col p-4  rounded-3xl bg-[#F4F8FC] ">
          <div
            className={` ${
              template ? "w-full" : "min-w-[452px]"
            } overflow-hidden mb-4 p-2 bg-white text-[14px] text-[#9E9E9E]  flex justify-between rounded-xl `}
          >
            <button
              onClick={() => {
                setOriginal(true);
              }}
              className={`
                    ${
                      original ? "bg-[#2B8CFF] text-white " : `bg-transparent`
                    } rounded-xl w-[50%]  py-3`}
            >
              Transformed text
            </button>
            <button
              onClick={() => {
                setOriginal(false);
              }}
              className={`${
                original ? "bg-transparent" : `bg-[#2B8CFF] text-white `
              }  rounded-xl  w-[50%] py-3`}
            >
              Original Text
            </button>
          </div>
          <div
            className={` ${
              template ? "overflow-y-auto" : "overflow-hidden"
            } text-[15px] leading-[34px]  h-[550px] `}
          >
            {template?.map((page, index) => (
              <div key={index}>
                <h1 className=" font-bold">Page {index + 1}:</h1>
                {page?.panel?.map((panel, index2) => (
                  <p className="" key={index2}>
                    <span className="text-[#2B8CFF] ">Panel {index2 + 1}:</span> {panel}{" "}
                  </p>
                ))}
                <p className=" uppercase font-semibold">{page.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        className={`${
          template ? "w-[60%]" : "w-[100%]"
        } " duration-700 transition-width flex flex-col p-4   rounded-3xl " `}
      >
        <div className="flex flex-row w-full justify-between items-center border-b border-[#D8D8D8] pb-4">
          <h3 className="text-[28px] font-bold">Recommended Templates</h3>
          <Link
            className="bg-[#2B8CFF] text-center py-2 w-[15%] rounded-3xl text-white"
            href={"editor"}
          >
            {" "}
            Continue
          </Link>
        </div>
        <div
          className={` ${
            template ? "grid-cols-3" : sidebar ? "grid-cols-5" : "grid-cols-6"
          } grid  gap-4 pt-4 overflow-y-auto h-[800px] `}
        >
          {items.map((item, index) => (
            <TemplateCard key={index} item={item} setTemplate={setTemplate} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ChooseTemplatePage;
