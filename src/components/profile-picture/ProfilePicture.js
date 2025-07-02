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
      className="relative mx-auto flex h-48 w-48 items-center justify-center select-none sm:h-64 sm:w-64 md:h-80 md:w-80 lg:h-90 lg:w-90"
    >
      {/* 3D Flip Card Container */}
      <div
        className="flip-card flex h-full w-full items-center justify-center"
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
            className="flip-card-front absolute flex h-full w-full items-center justify-center"
            style={{
              backfaceVisibility: "hidden",
            }}
          >
            <div className="relative -z-0 flex h-full w-full items-center justify-center overflow-hidden rounded-full mask-b-from-60% opacity-80">
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
            className="flip-card-back absolute flex h-full w-full items-center justify-center"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            <div className="relative -z-0 flex h-full w-full items-center justify-center overflow-hidden rounded-full mask-b-from-75% opacity-80">
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
