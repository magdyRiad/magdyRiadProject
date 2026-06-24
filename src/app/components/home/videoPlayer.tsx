"use client";

import { motion } from "framer-motion";

const VideoPlayer = () => {
  return (
    <section className="relative h-screen min-h-[700px] w-full overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source
          src="https://res.cloudinary.com/djtp5oepp/video/upload/v1781770377/magtic1_ozmlza.mp4"
          type="video/mp4"
        />
      </video>

      {/* Overlay */}

      <div className="absolute inset-0 bg-black/60" />

      <div className="absolute inset-0 bg-gradient-to-b from-[#0B1F3A]/10 via-[#0B1F3A]/20 to-[#0B1F3A]" />

      {/* خط متحرك */}

      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        className="absolute bottom-8 left-1/2 z-30 -translate-x-1/2"
      >
        <div className="flex flex-col items-center">
          <p className="text-white text-sm mb-2">Scroll Down</p>

          <div className="h-12 w-[2px] bg-white/70" />
        </div>
      </motion.div>
    </section>
  );
};

export default VideoPlayer;
