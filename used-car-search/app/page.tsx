import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import SearchComponent from "@/components/search-functionality/search";
export default function Home() {
	return (
		<>
		<h1>Welcome to the Used Cars Search</h1>
		<h2 className="py-6">A fun hobby project practicing search functionality through a large amount of used cars posts coming from a CSV file</h2>
		<h3 className="pb-6">Utilized: Python w/ Flask, Elasticsearch, Next.js w/ Typescript and Tailwind, NextUI, and Redux store</h3>
		<h4>To get started: Navigate to the search route</h4>
		</>
	);
}
