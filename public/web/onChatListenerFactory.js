import { onChatListener as birKadinBirErkekOnChatListener } from './1kadin1erkekOnChatListener.js';
import { onChatListener as aitcheeyedeeOnChatListener } from './aitcheyedeeOnChatListener.js';

export function createOnChatListener(channel) {
	if(channel === "aitcheyedee"){
		return birKadinBirErkekOnChatListener;
	}
	else if(channel === "1kadin1erkek"){
		return aitcheeyedeeOnChatListener;
	}
	else {
		throw 'Wrong channel name is provided. Please check your channel name'
	}
}
