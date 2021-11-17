import { distribution_random_int_ } from './distribution_random_int_.js'
import { uniform_random_ } from './uniform_random_.js'
export function uniform_random_int_(min = 0, max = 1):number {
	return distribution_random_int_(min, max, uniform_random_)
}
export {
	uniform_random_int_ as _int__random__uniform
}
