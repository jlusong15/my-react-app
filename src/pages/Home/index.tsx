import myImage from "@assets/images/jenna.jpg"
import aboutBg from "@assets/images/about.jpg"
import homeBg from "@assets/images/home.jpg"
import PageLayout from "@/components/PageLayout"

export default function Home() {
	return (
		<PageLayout>
			<section
				id="home"
				className="h-[calc(100vh-64px)] bg-cover bg-center flex items-center justify-end px-8"
				style={{
					backgroundImage: `url(${homeBg})`,
				}}
			>
				<div className="max-w-xl text-center sm:text-right opacity-0 animate-[fadeIn_1s_ease-out_forwards]">
					<span className="text-xl sm:text-4xl md:text-6xl font-bold mb-4 text-primary">Hello World!</span>
					<p className="text-sm sm:text-lg md:text-xl text-gray-500">
						This is Jennifer Bautista's test app built on React Next.js
					</p>
					<a
						href="#about-me"
						className="inline-block mt-6 px-6 py-3 bg-primary text-white rounded-md hover:bg-secondary-foreground transition cursor-pointer"
					>
						About Me
					</a>
				</div>
			</section>
			<section
				id="about-me"
				className="h-[calc(100vh-64px)] bg-cover bg-left flex items-center px-8 bg-gray-200 bg-no-repeat"
				style={{
					backgroundImage: `url(${aboutBg})`,
				}}
			>
				<div className="max-w-xl text-center sm:text-left opacity-0 animate-[fadeIn_1s_ease-out_forwards]">
					<img src={myImage} alt="jenna" width={150} height={150} className="rounded-[100%] mb-2 m-auto sm:m-0" />
					<h1 className="text-xl sm:text-2xl text-primary">Jennifer Bautista</h1>
					<h2 className="text-sm sm:text-lg text-secondary-foreground">
						Frontend Developer | Software Engineer | UI/UX Developer
					</h2>
					<h3 className="text-sm sm:text-lg text-gray-500">Angular • React</h3>
					<p className="text-xs sm:text-lg">
						Motivated Frontend Developer with 15+ years of experience in frontend development and UI/UX, including 9+
						years building scalable, user-centric web applications using React and Angular. Experienced in agile
						development, collaborating with cross-functional teams, and delivering high-performance, maintainable code.
					</p>
				</div>
			</section>
		</PageLayout>
	)
}
