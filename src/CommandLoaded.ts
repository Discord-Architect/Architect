import { BaseMiddleware, Middleware, CommandContext } from '@discord-architect/core'

@Middleware('app:command:execute')
export default class CommandLoaded implements BaseMiddleware {
	public async run(context: CommandContext): Promise<void> {
		// Your code here
	}
}
