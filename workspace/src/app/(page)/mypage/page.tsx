"use client"
import NavBar from "../../../components/NavBar"
import NameId from "../../../components/name-id"
import PostsView from "../../../components/posts-view"

const page = () => {
	return (
		<div className="outer-container h-screen bg-white">
			<NavBar />
			<div
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					flexDirection: "column",
				}}
			>
				<NameId
					name="名前"
					id="id"
				/>
				<PostsView />
			</div>
		</div>
	)
}

export default page
