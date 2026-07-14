import * as React from "react";

export interface DialogProps {
  /** Whether the modal is shown. */
  open?: boolean;
  /** Fired on backdrop click or the close button. Omit to hide the X. */
  onClose?: () => void;
  /** Max content width in px. Default 512. */
  width?: number;
  children?: React.ReactNode;
}

/**
 * Modal dialog with ink overlay + hairline card.
 * @startingPoint section="Core" subtitle="Modal with header / body / footer" viewport="700x320"
 */
export function Dialog(props: DialogProps): JSX.Element | null;
export function DialogHeader(props: React.HTMLAttributes<HTMLDivElement>): JSX.Element;
export function DialogTitle(props: React.HTMLAttributes<HTMLHeadingElement>): JSX.Element;
export function DialogDescription(props: React.HTMLAttributes<HTMLParagraphElement>): JSX.Element;
export function DialogFooter(props: React.HTMLAttributes<HTMLDivElement>): JSX.Element;
