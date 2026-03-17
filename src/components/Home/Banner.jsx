import React from 'react';

const Banner = () => {
  return (
    <div className="relative w-full">
      <div className="w-full overflow-hidden h-[220px] sm:h-[350px] md:h-[420px] lg:h-[520px]">
        <img
          src="/banners/b1.png"
          alt="Banner"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="pb-4 sm:pb-10" />
    </div>
  );
};

export default Banner;