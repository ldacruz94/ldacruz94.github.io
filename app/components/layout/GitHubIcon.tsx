import Link from "next/link";
import { FaGithub } from "react-icons/fa";


export const GitHubIcon = ( { className='' } ) => {
    return (
        <div className={className}>
            <Link id='github' href="https://github.com/ldacruz94" className="text-lg hover:text-neutral-800 dark:hover:text-neutral-200" target='_blank'>
                <FaGithub aria-label="GitHub" size='1.5em' />
            </Link>
        </div>
    );
}