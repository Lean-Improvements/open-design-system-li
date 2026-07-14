import * as React from "react";

type DivProps = React.HTMLAttributes<HTMLDivElement>;

/** White-on-cream surface with a 1px hairline and no shadow. */
export function Card(props: DivProps): JSX.Element;
export function CardHeader(props: DivProps): JSX.Element;
export function CardTitle(props: React.HTMLAttributes<HTMLHeadingElement>): JSX.Element;
export function CardDescription(props: React.HTMLAttributes<HTMLParagraphElement>): JSX.Element;
export function CardContent(props: DivProps): JSX.Element;
export function CardFooter(props: DivProps): JSX.Element;
