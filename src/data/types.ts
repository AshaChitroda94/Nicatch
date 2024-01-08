import { ReactNode } from "react";
import { GenericType } from "../../types/common";

//index.tsx file types
export interface MaterialType {
  // materials(materials: any): unknown
  assessmentLink: string;
  assessmentName: string;
  batchName: string;
  id: number;
  name: string;
  // materials?: RowType;
  // totalPages?: GenericType;
  materials?: GenericType;
  totalPages?: number;
}

export interface RowType {
  assessmentLink: string;
  assessmentName: string;
  batchName: string;
  id: number;
  name: string;
  // number?: number;
}

export interface responseType {
  materials: RowType;
  totalPages: number;
}

//assessmentPreview.tsx file data types
export interface AssessmentItemsType {
  formatType: string;
  id: number;
  instructionsTranslations: instructionsTranslationsType[];
  isAttempted: boolean;
  leadInStatementTranslations: leadInStatementTranslationsType[];
  stemTranslations: stemTranslationsType[];
  value?: ReactNode;
  optionSet?: OptionSetType;
}

export interface instructionsTranslationsType {
  locale: string;
  value: string;
}
export interface leadInStatementTranslationsType {}
export interface stemTranslationsType {
  locale: string;
  value: string;
}

export interface respondentResponsesType {
  itemId: number;
  respondTime: string;
  selectedOptionIds: number[];
  textResponse?: string;
}
export interface OptionSetType {
  maxNoOfSelect: number;
  options?: optionsTypes[];
}
export interface optionsTypes {
  id: number;
  labelTranslations: labelTranslationsTypes[];
}
export interface labelTranslationsTypes {
  locale: string;
  value: string;
}

export interface apiRespondentResponsesResType {
  responses: respondentResponsesType[];
}
