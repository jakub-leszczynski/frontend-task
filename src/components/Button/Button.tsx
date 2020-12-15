import { Props, defaultProps } from './Button.types';
import * as S from './Button.styles';

const Button: React.FC<Props> = ({ children, handleClick }) => (
  <S.Button onClick={handleClick}>{children}</S.Button>
);

Button.defaultProps = defaultProps;

export default Button;
