"use client"
import { useRouter } from "next/navigation"
import NavBar from "../../../components/NavBar"
import IframeCard from "../../../components/ifamecard"
import useTracks from "@/hooks/useTracks"
import useGemini from "@/hooks/useGemini"

const Page = () => {
	const Router = useRouter()
	const {data,isLoading} = useTracks("キタニタツヤ",10)

	return (
		<div className="outer-container h-screen bg-white">
			<NavBar />
			<div className="flex justify-center px-5 safari-hack">
				<div className="max-w-screen-lg p-8">
					<div className="flex flex-wrap justify-center">
						{!isLoading ? data?.tracks.map((Card, Index) => {
							// eslint-disable-next-line react-hooks/rules-of-hooks
							const description = useGemini(`この曲について、20文字ほどでコメントしてください「${Card.name}/キタニタツヤ」`)

						return (
							<IframeCard
								key={Index}
								musicUrl={`https://open.spotify.com/embed/track/${Card.id}?utm_source=generator`}
								commentTitle={description.substring(0,15) + "...."}
							/>
						)}): "Loading..."}
					</div>

					{/*ペジネーション*/}
					<div className="mb-10" />
					<div className="flex justify-center mt-4">
						<div className="join">
							<button className="join-item btn">1</button>
							<button className="join-item btn">2</button>
							<button className="join-item btn btn-disabled">...</button>
							<button className="join-item btn">99</button>
							<button className="join-item btn">100</button>
						</div>
					</div>
					<div className="mb-10" />
				</div>
			</div>
		</div>
	)
}

export default Page
