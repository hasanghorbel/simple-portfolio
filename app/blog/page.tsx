import Link from "next/link";

export default function Blog() {
    return (
        <>
        <section>
            <Link className="flex flex-col space-y-1 mb-4" href="">
                <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
                    <p className="text-neutral-600 dark:text-neutral-400 w-[120px] tabular-nums">
                        2-2-2024
                    </p>
                    <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                        How to make a react app?
                    </p>
                </div>
            </Link>
            </section>
            <section>
            <Link className="flex flex-col space-y-1 mb-4" href="">
                <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
                    <p className="text-neutral-600 dark:text-neutral-400 w-[120px] tabular-nums">
                        13-7-2024
                    </p>
                    <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                        How to kill urself?
                    </p>
                </div>
            </Link>
        </section>
        </>
    );
}
