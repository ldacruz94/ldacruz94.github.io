import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";


export const LinkedInIcon = ( { className='' } ) => {

    return (
        <div className={className}>
            <Link id='linkedin' href="https://www.linkedin.com/in/lucas-da-cruz-992738110/" className="text-lg hover:text-neutral-800 dark:hover:text-neutral-200" target='_blank'>
                <FaLinkedin aria-label="LinkedIn" size='1.5em' />
            </Link>
        </div>
    );

}