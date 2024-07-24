function ArrowIcon() {
    return (
        <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
                fill="currentColor"
            />
        </svg>
    );
}

export default function Projects() {
    return (
        <>
            <section>
                <h1 className="mb-8 text-3xl font-semibold tracking-tighter">
                    Handwritten digits recognizer
                </h1>
                <p>
                    An AI project that lets you draw a digit and it tries to
                    recognize it.
                </p>
                <ul className="font-sm mt-8 mb-8 flex flex-col space-x-0 space-y-2 text-neutral-600 sm:flex-row sm:space-x-4 sm:space-y-0 dark:text-neutral-300">
                    <li>
                        <a
                            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://github.com/hasanghorbel/handwritten-digits-recognizer"
                        >
                            <ArrowIcon />
                            <p className="ml-2 h-7">github</p>
                        </a>
                    </li>
                </ul>
            </section>
            <section>
                <h1 className="mb-8 text-3xl font-semibold tracking-tighter">
                Youtube playlist downloader
                </h1>
                <p>
                    A program that lets you download a playlist from youtube.
                </p>
                <ul className="font-sm mt-8 mb-8 flex flex-col space-x-0 space-y-2 text-neutral-600 sm:flex-row sm:space-x-4 sm:space-y-0 dark:text-neutral-300">
                    <li>
                        <a
                            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://github.com/hasanghorbel/yt-playlist-downloader"
                        >
                            <ArrowIcon />
                            <p className="ml-2 h-7">github</p>
                        </a>
                    </li>
                </ul>
            </section>
            <section>
                <h1 className="mb-8 text-3xl font-semibold tracking-tighter">
                Google Image Downloader
                </h1>
                <p>
                    A web parsing program that downloads images from google using selenium based on a search key.
                </p>
                <ul className="font-sm mt-8 mb-8 flex flex-col space-x-0 space-y-2 text-neutral-600 sm:flex-row sm:space-x-4 sm:space-y-0 dark:text-neutral-300">
                    <li>
                        <a
                            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://github.com/hasanghorbel/google-image-downloader"
                        >
                            <ArrowIcon />
                            <p className="ml-2 h-7">github</p>
                        </a>
                    </li>
                </ul>
            </section>
            <section>
                <h1 className="mb-8 text-3xl font-semibold tracking-tighter">
                    Anime Discord Bot
                </h1>
                <p>
                    An anime generator bot in discord.
                </p>
                <ul className="font-sm mt-8 mb-8 flex flex-col space-x-0 space-y-2 text-neutral-600 sm:flex-row sm:space-x-4 sm:space-y-0 dark:text-neutral-300">
                    <li>
                        <a
                            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://github.com/hasanghorbel/anime-discord-bot"
                        >
                            <ArrowIcon />
                            <p className="ml-2 h-7">github</p>
                        </a>
                    </li>
                </ul>
            </section>
            <section>
                <h1 className="mb-8 text-3xl font-semibold tracking-tighter">
                    League Discord Bot
                </h1>
                <p>
                    A guessing game of champions in the game league of legends.
                </p>
                <ul className="font-sm mt-8 mb-8 flex flex-col space-x-0 space-y-2 text-neutral-600 sm:flex-row sm:space-x-4 sm:space-y-0 dark:text-neutral-300">
                    <li>
                        <a
                            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://github.com/hasanghorbel/league-discord-bot"
                        >
                            <ArrowIcon />
                            <p className="ml-2 h-7">github</p>
                        </a>
                    </li>
                </ul>
            </section>
            <section>
                <h1 className="mb-8 text-3xl font-semibold tracking-tighter">
                    Simple ransomware
                </h1>
                <p>
                    A program that lets you encrypt and decrypt a directory. For educational reasons only!
                </p>
                <ul className="font-sm mt-8 mb-8 flex flex-col space-x-0 space-y-2 text-neutral-600 sm:flex-row sm:space-x-4 sm:space-y-0 dark:text-neutral-300">
                    <li>
                        <a
                            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://github.com/hasanghorbel/simple-ransomware"
                        >
                            <ArrowIcon />
                            <p className="ml-2 h-7">github</p>
                        </a>
                    </li>
                </ul>
            </section>
        </>
    );
}
