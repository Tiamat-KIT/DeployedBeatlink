"use client";
import NavBar from "../../../components/NavBar";
import NameId from "../../../components/name-id";
import PostsView from "../../../components/posts-view";
import IframeCard from "../../../components/ifamecard";
import TopButton from "../../../components/top-button";
import { useRouter } from "next/navigation";
import Recent from "../../../components/recent";

const Page = () => {
	const Router = useRouter();
	const CardData = [
		{
			musicUrl: "https://open.spotify.com/embed/track/54ezuGQj5s0ot4J7ktWb2h?utm_source=generator&theme=0",
			commentTitle: "ずっと好き",
		},
		{
			musicUrl: "https://open.spotify.com/embed/track/12usPU2WnqgCHAW1EK2dfd?utm_source=generator&theme=0",
			commentTitle: "青春！",
		},
		{
			musicUrl: "https://open.spotify.com/embed/track/0nUKU6e9COOCgO5tAUtlST?utm_source=generator&theme=0",
			commentTitle: "かっこいい",
		},
		{
			musicUrl: "https://open.spotify.com/embed/track/7ovUcF5uHTBRzUpB6ZOmvt?utm_source=generator&theme=0",
			commentTitle: "気分が上がる！",
		},
	];

	return (
		<div className="outer-container min-h-screen bg-white flex flex-col">
			<NavBar />
			<div className="max-w-screen-lg w-full p-8">
				<TopButton title="マイページ" />
			</div>

			<div className="flex flex-col items-center flex-1">
				<NameId name="名前" id="id" />
			</div>

			<div className="flex flex-col items-center px-5 safari-hack flex-1">
				<div className="max-w-screen-lg w-full p-8">
					<h2 className="text-left mb-4 text-xl text-black font-bold">最近の投稿</h2>
					<div className="flex flex-wrap justify-center">
						{CardData.map((Card, Index) => (
							<IframeCard
								key={Index}
								musicUrl={Card.musicUrl}
								commentTitle={Card.commentTitle}
							/>
						))}
					</div>

					<div className="mb-10"></div>
					<h2 className="text-left mb-4 text-xl text-black font-bold mb-8">お気に入りの曲</h2>


					<div className="w-full max-w-screen-lg mb-10">
						<iframe
							style={{ borderRadius: "12px" }}
							src="https://open.spotify.com/embed/track/78W4mTLIh4qoLu92W4IQhO?utm_source=generator"
							width="100%"
							height="152"
							allowFullScreen
							allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
							loading="lazy"
						></iframe>
					</div>
					

					{/* 戻るボタン */}
					<div className="flex justify-center mt-4">
						<button
							className="btn btn-outline"
							type="button"
							onClick={() => Router.back()}
						>
							戻る
						</button>
					</div>
					<div className="mb-10"></div>
				</div>
			</div>
		</div>
	);
};

export default Page;
