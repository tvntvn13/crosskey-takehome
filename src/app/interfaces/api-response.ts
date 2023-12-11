import { Fund } from './fund';

export interface ApiResponseArray {
  [index: number]: ApiResponseObject;
}

export interface ApiResponseObject {
  data: Fund[];
  status: {
    errors: [];
    infos: [];
    jSessionId: string;
    success: boolean;
  };
}
