const footerLinkClass =
	"flex items-center gap-2 hover:underline hover:underline-offset-4";
const buttonClass =
	"rounded-full border border-solid border-black/[.2] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44";

const BLOG_URL = "https://blog.erons.xyz";
const TICK_URL = "https://tickhq.com";

export default function Home() {
	return (
		<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
			<main className="flex flex-col gap-8 row-start-2 items-center sm:items-start max-w-2xl">
				<div>
					<h1 className="text-4xl font-bold mb-12 text-center">Erons.</h1>

					<div className="flex flex-col gap-6 text-center">
						<p>
							I&apos;m a Software Engineer with a background in Computer
							Science.{" "}
						</p>
						<p>
							When I&apos;m not working for my employer, I work on{" "}
							<a
								href={TICK_URL}
								target="_blank"
								rel="noopener noreferrer"
								className="text-blue-700 font-semibold hover:underline hover:underline-offset-2"
							>
								Tick
							</a>
							, a Software Product I&apos;m building alone.
						</p>
						<p>
							Currently, in my free time, I like to dabble in AI & Cognitive
							Science with free resources online - open courses, books, papers,
							etc.
						</p>
					</div>
				</div>

				<div className="flex gap-4 items-center justify-center w-full">
					<a
						className={buttonClass}
						href={BLOG_URL}
						target="_blank"
						rel="noopener noreferrer"
					>
						Blog
					</a>
					<a
						className={buttonClass}
						href={TICK_URL}
						target="_blank"
						rel="noopener noreferrer"
					>
						Checkout Tick!
					</a>
				</div>
			</main>
			<footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
				<a
					className={footerLinkClass}
					href="https://x.com/erons_xo"
					target="_blank"
					rel="noopener noreferrer"
				>
					Thoughts
				</a>
				<a
					className={footerLinkClass}
					href="https://github.com/Eronmmer"
					target="_blank"
					rel="noopener noreferrer"
				>
					Code
				</a>
				<a
					className={footerLinkClass}
					href="https://linkedin.com/in/eronmmer"
					target="_blank"
					rel="noopener noreferrer"
				>
					LinkedIn
				</a>
				<a
					className={footerLinkClass}
					href="mailto:erons@erons.xyz"
					target="_blank"
					rel="noopener noreferrer"
				>
					Contact
				</a>
			</footer>
		</div>
	);
}
