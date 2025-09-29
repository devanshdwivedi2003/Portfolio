import React from 'react'
import { SparklesCore } from './ui/sparkles';
import { TracingBeamDemo } from './tracingProjectBeam';


export const Work = () => {
  return (
    <div className="relative w-full bg-black flex  flex-col  overflow-hidden ">
      <div className="w-full absolute inset-0 ">
        <SparklesCore
          id="tsparticlesfullpage2"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <div className="flex flex-col items-center justify-center mb-25 ">
        <a
          href="#_"
          className="relative px-16 py-5 overflow-hidden font-serif   text-3xl font-bold text-gray-900 bg-gray-200 border border-gray-900 rounded-lg shadow-inner group"
        >
          <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
          <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
          <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-900 group-hover:h-full ease"></span>
          <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-900 group-hover:h-full ease"></span>
          <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-black opacity-0 group-hover:opacity-100"></span>
          <span className=" relative  transition-colors duration-300 delay-200 group-hover:text-white ease">
            ＰＲＯＪＥＣＴＳ
          </span>
        </a>
      </div>
      <TracingBeamDemo />
    </div>
  );
};

