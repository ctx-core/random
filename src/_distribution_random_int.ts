export function _distribution_random_int(
	min = 0, max = 1, $distribution:()=>number
) {
	return Math.floor(min + $distribution() * (max - min))
}
export {
	_distribution_random_int as _int__random__distribution
}
