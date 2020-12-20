import Box from '../Box/Box';

import { Props, defaultProps } from './SearchHistoryList.types';
import * as S from './SearchHistoryList.styles';

const SearchHistoryList: React.FC<Props> = ({ items }) => (
  <Box>
    {items?.map(({ id }) => (
      <S.ListItem key={id}>{id}</S.ListItem>
    ))}
  </Box>
);

SearchHistoryList.defaultProps = defaultProps;

export default SearchHistoryList;
