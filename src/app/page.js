"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <section className="mx-auto flex max-w-[1600px] items-center justify-center pt-40">
      <div className="relative h-90 w-1/2 px-60">
        {/* 3D Flip Card Container */}
        <div
          className="flip-card h-full w-full"
          onMouseEnter={() => setIsFlipped(true)}
          onMouseLeave={() => setIsFlipped(false)}
          style={{
            perspective: "1000px",
          }}
        >
          {/* Inner container that will do the flipping */}
          <div
            className="flip-card-inner relative h-full w-full"
            style={{
              transition: "transform 0.8s",
              transformStyle: "preserve-3d",
              transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
            }}
          >
            {/* Front face */}
            <div
              className="flip-card-front absolute h-full w-full"
              style={{
                backfaceVisibility: "hidden",
              }}
            >
              <div className="border-primary relative -z-0 h-full w-90 overflow-hidden rounded-full border-2 bg-amber-50 opacity-80">
                <Image
                  fill
                  priority
                  alt="Profile Picture"
                  src="/images/profile-pic.png"
                  style={{
                    objectFit: "contain",
                    objectPosition: "center center",
                  }}
                />
              </div>
            </div>

            {/* Back face */}
            <div
              className="flip-card-back absolute h-full w-full"
              style={{
                backfaceVisibility: "hidden",
                transform: "rotateY(180deg)",
              }}
            >
              <div className="border-primary relative -z-0 h-full w-90 overflow-hidden rounded-full border-2 bg-amber-50 opacity-80">
                <Image
                  fill
                  priority
                  alt="Profile Picture"
                  src="/images/profile-pic-animated.png"
                  style={{
                    objectFit: "contain",
                    objectPosition: "center center",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-1/2">
        <p className="text-primary line mb-4 font-serif text-5xl font-semibold">
          👋 Hi, I’m Rahul Yadav
        </p>

        <p className="text-background max-w-[900px] text-2xl leading-8 dark:text-gray-400">
          I’m a passionate Full-Stack Developer crafting high-performance,
          scalable, and user-centric web applications. From pixel-perfect
          frontends to robust backends, I turn ideas into elegant,
          production-ready solutions. Driven by clean code, intuitive design,
          and the thrill of problem-solving — I build with purpose and
          precision. Let’s create something exceptional.
        </p>
      </div>
    </section>
  );
}
