'use client';

import '../assets/BackLink.scss';
import {FC} from "react";

type BaseProps = {
    id?: string;
    text?: string;
    inverse?: boolean;
};

type OnClickProps = BaseProps & {
    onClick: () => void;
    href?: never;
};

type HrefProps = BaseProps & {
    onClick?: never;
    href: string;
};

export type BackLinkProps = OnClickProps | HrefProps;

export const BackLink: FC<BackLinkProps> = ({id, href, text, onClick, inverse = false}) => {
    const classes = [
        "govuk-back-link",
        inverse ? "govuk-back-link--inverse" : undefined
    ].filter(Boolean).join(" ");

    return(
        <a id={id} href={href ? href : "#"} className={classes} onClick={onClick}>{text || "Back"}</a>
    );
};

export default BackLink;
