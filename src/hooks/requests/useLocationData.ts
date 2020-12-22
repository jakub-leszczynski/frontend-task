import IpStackService from '../../services/ipStack/ipStack.service';
import { RequesterData } from '../../services/ipStack/ipStack.types';
import { useRequest, ResponseState } from '../useRequest';

interface IPDataResponseState extends ResponseState {
  data: RequesterData | null
}

export const useLocationData = (searchText: string): IPDataResponseState => (
  useRequest(() => IpStackService.getLocationDataByIp(searchText))
);
