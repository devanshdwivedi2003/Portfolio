import React from 'react'
import { TracingBeamDemo } from './tracingProjectBeam';
import { SectionHeading } from './section-heading';


export const Work = () => {
  return (
    <section
      id="projects"
      className="relative w-full flex flex-col overflow-hidden pt-24"
    >
      <div className="mb-16">
        <SectionHeading title="PROJECTS" subtitle="A few things I've built recently" />
      </div>
      <TracingBeamDemo />
    </section>
  );
};
