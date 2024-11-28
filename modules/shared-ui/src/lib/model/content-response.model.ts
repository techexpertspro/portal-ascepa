import { ResultContentResponse } from './result-content-response.model';

export interface ContentResponse {
  status: 'success' | 'error';
  result: ResultContentResponse[];
}
