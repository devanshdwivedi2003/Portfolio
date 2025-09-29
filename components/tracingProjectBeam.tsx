"use client";
import React from "react";

import { twMerge } from "tailwind-merge";
import { TracingBeam } from "./ui/tracing-beam";
import Image from "next/image";

export function TracingBeamDemo() {
  return (
    <TracingBeam className="px-6">
      <div className="max-w-2xl mx-auto antialiased pt-14">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-40">
            <p className={twMerge("text-xl mb-4 font-bold text-white")}>
              {item.title}
            </p>

            <div className="text-md text-white  prose prose-sm dark:prose-invert">
              {item?.image && (
                <Image
                  src={item.image}
                  alt="blog thumbnail"
                  width={1000}
                  height={1000}
                  className="rounded-lg mb-10 object-cover"
                />
              )}
              {item.description}
              <br />
              <button className="text-white text-lg border-white border-2 font-semibold rounded-full px-6 py-1  ">
                <a href={item.link}>Live</a>
              </button>
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}

const dummyContent = [
  {
    title: "City Cruise",
    description: (
      <>
        <p>
          I developed a secure and scalable car rental platform using MongoDB,
          Express.js, React, and Node.js, incorporating JWT-based user
          authentication and role-based access control for both admins and
          users. The backend was built following RESTful API design principles,
          while React Hooks and the Context API were used for efficient state
          management on the frontend. To enhance usability, I designed an admin
          dashboard that enables inventory management, including adding,
          editing, and deleting cars, as well as overseeing all user bookings.
          Media delivery was optimized with ImageKit, ensuring fast-loading,
          high-quality car images with responsive thumbnails. Additionally, I
          implemented strong security measures such as encrypted password
          storage using bcrypt, protected API routes, and stateless JWT
          validation to safeguard user data and platform integrity.
        </p>
      </>
    ),
    link: "https://city-cruise.vercel.app/",
    image:
      "https://images.unsplash.com/photo-1698907388777-237c13c7a084?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGNhciUyMGNpdHklMjBjcnVpc2V8ZW58MHx8MHx8fDA%3D",
  },
  {
    title: "ShadZen",
    description: (
      <>
        <p>
          I built a modern, responsive dashboard application using Next.js and
          the ShadCN UI component library, leveraging dynamic routing and
          server-side rendering (SSR) in Next.js to achieve optimized
          performance and improved SEO. For styling, I combined Tailwind CSS
          with ShadCN to enable flexible customization and easy theming across
          the application. I also designed and integrated reusable components
          such as tables, modals, form inputs, and charts, following best
          practices to ensure modularity and scalability. Finally, I deployed
          the application on Vercel, enabling seamless CI/CD workflows and
          reliable production hosting.
        </p>
      </>
    ),
    link: "https://shad-zen-3.vercel.app/",
    image:
      "https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZGFzaGJvYXJkfGVufDB8fDB8fHww",
  },
  {
    title: "Awwards Video Game ",
    description: (
      <>
        <p>
          I developed a frontend application using React, delivering a
          responsive and dynamic user experience. To achieve a modern and
          efficient design with minimal CSS overhead, I utilized Tailwind CSS
          for custom styling. Additionally, I integrated advanced animations and
          transitions with GSAP and Framer Motion, enhancing user engagement and
          creating a highly interactive interface.
        </p>
      </>
    ),
    link: "https://awwards-video-game.vercel.app/",
    image:
      "https://images.unsplash.com/photo-1640301133815-4bec64fca33f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHZpZGVvJTIwZ2FtZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    title: "Ochi Project",
    description: (
      <>
        <p>
          I created a frontend application with React, focusing on delivering a
          fluid and responsive user interface. Tailwind CSS was used to
          implement sleek, custom styling, ensuring a clean design while keeping
          the CSS footprint minimal. To further elevate the user experience, I
          incorporated GSAP and Framer Motion for smooth animations and
          transitions, adding interactivity and enhancing overall engagement.
        </p>
      </>
    ),
    link: "https://ochi-project-jade.vercel.app/",
    image:
      "https://images.unsplash.com/photo-1637939910009-976060f197b4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fG9jaGklMjBwcm9qZWN0fGVufDB8fDB8fHww",
  },
  
];
