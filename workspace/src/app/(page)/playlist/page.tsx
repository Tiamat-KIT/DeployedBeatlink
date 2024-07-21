"use client"
import NavBar from "@/components/NavBar"
import type React from "react"
import { useEffect } from "react"
import PlaylistMenu from "../../../components/playlist-menu"

const Page: React.FC = () => {
	useEffect(() => {
		const CopyUrlButton = document.getElementById("copy-url")

		const HandleCopyUrl = () => {
			if (!CopyUrlButton) return
			// data-urlの値を取得
			const Url = CopyUrlButton.getAttribute("data-url")
			if (!Url) return

			// クリップボードにコピー
			navigator.clipboard
				.writeText(Url)
				.then(() => {
					// フラッシュメッセージ表示
					const SuccessMsg = document.querySelector(
						".success-msg"
					) as HTMLElement
					if (SuccessMsg) {
						SuccessMsg.style.display = "block"
						SuccessMsg.style.opacity = "0"

						// フェードイン
						let Opacity = 0
						const FadeIn = setInterval(() => {
							if (Opacity < 1) {
								Opacity += 0.1
								SuccessMsg.style.opacity = Opacity.toString()
							} else {
								clearInterval(FadeIn)
								// フェードアウト
								setTimeout(() => {
									const FadeOut = setInterval(() => {
										if (Opacity > 0) {
											Opacity -= 0.1
											SuccessMsg.style.opacity = Opacity.toString()
										} else {
											clearInterval(FadeOut)
											SuccessMsg.style.display = "none"
										}
									}, 50)
								}, 2000)
							}
						}, 50)
					} else {
						console.error("success-msg 要素が見つかりません")
					}
				})
				.catch((Error) => {
					console.error("クリップボードへのコピーに失敗しました:", Error)
				})
		}

		if (CopyUrlButton) {
			CopyUrlButton.addEventListener("click", HandleCopyUrl)
		}

		// クリーンアップ
		return () => {
			if (CopyUrlButton) {
				CopyUrlButton.removeEventListener("click", HandleCopyUrl)
			}
		}
	}, [])

	return (
		<div style={{ position: "relative" }}>
			<NavBar />
			{/* 本当は楽曲一覧画面に戻る */}
			<a href="/">
				<img
					src="./arrow-image.png"
					style={{ position: "absolute", top: "5vh", left: "30px" }}
					alt="戻る"
				></img>
			</a>
			<div
				className="dropdown dropdown-end"
				style={{ position: "absolute", top: "5vh", right: "30px" }}
			>
				<ul
					tabIndex={0}
					className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
				>
					<li>
						<a href="https://twitter.com">Xで共有</a>
					</li>
					<li>
						<a href="/create">投稿する</a>
					</li>
					<li>
						<button
							id="copy-url"
							data-url="ここにURL"
						>
							リンクをコピー
						</button>
						<div
							className="success-msg"
							style={{
								display: "none",
								position: "fixed",
								width: "300px",
								height: "40px",
								lineHeight: "25px",
								background: "#0e7fff",
								color: "#fff",
								top: "100px",
								left: "-100px",

								borderRadius: "5px",
							}}
						>
							クリップボードにコピーしました
						</div>
					</li>
				</ul>
			</div>
			<div
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					flexDirection: "column",
					margin: "5px",
				}}
			>
				<img
					src="./sample/Himawari.jpg"
					style={{ width: "30%", borderRadius: "10%", marginTop: "10px" }}
					alt="サンプル"
				/>
				<p style={{ fontWeight: "bold", fontSize: "30px" }}>プレイリスト名</p>
			</div>
			<div style={{ marginTop: "10px" }}>
				{/* ここリストで管理したい */}
				<PlaylistMenu isEdit={false} />
				<PlaylistMenu isEdit={false} />
				<PlaylistMenu isEdit={false} />
				<div style={{ width: "100vw", height: 1, background: "gray" }} />
			</div>
			{/* 編集画面に飛ぶリンク貼る */}
			<a
				href="/playlist-edit"
				className="link text-blue-500 hover:text-blue-700"
				style={{ marginLeft: "30px" }}
			>
				プレイリストを編集する
			</a>
		</div>
	)
}

export default Page
