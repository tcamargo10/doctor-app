import React from "react";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PersonIcon from "@material-ui/icons/Person";

const NavItems = [
  {
    text: "Dashboard",
    link: "/dashboard",
    icon: <DashboardIcon />,
  },
  {
    title: true,
    text: "Dashboard",
  },
  {
    text: "Usuários",
    link: "/users",
    icon: <PersonIcon />,
  },
  {
    text: "Médicos",
    link: "/doctors",
    icon: <PersonIcon />,
  },
  {
    text: "Atendimentos",
    link: "/atend",
    icon: <PersonIcon />,
  },
];

export default NavItems;
