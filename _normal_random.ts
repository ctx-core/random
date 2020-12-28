export function _normal_random() {
	let u1: number, u2: number, picked = -1
	// We reject values outside of the interval [0, 1]
	// TODO: check if it is ok to do that?
	while (picked < 0 || picked > 1) {
		u1 = Math.random()
		u2 = Math.random()
		picked =
			1 / 6
			* Math.pow((
				(
					-2
					* Math.log(u1), 0.5
				)
				* Math.cos(2 * Math.PI * u2)
				+ 0.5
			), 10)
	}
	return picked
}
export {
	_normal_random as _random__normal
}
