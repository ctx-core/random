export function distribution_random_float_(
	min = 0.0, max = 1.0, distribution_:()=>number
):number {
	return distribution_() * (max - min) + min
}
export {
	distribution_random_float_ as _float__random__distribution
}
