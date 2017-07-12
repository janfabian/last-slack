module.exports = {
	"lastfm": {
		"apiKey": process.env.LASTFM_API_KEY
	},
	"slack": {
		"url": process.env.SLACK_HOOK_URL,
		"username": "Current track",
		"icon": process.env.ICON || ":mario_luigi_dance:"
	}
}
