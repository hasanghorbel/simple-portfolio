export default function CodingHub() {
    return (
        <>
            <section>
                <h1 className="mb-8 text-3xl font-semibold tracking-tighter">
                    Project Euler
                </h1>
                <p>
                    Project Euler is a series of challenging
                    mathematical/computer programming problems that will require
                    more than just mathematical insights to solve.
                </p>
                <ul className="font-sm mt-8 mb-8 flex flex-col space-x-0 space-y-2 text-neutral-600 sm:flex-row sm:space-x-4 sm:space-y-0 dark:text-neutral-300">
                    <li>
                        <a
                            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://github.com/hasanghorbel/project-euler"
                        >
                            <p className="ml-2 h-7">my solutions {"->"} </p>
                        </a>
                    </li>
                </ul>
            </section>
            <section>
                <h1 className="mb-8 text-3xl font-semibold tracking-tighter">
                    Leetcode
                </h1>
                <p>
                    LeetCode is an online platform for coding interview
                    preparation. The service provides coding and algorithmic
                    problems intended for users to practice coding.
                </p>
                <ul className="font-sm mt-8 mb-8 flex flex-col space-x-0 space-y-2 text-neutral-600 sm:flex-row sm:space-x-4 sm:space-y-0 dark:text-neutral-300">
                    <li>
                        <a
                            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://github.com/hasanghorbel/leetcode"
                        >
                            <p className="ml-2 h-7">my solutions {"->"} </p>
                        </a>
                    </li>
                </ul>
            </section>
            <section>
                <h1 className="mb-8 text-3xl font-semibold tracking-tighter">
                    Advent of code
                </h1>
                <p>
                    Advent of Code is an annual set of Christmas-themed
                    computer programming challenges that follow an Advent
                    calendar.
                </p>
                <ul className="font-sm mt-8 mb-8 flex flex-col space-x-0 space-y-2 text-neutral-600 sm:flex-row sm:space-x-4 sm:space-y-0 dark:text-neutral-300">
                    <li>
                        <a
                            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://github.com/hasanghorbel/advent-of-code"
                        >
                            <p className="ml-2 h-7">my solutions {"->"} </p>
                        </a>
                    </li>
                </ul>
            </section>
        </>
    );
}
