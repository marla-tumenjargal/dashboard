"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const navItems = [
  { name: "bio", href: "/bio" },
  { name: "projects", href: "/projects" },
  { name: "writing", href: "/writing" },
];

const externalLinks = [
  { name: "resume", href: "./resume.pdf" },
  { name: "linkedin", href: "https://www.linkedin.com/in/marla-tumenjargal/" },
  { name: "github", href: "https://github.com/marla-tumenjargal" },
];

export default function Navbar() {
  const pathname = usePathname();
  
  return (
    <>
      <nav
        className="
          flex flex-col
          pt-18.5
          space-y-2
          pl-10
          font-hk      /* Apply HK Grotesk */
        "
      >
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center space-x-2 transition-colors"
            >
              {/* Dot indicator */}
              <div
                className={`h-1 w-1 rounded-full ${
                  isActive ? "bg-black" : "bg-transparent"
                }`}
              />
              {/* Text + ✿ if active */}
              <span
                className={`text-sm font-medium relative transition-colors ${
                  isActive ? "text-black" : "text-gray-400"
                } after:content-[''] after:absolute after:w-0 after:h-px after:bottom-0 after:left-0 after:bg-black after:transition-opacity after:duration-150 after:opacity-0 hover:after:w-full hover:after:opacity-100 hover:after:transition-all hover:after:duration-200`}
              >
                {item.name} {isActive}
              </span>
            </Link>
          );
        })}
        
        {/* Divider with flower icon */}
        <div className="pt-3 pb-3 pr-6 flex justify-center">
          <span className="text-sm font-medium text-black">✿</span>
        </div>
        
        {/* External links */}
        {externalLinks.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            target={item.href.startsWith("http") ? "_blank" : undefined}
            rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="flex items-center space-x-2 transition-colors"
          >
            {/* Dot indicator (transparent for external links) */}
            <div className="h-2 w-2 rounded-full bg-transparent" />
            {/* Text */}
            <span className="text-sm font-medium text-gray-400 hover:text-black transition-colors relative after:content-[''] after:absolute after:w-0 after:h-px after:bottom-0 after:left-0 after:bg-black after:transition-opacity after:duration-150 after:opacity-0 hover:after:w-full hover:after:opacity-100 hover:after:transition-all hover:after:duration-200">
              {item.name}
            </span>
          </Link>
        ))}
      </nav>
      
    </>
  );
}


// 'use client';

// import { useState, useEffect } from 'react';
// import Image from 'next/image';

// export default function Page() {
//   const [showInfo, setShowInfo] = useState(false);
//   const [selectedArtwork, setSelectedArtwork] = useState<number | null>(null);
//   const [isLoaded, setIsLoaded] = useState(false);

//   useEffect(() => {
//     setIsLoaded(true);
//   }, []);

