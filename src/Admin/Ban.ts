import { BaseCommand, Command } from '@discord-architect/core'
import { Message } from 'discord.js'

@Command({ label: 'Ban command', description: 'Ban command description', tag: 'ban', usage: ['!ban arg1 arg2 arg3'], permissions: ['ADMINISTRATOR'] })
export default class Ban implements BaseCommand {
	public async run(message: Message, args: Array<string>): Promise<void> {
		// Your code here
		console.log('ffd')
	}
}
