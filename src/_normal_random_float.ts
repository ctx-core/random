import { _distribution_random_float } from './_distribution_random_float'
import { _normal_random } from './_normal_random'
export function _normal_random_float(min = 0.0, max = 1.0) {
	return _distribution_random_float(min, max, _normal_random)
}
export {
	_normal_random_float as _float__random__normal
}
