/**
 * YouTube Player
 */
const ytPlayer = () => {

	const tag = document.createElement('script');
	tag.src = "https://www.youtube.com/iframe_api";
	const firstScriptTag = document.getElementsByTagName('script')[0];
	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

	const video = document.querySelector('.js-yt-video');
	const videoId = video.id;

	// YouTube API
	window.onYouTubeIframeAPIReady = () => {

		const player = new YT.Player(videoId, {
			videoId: videoId,
			playerVars: {
				autoplay: 1,
				controls: 0, // コントロールを表示しない
				fs: 0, // 再生ボタンを表示しない
				playsinline: 1, // iOSでインライン再生する
				rel: 0, // 関連動画を表示しない
				modestbranding: 1, // YouTubeロゴを表示しない
				iv_load_policy: 3, // 動画アノテーションを表示しない
				start: 0, // 先頭から何秒から再生するか
			},
			events: {
				'onReady': onPlayerReady,
				'onStateChange': onPlayerStateChange
			}
		});

		// ミュートして再生
		function onPlayerReady(e) {
			e.target.mute();
			e.target.playVideo();
		}

		// 再生終了時、最初から再生（リピート）
		function onPlayerStateChange(e) {
			if (e.data == YT.PlayerState.ENDED) {
				e.target.playVideo();
			}
		}

	}
}

ytPlayer();
