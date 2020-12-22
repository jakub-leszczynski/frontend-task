import { memo } from 'react';

import { Props, defaultProps } from './Text.types';
import * as S from './Text.styles';

const Text: React.FC<Props> = ({ children }) => (
  <S.Text>{children}</S.Text>
);

Text.defaultProps = defaultProps;

export default memo(Text);
