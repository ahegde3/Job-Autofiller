import React, { FC } from "react";
import "./popup.css";
import { Box, Button, MenuItem, Typography, Select } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export const App: FC<{}> = () => {
  return (
    <Box>
      <Box
        style={{
          display: "flex",
          flexDirection: "row",
          border: "2px solid",
          borderRadius: "6px",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h4" noWrap>
          Job Autofiller
        </Typography>
        <CloseIcon />
      </Box>
      <Box
        style={{
          border: "2px solid",
          borderRadius: "6px",
          marginTop: "6px",
          padding: "6px",
        }}
      >
        Profile Type:
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={10}
          label="Age"
        >
          <MenuItem value={10}>Intern</MenuItem>
          <MenuItem value={20}>Entry Level</MenuItem>
          <MenuItem value={30}>Mid Level</MenuItem>
        </Select>
        <p>Upload new resume for the profile:</p>
        <input type="file" />
        <Button variant="contained">Submit</Button>
      </Box>
    </Box>
  );
};
