/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PetCreateFormInputValues = {
    name?: string;
    description?: string;
    petType?: string;
    image?: string;
};
export declare type PetCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    petType?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PetCreateFormOverridesProps = {
    PetCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    petType?: PrimitiveOverrideProps<SelectFieldProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PetCreateFormProps = React.PropsWithChildren<{
    overrides?: PetCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PetCreateFormInputValues) => PetCreateFormInputValues;
    onSuccess?: (fields: PetCreateFormInputValues) => void;
    onError?: (fields: PetCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PetCreateFormInputValues) => PetCreateFormInputValues;
    onValidate?: PetCreateFormValidationValues;
} & React.CSSProperties>;
export default function PetCreateForm(props: PetCreateFormProps): React.ReactElement;