//   // All 50 artworks with their details
//   const artworks = [
//     { title: "Flying", artist: "Matt King", role: "Illustrator", location: "London" },
//     { title: "Bzz", artist: "Adamhub Morton-Delaney", role: "Art Director", location: "London" },
//     { title: "Diptera-la", artist: "James Crosslily", role: "Art Director", location: "Amsterdam" },
//     { title: "Salami Solar System", artist: "Carol Bergin", role: "Creative", location: "London" },
//     { title: "Man Eating Salami Sandwich", artist: "Georgianna Gregori", role: "Art Director", location: "Minneapolis" },
//     { title: "Echo (Girl as Jar)", artist: "Charlotte Barry", role: "Print Designer", location: "London" },
//     { title: "Illusion", artist: "Alexander Baldwin", role: "Fashion Designer", location: "London" },
//     { title: "Untitled", artist: "Mark Jessett", role: "Abstract Artist", location: "United Kingdom" },
//     { title: "Pebble People", artist: "Jack Beveridge", role: "Creative", location: "London" },
//     { title: "Beach comb", artist: "Amy Webster", role: "Designer", location: "London" },
//     { title: "Video Link", artist: "Rory Cahil", role: "Motion designer & digital artist", location: "London" },
//     { title: "Untitled", artist: "Leanne Bentley", role: "Graphic Designer", location: "Amsterdam" },
//     { title: "Whisper Lisp", artist: "Harry Grundy", role: "Designer", location: "London" },
//     { title: "Contours for a new continent", artist: "Rhys George", role: "Graphic Designer", location: "London" },
//     { title: "Spindelvev", artist: "Lauren Doherty", role: "Graphic Designer", location: "Oslo" },
//     { title: "Water Polo", artist: "Gabriella Marsh", role: "Illustrator & Animator", location: "London" },
//     { title: "Touch me, right there", artist: "Tom Bird", role: "Art Director", location: "Amsterdam" },
//     { title: "Setting Sun", artist: "Ruby Smith", role: "Design Strategist", location: "London" },
//     { title: "&ひそひそ Hiso Hiso*", artist: "Alice Tosey", role: "Graphic Designer", location: "London" },
//     { title: "Interstellar", artist: "Robbert Maruanaija", role: "Creative", location: "Amsterdam" },
//     { title: "Shade", artist: "Ross Norman", role: "Graphic Designer", location: "UK" },
//     { title: "Gladiators", artist: "Sam Quentin", role: "Creative", location: "London" },
//     { title: "Two = Three", artist: "Marcus Walters", role: "Designer & Illustrator", location: "Gloucestershire" },
//     { title: "ME + YOU", artist: "Holly St Clair", role: "Illustrator", location: "London" },
//     { title: "Me", artist: "Jenny Dyson", role: "Artist", location: "London" },
//     { title: "Bad Geometry", artist: "Jack Samels", role: "Artist", location: "Minneapolis" },
//     { title: "Say it with flowers", artist: "Grace Lister", role: "Graphic Designer", location: "London" },
//     { title: "Edge", artist: "Sarah Ee", role: "Illustrator", location: "London" },
//     { title: "Untitled", artist: "Ellie Pritchard", role: "Designer", location: "London" },
//     { title: "Nothing he can do will stop the tap dripping", artist: "Catherine Norris", role: "Spoken Word Artist", location: "United Kingdom" },
//     { title: "Tombée dans l'eau", artist: "Caroline Busson", role: "Graphic Designer", location: "Amsterdam" },
//     { title: "Blue Lanes", artist: "Olivia Page", role: "Designer", location: "London" },
//     { title: "Positive/Negative Space", artist: "Georgia Herman", role: "Designer", location: "London" },
//     { title: "pre-construction", artist: "Josie Tucker", role: "Designer", location: "London" },
//     { title: "Untitled", artist: "Thom Swann", role: "Art Direction & Design", location: "Antwerp" },
//     { title: "Whispered Blubs", artist: "Sophie Molyneux", role: "Artist", location: "Brighton" },
//     { title: "I heart eu", artist: "Andrew Holland", role: "Designer", location: "Brighton" },
//     { title: "Themesong", artist: "Enrica Masi", role: "Designer", location: "Amsterdam" },
//     { title: "We may be separated politically, but through the earth's grounds' we are one", artist: "Charlotte Allen", role: "Designer", location: "Amsterdam" },
//     { title: "Green", artist: "Lucille Fenouil", role: "Graphic Designer", location: "Amsterdam" },
//     { title: "Love is in the making", artist: "Panos Kostouros", role: "Director", location: "Amsterdam" },
//     { title: "Baked Beans", artist: "Charlotte Fountaine", role: "Designer", location: "London" },
//     { title: "Thinking 'bout them beans", artist: "Billy Osborne", role: "Designer", location: "Amsterdam" },
//     { title: "Bellis perennis", artist: "Vincent Rang", role: "Art Director", location: "Amsterdam" },
//     { title: "oopsie daisy", artist: "Rosa Fisher", role: "Animator", location: "London" },
//     { title: "Wow Lion", artist: "Alice Bowsher", role: "Illustrator", location: "London" },
//     { title: "The Cat", artist: "Melanie Hyams", role: "Writer", location: "Amsterdam" },
//     { title: "Not Guilt", artist: "Filip Fröhlich", role: "Illustrator", location: "Nuremberg" },
//     { title: "I'll Just Stay Here, Thank You", artist: "Naomi Anderson-Subryan", role: "Illustrator", location: "London" },
//     { title: "Ratpot", artist: "Joseph Melhuish", role: "Illustrator & Animator", location: "London" }
//   ];

//   return (
//     <>
//       <div className="min-h-screen bg-gray-100 flex items-center justify-center p-8" style={{ fontFamily: 'Times New Roman, serif' }}>
//         {/* Header */}
//         <div className="absolute top-0 left-0 right-0 flex justify-between items-center p-6 z-30">
//           {/* Location text - top left */}
//           <div className="text-sm text-gray-600">
//             san francisco // salt lake city
//           </div>
          
//           {/* Social links - top right */}
//           <div className="flex space-x-6">
//             <a 
//               href="https://linkedin.com" 
//               className="text-sm text-gray-600 hover:text-gray-800 relative group transition-colors duration-200"
//             >
//               linkedin
//               <span className="absolute bottom-0 left-0 w-0 h-px bg-black transition-all duration-300 group-hover:w-full"></span>
//             </a>
//             <a 
//               href="https://github.com" 
//               className="text-sm text-gray-600 hover:text-gray-800 relative group transition-colors duration-200"
//             >
//               github
//               <span className="absolute bottom-0 left-0 w-0 h-px bg-black transition-all duration-300 group-hover:w-full"></span>
//             </a>
//           </div>
//         </div>

