import React, { FC, useState } from "react";
import "./popup.css";
import {
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  Snackbar,
  SnackbarCloseReason,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";


const EMAIL_ADDRESS = "berellevy+chromeextensions@gmail.com";

export const App: FC<{}> = () => {
  const [snackbarOpen, setSnackbarOpen] = useState<boolean>(false);
  const [snackbarMessage, setSnackbarMessage] = useState<string>("");
  const handleCloseSnackbar = (
    event: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason
  ) => {
    setSnackbarOpen(false);
  };

  return (
    <div>
      <Box pb={"1em"}>{/* <LogoTitleBar>Job App Filler</LogoTitleBar> */}</Box>
      <Box component={"main"}>
        <Container sx={{ my: 2 }}>
          <Typography variant="h6" sx={{ mb: 1 }}>
            The Best Autofill Since Sliced Bread.
          </Typography>
          <Stack direction={"row"} spacing={1}>
            <Button
              variant="outlined"
              onClick={() => {
                chrome.tabs.query(
                  { active: true, currentWindow: true },
                  (tabs) => {
                    chrome.tabs
                      .sendMessage(tabs[0].id, {
                        type: "SHOW_WHATS_NEW",
                      })
                      .catch((err) => {
                        setSnackbarMessage("Only works on workday sites.");
                        setSnackbarOpen(true);
                      }),
                      () => {};
                  }
                );
              }}
            >
              what's new?
            </Button>
          </Stack>
          <Divider sx={{ my: 2 }} />

          <Typography variant="h5" sx={{ mt: 2, mb: 1 }}>
            Feaures
          </Typography>
          <Typography mb={1}>Works. Well.</Typography>
          <Typography mb={1}>Completely free, No login required.</Typography>
          <Typography mb={1}>
            Your data is stored locally, on your browser and isn't sent{" "}
            <em>anywhere</em>.
          </Typography>
          <Divider sx={{ my: 2 }} />
        </Container>
        <Snackbar
          open={snackbarOpen}
          autoHideDuration={2000}
          onClose={handleCloseSnackbar}
          message={snackbarMessage}
        />
      </Box>
    </div>
  );
};
