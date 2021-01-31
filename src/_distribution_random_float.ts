export function _distribution_random_float(min = 0.0, max = 1.0, _distribution) {
	return _distribution() * (max - min) + min
}
export {
	_distribution_random_float as _float__random__distribution
}
