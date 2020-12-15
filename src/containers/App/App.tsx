import SearchHistoryList from '../../components/SearchHistoryList/SearchHistoryList';
import Input from '../../components/Input/Input';

import * as S from './App.styles';

const App:React.FC = () => {
  const searchHistoryList = [
    { id: 'abc' },
    { id: 'cde' },
  ];
  return (
    <S.AppStretch>
      <S.GridLayout>
        <S.SearchHistory>
          <SearchHistoryList items={searchHistoryList} />
        </S.SearchHistory>
        <S.CurrentLocationMap>
          Location map
        </S.CurrentLocationMap>
        <S.CurrentLocationDetails>
          Location Details
        </S.CurrentLocationDetails>
        <S.SearchInput>
          Search Input
          <Input />
        </S.SearchInput>
        <S.HistoryLocationMap>
          History location map
        </S.HistoryLocationMap>
        <S.HistoryLocationDetails>
          HistoryLocationDetails
        </S.HistoryLocationDetails>
      </S.GridLayout>
    </S.AppStretch>
  );
};

export default App;
