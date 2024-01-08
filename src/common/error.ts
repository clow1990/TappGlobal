interface IResponse<K> {
  message: string;
  result: K;
  status: string;
  statusCode: number;
}

export interface IApiError extends IResponse<never> {
  httpStatus: number;
}
