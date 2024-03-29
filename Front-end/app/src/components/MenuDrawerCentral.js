import React from "react";
import { Box } from "@mui/system";
import List from "@mui/material/List";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import LogoutIcon from "@mui/icons-material/Logout";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InventoryIcon from "@mui/icons-material/Inventory";
import ListItemButton from "@mui/material/ListItemButton";
import AssessmentIcon from "@mui/icons-material/Assessment";
import { Divider, ListItem, Typography } from "@mui/material";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const drawerWidth = 280;

export default function MenuDrawerCentral() {
  let navigate = useNavigate();

  const goToHomeCentral = () => {
    let path = "/HomeCentral";
    navigate(path);
  };

  const goToPedidosCentral = () => {
    let path = "/PedidosCentral";
    navigate(path);
  };

  const closeSession = () => {
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  const goToCargarNuevoPedido = () => {
    let path = "/CargarNuevoPedido";
    navigate(path);
  };
  const goToHistorialDeAtenciones = () => {
    let path = "/HistorialDeAtenciones";
    navigate(path);
  };
  const goToGestionDeStockCentral = () => {
    let path = "/GestionDeStockCentral";
    navigate(path);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backgroundColor: "teal",
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Factor VIII
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List sx={{ width: "100%" }}>
            <ListItem sx={{ padding: 0 }}></ListItem>

            <ListItemButton onClick={goToHomeCentral}>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Inicio" />
            </ListItemButton>

            <ListItemButton onClick={goToPedidosCentral}>
              <ListItemIcon>
                <LocalShippingIcon />
              </ListItemIcon>
              <ListItemText primary="Pedidos" />
            </ListItemButton>

            <ListItemButton onClick={goToCargarNuevoPedido}>
              <ListItemIcon>
                <AddShoppingCartIcon />
              </ListItemIcon>
              <ListItemText primary="Cargar nuevo pedido" />
            </ListItemButton>

            <ListItemButton onClick={goToGestionDeStockCentral}>
              <ListItemIcon>
                <InventoryIcon />
              </ListItemIcon>
              <ListItemText primary="Gestion de stock" />
            </ListItemButton>

            <ListItemButton onClick={goToHistorialDeAtenciones}>
              <ListItemIcon>
                <SupportAgentIcon />
              </ListItemIcon>
              <ListItemText primary="Historial de atenciones" />
            </ListItemButton>

            <Divider />

            <ListItemButton onClick={closeSession}>
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary="Cerrar sesión" />
            </ListItemButton>
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}
