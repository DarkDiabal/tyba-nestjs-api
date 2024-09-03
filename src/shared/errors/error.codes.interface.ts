export interface IErrorCodes {
  code: string;
  title?: string;
  description: string;
  icon?: string;
  action?: string;
  technicalDetail: {
    description: string;
    recommendations: string;
  };
}
