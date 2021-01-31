import { _distribution_random_int } from './_distribution_random_int'
import { _normal_random } from './_normal_random'
export function _normal_random_int(min = 0, max = 1) {
	return _distribution_random_int(min, max, _normal_random)
}
export {
	_normal_random_int as _int__random__normal
}
