import SearchHistoryList from '../../components/SearchHistoryList/SearchHistoryList';
import Input from '../../components/Input/Input';
import Loader from '../../components/Loader/Loader';

import * as S from './App.styles';
import { useRequesterData } from '../../hooks/requests/useRequesterData';

const App:React.FC = () => {
  const {
    data: requesterData,
    loading: requesterDataLoading,
  } = useRequesterData();
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
          <Loader loading={requesterDataLoading}>
            <div>Your location details:</div>
            <div>{`IP Address: ${requesterData?.ip}`}</div>
            <div>{`Country: ${requesterData?.countryName}`}</div>
            <div>{`City: ${requesterData?.city}`}</div>
            <div>{`Latitude: ${requesterData?.latitude}`}</div>
            <div>{`Longitude: ${requesterData?.longitude}`}</div>
          </Loader>
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
