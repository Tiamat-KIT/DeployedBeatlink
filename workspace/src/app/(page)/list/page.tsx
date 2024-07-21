"use client"
import { useRouter } from "next/navigation"
import NavBar from "../../../components/NavBar"
import IframeCard from "../../../components/ifamecard"
import useTracks from "@/hooks/useTracks"

const Page = () => {
	const Router = useRouter()
	const {data,isLoading} = useTracks("キタニタツヤ",10)

	return (
		<div className="outer-container h-screen bg-white">
			<NavBar />
			<div className="flex justify-center px-5 safari-hack">
				<div className="max-w-screen-lg p-8">
					<div className="flex flex-wrap justify-center">
						{!isLoading ? data?.tracks.map((Card, Index) => (
							<IframeCard
								key={Index}
								musicUrl={`https://open.spotify.com/embed/track/${Card.id}?utm_source=generator`}
								commentTitle={`${Index + 1}個目`}
							/>
						)): "Loading..."}
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
