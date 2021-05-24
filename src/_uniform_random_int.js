import { _distribution_random_int } from './_distribution_random_int';
import { _uniform_random } from './_uniform_random';
export function _uniform_random_int(min = 0, max = 1) {
    return _distribution_random_int(min, max, _uniform_random);
}
export { _uniform_random_int as _int__random__uniform };
