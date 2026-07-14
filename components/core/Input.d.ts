import * as React from "react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

/** Single-line text input matching the app's form field. */
export function Input(props: InputProps): JSX.Element;
