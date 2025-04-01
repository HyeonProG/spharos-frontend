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

export interface productDataListType {
  productOptionCode: string;
  productCode: string;
}

export interface productCardDataType {
  productOptionCode: string;
  productCode: string;
  productName: string;
  productPrice: number;
  productDiscountPrice: number;
  productImgUrl: string;
  isBest: boolean;
  isNew: boolean;
  isSale: boolean;
  rank: number;
}

export interface productListDataType {
  hasNext: boolean;
  page: number;
  cursorId: string;
  totalCount: number;
  productList: productCardDataType[];
}

export interface cartListDataType {
  id: number;
  name: string;
  price: number;
  quantity: number;
  checked: boolean;
}
