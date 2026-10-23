import React from "react";

// The boxed, hover-filling heading style used by every section
export const SectionHeading = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) => {
  return (
    <div className="relative z-10 flex flex-col items-center justify-center text-center">
      <h2 className="relative px-10 md:px-16 py-4 md:py-5 overflow-hidden font-serif tracking-[0.3em] text-2xl md:text-3xl font-bold text-gray-900 bg-gray-200 border border-gray-900 rounded-lg shadow-inner group cursor-default">
        <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
        <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
        <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-900 group-hover:h-full ease"></span>
        <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-900 group-hover:h-full ease"></span>
        <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-black opacity-0 group-hover:opacity-100"></span>
        <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
          {title}
        </span>
      </h2>
      {subtitle && (
        <p className="mt-5 text-sm md:text-base text-neutral-400">{subtitle}</p>
      )}
    </div>
  );
};
