import { BasePrerequisite, Prerequisite, PrerequisiteContext } from '@discord-architect/core'

@Prerequisite({ name: '(?<count>\\d+)-args' })
export default class RegexAnalyzer implements BasePrerequisite {
	public async isValid(context: PrerequisiteContext): Promise<boolean> {
		if (context.args.length < +context.get('count')!) {
			return false
		}
		return true
	}
}
