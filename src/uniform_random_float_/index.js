import { distribution_random_float_ } from '../distribution_random_float_/index.js'
import { uniform_random_ } from '../uniform_random_/index.js'
export function uniform_random_float_(min = 0.0, max = 1.0) {
	return distribution_random_float_(min, max, uniform_random_)
}
export { uniform_random_float_ as _float__random__uniform }
