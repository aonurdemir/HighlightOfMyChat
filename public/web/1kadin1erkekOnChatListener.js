export function onChatListener  (user, message, flags, self, extra) {
	if (message.length > 150) return

	if (extra.customRewardId === 'b82b17eb-27a2-450a-a1cb-76f4d23c9791') {
		messageQueue.push({
			func: 'highlight',
			highlight: () => highlightThisMessage(user, message, extra)
		})
	}
}