//         <div className="relative w-[900px] h-[900px] flex items-center justify-center">
//           {/* Circle container for artworks */}
//           <div className="relative w-[800px] h-[800px] rounded-full">
//             {/* Generate 50 artwork placeholders */}
//             {artworks.map((artwork, i) => {
//               const angle = (i / 50) * 2 * Math.PI - Math.PI / 2; // Start from top
//               const radius = 380; // Increased distance from center to prevent overlap
//               const x = Math.cos(angle) * radius;
//               const y = Math.sin(angle) * radius;
//               const rotation = (angle * 180 / Math.PI) + 90;
              
//               return (
//                 <div
//                   key={i}
//                   className={`absolute w-12 h-16 bg-sky-300 border border-gray-300 cursor-pointer hover:bg-sky-400 transition-all duration-300 group ${
//                     selectedArtwork === i ? 'ring-2 ring-blue-500 scale-110' : ''
//                   } ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
//                   style={{
//                     left: `calc(50% + ${x}px - 24px)`, // Adjusted for new width
//                     top: `calc(50% + ${y}px - 32px)`,  // Adjusted for new height
//                     transform: `rotate(${rotation}deg) ${selectedArtwork === i ? 'scale(1.1)' : ''}`,
//                     transformOrigin: 'center',
//                     transitionDelay: `${i * 20}ms`
//                   }}
//                   onClick={() => setSelectedArtwork(selectedArtwork === i ? null : i)}
//                   title={`${artwork.title} by ${artwork.artist}`}
//                 >
//                   {/* Tooltip on hover */}
//                   <div className="absolute invisible group-hover:visible bg-black text-white text-xs rounded px-2 py-1 whitespace-nowrap z-50 pointer-events-none"
//                        style={{
//                          left: '50%',
//                          top: '-70px',
//                          transform: 'translateX(-50%) rotate(-' + rotation + 'deg)',
//                          transformOrigin: 'center bottom'
//                        }}>
//                     <div className="font-semibold">{artwork.title}</div>
//                     <div>by {artwork.artist}</div>
//                     <div className="text-gray-300">{artwork.role}, {artwork.location}</div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//           {/* Selected artwork details */}
//           {selectedArtwork !== null && (
//             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg z-20 max-w-md">
//               <button 
//                 onClick={() => setSelectedArtwork(null)}
//                 className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl"
//               >
//                 ×
//               </button>
//               <h3 className="text-xl font-bold mb-2">{artworks[selectedArtwork].title}</h3>
//               <p className="text-gray-600 mb-1">by {artworks[selectedArtwork].artist}</p>
//               <p className="text-gray-500 text-sm mb-3">{artworks[selectedArtwork].role}</p>
//               <p className="text-gray-500 text-sm">{artworks[selectedArtwork].location}</p>
//               <div className="mt-4 w-full h-32 bg-sky-300 flex items-center justify-center text-gray-600">
//                 Artwork #{selectedArtwork + 1}
//               </div>
//             </div>
//           )}
//           <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center max-w-lg z-10 bg-gray-100 bg-opacity-90 p-6 rounded-lg">
//             {!showInfo ? (
//               <>
//                 <h1 className="italic text-3xl mb-4 text-gray-800">
//                   Whispers
//                 </h1>
//                 <p className="text-base leading-relaxed mb-4 text-gray-600">
//                   is a sequential art game; a chain of fifty contributors creating fifty interlinked original artworks.
//                 </p>
//                 <button 
//                   onClick={() => setShowInfo(true)}
//                   className="text-sm italic text-gray-500 underline cursor-pointer hover:text-gray-700"
//                 >
//                   More info
//                 </button>
//               </>
//             ) : (
//               <>
//                 <h2 className="text-2xl font-bold mb-4 text-gray-800">About Whispers</h2>
//                 <div className="text-sm leading-relaxed text-gray-600 space-y-3">
//                   <p>
//                     Whispers is a sequential art game; a chain of fifty contributors creating fifty interlinked original artworks. 
//                     Beginning with an original image made by the first participant, one by one each contributor is shown only the 
//                     artwork created by the person that came before them. They then create their own artwork in response, taking as 
//                     much or as little inspiration from the previous image as they want.
//                   </p>
//                   <p>
//                     The imagery is shaped by each contributor's unique creative vision, creating a series of images that morph into 
//                     one another, picking up and then shedding different themes along the way. The fifty contributors include fine 
//                     artists, illustrators, fashion designers, directors and anyone else who was keen to play.
//                   </p>
//                   <p>
//                     If you're interested in playing in the next round of Whispers, please get in contact - {' '}
//                     <a href="mailto:letsplaywhispers@gmail.com" className="text-blue-600 underline hover:text-blue-800">
//                       letsplaywhispers@gmail.com
//                     </a>
//                   </p>
//                 </div>
//                 <button 
//                   onClick={() => setShowInfo(false)}
//                   className="text-sm italic text-gray-500 underline cursor-pointer hover:text-gray-700 mt-4"
//                 >
//                   Back
//                 </button>
//               </>
//             )}
//           </div>
          
//           {/* Footer */}
//           <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 text-sm text-gray-500 text-center">
//             Curation by Barbara Ryan • Website by Ben West
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }