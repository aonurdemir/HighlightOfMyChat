export function onChatListener  (user, message, flags, self, extra) {
	if (message.length > 150) return

	if (extra.customRewardId === 'cf084591-186a-41c7-91e4-27bc043a19f1') {
		if (sounds.indexOf(message) === -1) {
			return
		}

		messageQueue.push({
			func: 'playSound',
			playSound: () => playSound('sounds/' + message.toLowerCase() + '.mp3')
		})
	}

	if (flags.highlighted) {
		messageQueue.push({
			func: 'highlight',
			highlight: () => highlightThisMessage(user, message, extra)
		})
	}
}