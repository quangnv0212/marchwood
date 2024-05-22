"use client";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useState } from "react";

const CollapseComponent = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <List
      sx={{
        width: "100%",
        borderBottom: "#B1844D 1px solid ",
        bgcolor: "background.paper",
      }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListItemButton className="border" onClick={handleClick}>
        <ListItemText primary="FAQ TITLE" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="Starred" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
};
export default function CollapseSeeker() {
  return (
    <div className="p-16">
      <CollapseComponent />
      <CollapseComponent />
      <CollapseComponent />
      <CollapseComponent />
    </div>
  );
}
