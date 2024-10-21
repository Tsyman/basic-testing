import axios from 'axios';
import { throttledGetDataFromApi } from './index';

describe('throttledGetDataFromApi', () => {
  const mockData = { data: 'data' };
  const path = '/path';

  beforeEach(() => {
    jest.spyOn(axios.Axios.prototype, 'get').mockResolvedValue(mockData);
  });

  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  test('should create instance with provided base url', async () => {
    const createSpy = jest.spyOn(axios, 'create');

    await throttledGetDataFromApi(path);
    jest.runAllTimers();
    expect(createSpy).toHaveBeenCalledWith({
      baseURL: expect.any(String),
    });
  });

  test('should perform request to correct provided url', async () => {
    const getSpy = jest
      .spyOn(axios.Axios.prototype, 'get')
      .mockResolvedValueOnce(mockData);

    await throttledGetDataFromApi(path);
    jest.runAllTimers();
    expect(getSpy).toHaveBeenCalledWith(path);
  });

  test('should return response data', async () => {
    const result = await throttledGetDataFromApi(path);
    jest.runAllTimers();
    expect(result).toEqual(mockData.data);
  });
});
