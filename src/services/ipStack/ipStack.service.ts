import axios, { AxiosInstance } from 'axios';
import { keysSnakeToCamelCase } from '../../utils/object';
import { RequesterDataResponse } from './ipStack.types';

class IpStackService {
  instance: AxiosInstance;

  constructor() {
    this.instance = axios.create({
      baseURL: process.env.REACT_APP_IP_STACK_URL,
      params: {
        access_key: process.env.REACT_APP_IP_STACK_KEY,
      },
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
  }

  getRequesterData = async (): Promise<RequesterDataResponse> => {
    const checkEndpoint = '/check';
    const response = await this.instance.get(checkEndpoint);
    return {
      ...response,
      data: keysSnakeToCamelCase(response.data),
    };
  };
}

const singleton = new IpStackService();
export default Object.freeze(singleton);
