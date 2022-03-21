import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "./Button";

type titleProps = {
  title_: string;
};

const Form = (props: titleProps) => {
  return (
    <div>
      <div className="heading-container">
        <h3>{props.title_} Form</h3>
      </div>

      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="email" label="Enter the Email" variant="outlined" />
        <TextField
          id="password"
          label="Enter the Password"
          variant="outlined"
        />
        {/* <Button title={props.title_} /> */}
        <Button />
      </Box>
    </div>
  );
};

export default Form;
