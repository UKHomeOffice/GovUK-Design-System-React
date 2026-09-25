import '../assets/Button.scss';
import {FC, PropsWithChildren} from "react";

type BaseProps = {
    id?: string;
}

type StartButtonProps = BaseProps & {
    variant: 'start'; href: string; disabled?: never; preventDoubleClick?: never;
}

type OtherButtonProps = BaseProps & {
    variant?: 'default' | 'secondary' | 'warning' | 'inverse'; href?: never; disabled?: boolean; preventDoubleClick?: boolean;
}

type ButtonProps = StartButtonProps | OtherButtonProps;

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
                                                               children,
                                                               id,
                                                               variant = 'default',
                                                               disabled = false,
                                                               href,
                                                               preventDoubleClick
                                                           }) => {
    const classes = ['govuk-button', variant !== 'default' ? `govuk-button--${variant}` : undefined].filter(Boolean).join(' ');

    return variant === 'start' ? (
        <a href={href} role="button" draggable="false" className={classes} data-module="govuk-button">
            {children}
            <svg className="govuk-button__start-icon" xmlns="http://www.w3.org/2000/svg" width="17.5" height="19"
                 viewBox="0 0 33 40" aria-hidden="true" focusable="false">
                <path fill="currentColor" d="M0 0h13l20 20-20 20H0l20-20z"/>
            </svg>
        </a>) : (<button
            id={id}
            type="submit"
            className={classes}
            disabled={disabled}
            aria-disabled={disabled}
            data-module="govuk-button"
            data-prevent-double-click={preventDoubleClick}
        >
            {children}
        </button>);
}

export default Button;
