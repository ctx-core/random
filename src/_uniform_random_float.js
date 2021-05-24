import { _distribution_random_float } from './_distribution_random_float';
import { _uniform_random } from './_uniform_random';
export function _uniform_random_float(min = 0.0, max = 1.0) {
    return _distribution_random_float(min, max, _uniform_random);
}
export { _uniform_random_float as _float__random__uniform };
