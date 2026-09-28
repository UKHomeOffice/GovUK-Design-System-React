import { FC, Fragment, InputHTMLAttributes, ReactNode, useRef } from 'react';
import { ClassBuilder } from '@react-foundry/component-helpers';

export type RadioProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'label'> & {
  classes: ClassBuilder;
  conditional?: ReactNode;
  hint?: string;
  label: ReactNode;
};

export const Radio: FC<RadioProps> = ({
  classes,
  conditional,
  defaultChecked,
  hint,
  id,
  label,
  ...attrs
}) => {
  const ref = useRef<HTMLInputElement>(null);
  const conditionalId = `conditional-${id}`;

  const isChecked = () => (ref.current === null ? defaultChecked : ref.current.checked);

  return (
    <>
      <div className={classes('item')}>
        <input
          {...attrs}
          id={id}
          className={classes('input')}
          defaultChecked={defaultChecked}
          type="radio"
          ref={ref}
          aria-controls={conditional ? conditionalId : undefined}
          aria-expanded={conditional ? !!isChecked() : undefined}
        />
        <label htmlFor={id} className="govuk-label">
          {label}
        </label>
        {hint && (
          <div id={`${id}-hint`} className="govuk-hint">
            {hint}
          </div>
        )}
      </div>
      {!conditional ? null : (
        <div
          id={conditionalId}
          className={classes('conditional', isChecked() ? undefined : 'hidden')}
        >
          {conditional}
        </div>
      )}
    </>
  );
};

export default Radio;
