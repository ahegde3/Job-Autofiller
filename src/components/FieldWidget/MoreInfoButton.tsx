import React, { FC } from "react";
import { MoreInfoPopper } from "../MoreInfoPopup/MoreInfoPopper";
import { CloseIcon, MoreVertIcon } from "./../../utils/icons";
import { useAppContext } from "../../inject/app/AppContext";
import { Button } from "@mui/material";

export const MoreInfoButton: FC = () => {
  const {
    moreInfoPopper: { isOpen, handleToggleButtonClick },
  } = useAppContext();
  return (
    <Button
      type="button"
      variant={isOpen ? "contained" : "outlined"}
      onClick={handleToggleButtonClick}
    >
      {isOpen ? <CloseIcon /> : <MoreVertIcon />}
      <MoreInfoPopper />
    </Button>
  );
};
