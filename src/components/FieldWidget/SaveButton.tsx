import React, { FC } from "react";
import { Button, Tooltip } from "@mui/material";
import { SaveIcon } from "./../../utils/icons";
import { useAppContext } from "../../inject/app/AppContext";
import { ButtonSuccessBadge } from "../ButtonSuccessBadge";

export const SaveButton: FC = () => {
  const {
    saveButton: { clickHandler, showSuccessBadge },
  } = useAppContext();
  return (
    <ButtonSuccessBadge show={showSuccessBadge}>
      <Tooltip title="Save current value as answer." placement="top" arrow>
        <Button onClick={() => clickHandler()}>
          <SaveIcon />
        </Button>
      </Tooltip>
    </ButtonSuccessBadge>
  );
};
