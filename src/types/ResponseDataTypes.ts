export interface commonResponseType<T> {
  httpStatus: string;
  isSuccess: boolean;
  message: string;
  code: number;
  result: T;
}

export interface mainBannerType {
  id: number;
  description: string;
  imgUrl: string;
  linkType?: string;
  linkId?: number;
}

export interface signInDataType {
  accessToken: string;
  name: string;
  uuid: string;
}
