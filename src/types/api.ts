import { errors } from '@/constants/errors';

export type errorMessages = typeof errors;

export type ErrorType = {
  /**
   * UUID del error
   */
  id: string;

  /**
   * Código del error
   */
  code: keyof errorMessages;
  message: string;
  details?: string;
};

export interface ErrorHandlerOptions {
  title?: string;
}

export type ApiError = {
  success: false;
  status: number;
  data: ErrorType;
  message?: string;
};

export type ApiSuccess<T = any> = {
  success: true;
  status: number;
  data: T;
};

export type ApiResponse<T = any> = Promise<ApiSuccess<T> | ApiError>;

export type ListResponse<T> = {
  content: T[];
};
