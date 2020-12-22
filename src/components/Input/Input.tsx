import { Props, defaultProps } from './Input.types';

import * as S from './Input.styles';

const Input: React.FC<Props> = ({
  value,
  handleChange,
  handleSubmit,
  placeholder,
}) => (
  <S.Input
    placeholder={placeholder}
    value={value}
    onChange={handleChange}
    onKeyPress={(e) => e.key === 'Enter' && handleSubmit && handleSubmit(e)}
  />
);

Input.defaultProps = defaultProps;

export default Input;
