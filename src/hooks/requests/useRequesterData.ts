import IpStackService from '../../services/ipStack/ipStack.service';
import { RequesterData } from '../../services/ipStack/ipStack.types';
import { useRequest, ResponseState } from '../useRequest';

interface RequesterDataResponseState extends ResponseState {
  data: RequesterData | null
}

export const useRequesterData = (): RequesterDataResponseState => (
  useRequest(IpStackService.getRequesterData)
);
