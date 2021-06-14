import React from "react";
import { useFormikContext } from "formik";

import AppTextInput from "../../components/AppTextInput";
import ErrorMessage from "./ErrorMessage";

function AppFormFields({ name, width, ...otherProps }) {
  const { setFieldTouched, setFieldValue, errors, touched, values } =
    useFormikContext();
  return (
    <>
      <AppTextInput
        onChangeText={(text) => setFieldValue(name, text)}
        onBlur={() => setFieldTouched(name)}
        value={values[name]}
        width={width}
        {...otherProps}
      />
      <ErrorMessage visible={touched[name]} error={errors[name]} />
    </>
  );
}

export default AppFormFields;
