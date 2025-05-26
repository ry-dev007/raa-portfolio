"use client";

import Image from "next/image";
import { useState } from "react";
import * as motion from "motion/react-client";

const ProfilePicture = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        delay: 1.2,
        duration: 2,
        scale: { type: "tween" },
      }}
      className="relative h-90 w-1/2 px-60 select-none"
    >
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
            <div className="relative -z-0 h-full w-100 overflow-hidden rounded-full mask-b-from-60% opacity-80">
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

          {/* Back face */}
          <div
            className="flip-card-back absolute h-full w-full"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            <div className="relative -z-0 h-full w-100 overflow-hidden rounded-full mask-b-from-75% opacity-80">
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
    </motion.div>
  );
};

export default ProfilePicture;
