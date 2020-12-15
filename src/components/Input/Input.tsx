import { Props, defaultProps } from './Input.types';

import * as S from './Input.styles';

const Input: React.FC<Props> = ({ value, handleChange }) => (
  <S.Input value={value} onChange={handleChange} />
);

Input.defaultProps = defaultProps;

export default Input;
