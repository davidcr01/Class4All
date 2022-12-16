import {styled} from "@mui/material/styles";
import { Checkbox, TextField, Button } from "@mui/material";
import React from "react";

export const MiTF = styled((props) => (
    <TextField variant="filled" {...props} />
))({
    "& .MuiFilledInput-root": {
        border: "solid 1px black",
        backgroundColor: "white",
        "&:hover": {
            backgroundColor: "#eee"
        },
        "&.Mui-focused": {
            backgroundColor: "white"
        }
    }
})