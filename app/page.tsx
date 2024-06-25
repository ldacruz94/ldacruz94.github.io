import Link from "next/link";

interface BadgeProps {
  href: string;
  children?: React.ReactNode;
}

function Badge({ href, children } : BadgeProps) {
  return (
    <a
      href={href}
      target="_blank"
      className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded p-1 text-sm inline-flex items-center leading-4 text-neutral-900 dark:text-neutral-100 no-underline"
    >
      {children}
    </a>
  );
}


export default function Home() {
  return (
    <section>
      <div className='flex items-center mb-10 justify-start font-medium text-2xl mb-8 tracking-tighter'>
        <h1 className="text-2xl mt-2 font-bold">Hi there! I&apos;m Lucas Da Cruz</h1> 
        <div className="animate-waving-hand text-3xl">👋</div>
      </div>
      <div className="text-lg dark:prose-invert">
        <p className="prose prose-neutral dark:prose-invert text-lg">
          I&apos;m a Software Engineer who is joyfully adventuring through the world of software, constantly learning new things.
          I currently <Link href="/work">work</Link> for <Badge href="https://www.ecolab.com/">Ecolab</Badge> as a Software Engineer 
          and <Badge href="https://www.torchlight.care/">Torchlight</Badge> as a contractor.
        </p>
      </div>
      <div className="prose prose-neutral dark:prose-invert text-lg">
        <p>
          I&apos;m getting ready to write some educational content via my blog on software engineering, so stay tuned!
        </p>
      </div>
    </section>
  )
}
