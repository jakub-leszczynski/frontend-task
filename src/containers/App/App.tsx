import { useState, useCallback, useEffect } from 'react';

import SearchHistoryList from '../../components/SearchHistoryList/SearchHistoryList';
import Input from '../../components/Input/Input';
import Loader from '../../components/Loader/Loader';
import Map from '../../components/Map/Map';
import LocationDetails from '../../components/LocationDetails/LocationDetails';
import Text from '../../components/Text/Text';
import Button from '../../components/Button/Button';
import { useMap } from '../../components/Map/Map.hooks';

import * as S from './App.styles';
import { useRequesterData } from '../../hooks/requests/useRequesterData';
import { useLocationData } from '../../hooks/requests/useLocationData';

const App:React.FC = () => {
  const [searchText, setSearchText] = useState('');
  const {
    execute: getRequesterData,
    data: requesterData,
    loading: requesterDataLoading,
  } = useRequesterData();

  const {
    execute: getLocationData,
    data: searchLocationData,
    loading: searchLocationLoading,
  } = useLocationData(searchText);

  useEffect(() => {
    getRequesterData();
  }, [getRequesterData]);

  const [requesterViewport, handleSetRequesterViewport] = useMap({
    latitude: requesterData?.latitude || 0,
    longitude: requesterData?.longitude || 0,
  });

  const [searchLocationViewport, handleSetSearchLocationViewport] = useMap({
    latitude: searchLocationData?.latitude || 0,
    longitude: searchLocationData?.longitude || 0,
  });

  const handleSearchTextChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      setSearchText(value);
    },
    [],
  );

  const handleSearchTextSubmit = useCallback(
    () => {
      getLocationData();
    },
    [getLocationData],
  );

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
          <Loader loading={requesterDataLoading}>
            <Map viewport={requesterViewport} setViewport={handleSetRequesterViewport} />
          </Loader>
        </S.CurrentLocationMap>
        <S.CurrentLocationDetails>
          <Loader loading={requesterDataLoading}>
            <LocationDetails locationData={requesterData || undefined} />
          </Loader>
        </S.CurrentLocationDetails>
        <S.SearchInput>
          <Input
            value={searchText}
            handleChange={handleSearchTextChange}
            placeholder="217.96.128.237"
            handleSubmit={handleSearchTextSubmit}
          />
          <Button handleClick={handleSearchTextSubmit}>
            <Text>Search</Text>
          </Button>
        </S.SearchInput>
        <S.HistoryLocationMap>
          <Loader loading={searchLocationLoading}>
            <Map viewport={searchLocationViewport} setViewport={handleSetSearchLocationViewport} />
          </Loader>
        </S.HistoryLocationMap>
        <S.HistoryLocationDetails>
          <Loader loading={searchLocationLoading}>
            <LocationDetails locationData={searchLocationData || undefined} />
          </Loader>
        </S.HistoryLocationDetails>
      </S.GridLayout>
    </S.AppStretch>
  );
};

export default App;
