import styled from 'styled-components';

export const AppStretch = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const GridLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: 1fr 5rem 1fr;
  grid-template-areas: 
    "SearchHistory CurrentLocationMap CurrentLocationMap CurrentLocationDetails"
    "SearchHistory SearchInput SearchInput SearchInput"
    "SearchHistory HistoryLocationMap HistoryLocationMap HistoryLocationDetails";
  height: 100%;
  width: 100%;
`;

export const CurrentLocationMap = styled.div`
  grid-area: CurrentLocationMap;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CurrentLocationDetails = styled.div`
  grid-area: CurrentLocationDetails;
`;

export const SearchHistory = styled.div`
  grid-area: SearchHistory;
`;

export const HistoryLocationMap = styled.div`
  grid-area: HistoryLocationMap;
`;

export const HistoryLocationDetails = styled.div`
  grid-area: HistoryLocationDetails;
`;

export const SearchInput = styled.div`
  grid-area: SearchInput;
`;
