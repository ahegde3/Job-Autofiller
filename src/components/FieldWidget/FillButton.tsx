import React, { FC } from "react";
import { Button, Tooltip } from "@mui/material";
import { AutoFixHighIcon } from "./../../utils/icons";
import { useAppContext } from "../../inject/app/AppContext";
import { ButtonSuccessBadge } from "../ButtonSuccessBadge";

export const FillButton: FC = () => {
  const {
    fillButton: { isFilled, onClick, isDisabled },
  } = useAppContext();

  return (
    <Tooltip title="Autofill" placement="top" arrow>
      <span>
        <ButtonSuccessBadge show={isFilled}>
          <Button onClick={onClick} disabled={isDisabled}>
            <AutoFixHighIcon />
          </Button>
        </ButtonSuccessBadge>
      </span>
    </Tooltip>
  );
};
