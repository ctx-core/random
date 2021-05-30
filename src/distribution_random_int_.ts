export function distribution_random_int_(
	min = 0, max = 1, distribution_:()=>number
) {
	return Math.floor(min + distribution_() * (max - min))
}
export {
	distribution_random_int_ as _int__random__distribution
}
