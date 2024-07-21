import { useRouter } from "next/navigation"
import type React from "react"

interface CardProps {
	musicUrl: string
	commentTitle: string
}

const IframeCard: React.FC<CardProps> = ({ musicUrl, commentTitle }) => {
	const Router = useRouter()

	const HandleLinkClick = () => {
		Router.push("/show")
	}

	return (
		<div className="card bg-base-100 w-auto shadow-xl m-4 rounded-xl overflow-hidden">
			<iframe
				className="rounded-lg"
				style={{ borderRadius: "12px" }}
				src={musicUrl}
				width="100%"
				height="152"
				allowFullScreen
				allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
				loading="lazy"
				title="Spotify Embed"
			/>
			<div className="card-body bg-gray-200 text-black p-4">
				<a
					href="#"
					className="text-sm text-blue-500 hover:underline"
					onClick={HandleLinkClick}
				>
					{commentTitle}
				</a>
			</div>
		</div>
	)
}

export default IframeCard
