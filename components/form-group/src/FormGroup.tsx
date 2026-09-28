import { FC, Fragment, HTMLAttributes, ReactNode } from 'react';
import { StandardProps, classBuilder } from '@react-foundry/component-helpers';
import { ErrorMessage } from '../../error-message/src/ErrorMessage';
import { FieldSet } from '../../fieldset/src/FieldSet';
import { Hint } from '../../hint/src/Hint';
import { Label } from '../../label/src/Label';

import "govuk-frontend/dist/govuk/objects/_form-group.scss";

export type FormGroupProps = StandardProps &
  Omit<HTMLAttributes<HTMLDivElement>, 'id' | 'label'> & {
    children?: ReactNode;
    error?: ReactNode;
    errorId?: string;
    fieldId?: string;
    hint?: ReactNode;
    hintId?: string;
    id: string;
    label: ReactNode;
    standalone?: boolean;
  };

export const FormGroup: FC<FormGroupProps> = ({
  children: _children,
  classBlock,
  classModifiers: _classModifiers = [],
  className,
  error,
  errorId: _errorId,
  fieldId,
  hint,
  hintId: _hintId,
  id,
  label,
  standalone = false,
  ...attrs
}) => {
  const classModifiers = [
    error ? 'error' : undefined,
    standalone ? 'standalone' : undefined,
    ...(Array.isArray(_classModifiers) ? _classModifiers : [_classModifiers]),
  ];
  const classes = classBuilder('govuk-form-group', classBlock, classModifiers, className);
  const hintId = _hintId || `${id}-hint`;
  const errorId = _errorId || `${id}-error`;
  const describedBy = [hint && hintId, error && errorId].filter((e) => e).join(' ') || undefined;

  const children = (
    <Fragment>
      {!hint ? null : (
        <Hint id={hintId} hidden={standalone}>
          {hint}
        </Hint>
      )}
      {!error ? null : (
        <ErrorMessage id={errorId} hidden={standalone}>
          {error}
        </ErrorMessage>
      )}
      {_children}
    </Fragment>
  );

  return (
    <div id={id} {...attrs} className={classes()}>
      {fieldId ? (
        <Fragment>
          <Label htmlFor={fieldId} hidden={standalone}>
            {label}
          </Label>
          {children}
        </Fragment>
      ) : (
        <FieldSet aria-describedby={describedBy} legend={label}>
          {children}
        </FieldSet>
      )}
    </div>
  );
};

FormGroup.displayName = 'FormGroup';

export default FormGroup;
