import { GitHubIcon } from "./GitHubIcon"
import { LinkedInIcon } from "./LinkedInIcon"

export const HamburgerMenu = () => {
    return (
        <div id='hamburger-menu' className="flex block bg-slate-800 rounded-md shadow-md">
            <ul>
                <li className="py-3 px-5"><GitHubIcon /></li>
                <li className="py-3 px-5"><LinkedInIcon /></li>
            </ul>
        </div>
    )
}