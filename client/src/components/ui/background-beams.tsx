import React from "react";
import { motion } from "framer-motion";

interface BackgroundBeamsProps {
  className?: string;
}

export const BackgroundBeams = React.memo(
  ({ className = "" }: BackgroundBeamsProps) => {
    const beams = Array.from({ length: 50 }, (_, i) => {
      // Generate unique curve paths
      const startX = Math.random() * 100;
      const startY = Math.random() * 100;
      const controlX = Math.random() * 100;
      const controlY = Math.random() * 100;
      const endX = Math.random() * 100;
      const endY = Math.random() * 100;

      return {
        id: i,
        startX,
        startY,
        controlX,
        controlY,
        endX,
        endY,
        duration: 10 + Math.random() * 10,
        delay: Math.random() * 2,
      };
    });

    return (
      <svg
        className={`absolute inset-0 w-full h-full ${className}`}
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="beam-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#18CCFC" stopOpacity="1" />
            <stop offset="50%" stopColor="#6344F5" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#AE48FF" stopOpacity="0" />
          </linearGradient>

          {beams.map((beam) => (
            <motion.path
              key={`beam-${beam.id}`}
              d={`M ${beam.startX} ${beam.startY} Q ${beam.controlX} ${beam.controlY} ${beam.endX} ${beam.endY}`}
              stroke="url(#beam-gradient)"
              strokeWidth="0.5"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{
                pathLength: [0, 1, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: beam.duration,
                delay: beam.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </defs>
      </svg>
    );
  }
);

BackgroundBeams.displayName = "BackgroundBeams";
