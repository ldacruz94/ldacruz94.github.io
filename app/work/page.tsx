import type { Metadata } from 'next';

export const metadata: Metadata = {
  description: 'A summary of my work and where I have contributed to.',
};

export default function WorkPage() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">my work 💻</h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p className='text-lg'>
          Constantly working to improve the state of development wherever I work and building cool stuff! 
          Here are the some great places I&apos;m working and have worked at in the past.
        </p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">Ecolab</h2>
        <p className="prose text-neutral-600 dark:text-neutral-400 text-sm prose">
          Software Engineer, 2022 — Present
        </p>
        <p>
          I joined Ecolab in 2022. Have done a little bit of everything from writing ETL processes,
          to fullstack web development, and currently leading the adoption of DevOps tooling and 
          practices within some of our engineering teams as well as finding new ways to improve DX.
        </p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">Torchlight</h2>
        <p className="prose text-neutral-600 dark:text-neutral-400 text-sm">
          Contractor, 2021 — Present
        </p>
        <p>
          Joined as a contractor in 2021. A little side hustle of mine where I have been writing automation scripts
          to test out the functionality of some of the company&apos;s apps as well as automating manual processes.
        </p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">Constant Contact</h2>
        <p className="prose text-neutral-600 dark:text-neutral-400 text-sm">
          Associate Software Engineer, 2021 — 2022
        </p>
        <p className="prose text-neutral-600 dark:text-neutral-400 text-sm">
          Tier 3 Specialist, 2020 — 2021
        </p>
        <p className="prose text-neutral-600 dark:text-neutral-400 text-sm">
          Compliance Specialist, 2019 — 2020
        </p>
        <p className="prose text-neutral-600 dark:text-neutral-400 text-sm">
          Account Review Specialist, 2018 — 2019
        </p>
        <p className="prose text-neutral-600 dark:text-neutral-400 text-sm">
          Customer Engagement Specialist, 2017 — 2018
        </p>
        <p>
          One of the leaders in the Email Marketing industry and where my journey began into software engineering. I worked as 
          a Technical Support Specialist, Account Review Specialist, promoted to a Compliance Specialist and subsequently a Tier 3 Specialist, 
          to then interning and becoming an Associate Software Engineer.
        </p>
        <p>
          During my time there as an Associate Software Engineer, I worked on developing multiple applications 
          from Java Springboot microservices and billing processes to React SPAs. In some of my previous roles I 
          developed PHP web apps and automated previously manual day-to-day tasks for both myself and my colleagues using both Java and Python.
        </p>
        </div>
    </section>
  );
}