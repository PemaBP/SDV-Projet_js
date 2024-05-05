import clsx from "clsx"
import { ErrorMessage, Field } from "formik"

export const FormField = ({
  className,
  name,
  label,
  placeholder,
  ...otherProps
}) => (<>
  <Field className={clsx("", className)} name={name} {...otherProps} />
  <ErrorMessage name={name} />
</>)