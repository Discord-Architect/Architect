import { BaseEvent, Event } from '@discord-architect/core'

@Event('message')
export default class GuildMemberRemove implements BaseEvent {
	public async run(args: any): Promise<void> {
		// Please go to the documentation in order to know the parameters you can use
		// Your code here
	}
}
