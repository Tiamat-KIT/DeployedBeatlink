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
				{/* <div style={{ display: "flex", alignItems: "center" }}>
					<h1
						className="w-screen flex justify-center"
						style={{
							fontWeight: "bold",
							fontSize: "30px",
							marginTop: "20px",
							color: "black",
						}}
					>
						マイページ
					</h1> */}
				</div>
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
