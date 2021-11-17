import { distribution_random_int_ } from './distribution_random_int_.js'
import { normal_random_ } from './normal_random_.js'
export function normal_random_int_(min = 0, max = 1):number {
	return distribution_random_int_(min, max, normal_random_)
}
export {
	normal_random_int_ as _int__random__normal
}
