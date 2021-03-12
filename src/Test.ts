import { BasePrerequisite, Prerequisite, PrerequisiteContext } from '@discord-architect/core'

@Prerequisite({ name: '' })
export default class Test implements BasePrerequisite {
	public async isValid(context: PrerequisiteContext): Promise<boolean> {
		// Your code here
        return true
	}
}
