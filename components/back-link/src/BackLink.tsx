import '../assets/BackLink.scss';
import {FC, PropsWithChildren} from "react";

type BaseProps = {
    id?: string;
    variant?: 'default' | 'inverse';
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

export const BackLink: FC<PropsWithChildren<BackLinkProps>> = ({children, id, href, onClick, variant = 'default'}) => {
    const classes = [
        "govuk-back-link",
        variant === 'inverse' ? "govuk-back-link--inverse" : undefined
    ].filter(Boolean).join(" ");

    return(
        <a id={id} href={href ? href : "#"} className={classes} onClick={onClick}>{children || "Back"}</a>
    );
};

export default BackLink;
