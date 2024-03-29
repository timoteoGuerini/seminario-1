import React, { useState } from "react";
import { Container } from "@mui/system";
import MenuDrawerCentral from "../../components/MenuDrawerCentral";
import { Box } from "@mui/system";
import { Divider, Typography, Select } from "@mui/material";
import { Grid, TextField } from "@mui/material";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import Paper from "@mui/material/Paper";
import TableRow from "@mui/material/TableRow";
import DeleteIcon from "@mui/icons-material/Delete";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { useNavigate } from "react-router-dom";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Line,
  ComposedChart,
} from "recharts";
import { Tooltip as ChartTooltip } from "recharts";

const boxShadowStyle = {
  padding: "10px 20px",
  borderRadius: "10px",
  margin: "auto",
  marginTop: "80px",
  width: "100%",
};

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-25%, -50%)",
  width: "auto",
  bgcolor: "white",
  boxShadow: 24,
  p: 4,
};

const barData = [
  {
    name: "Enero",
    prev: 190,
    curr: 180,
  },
  {
    name: "Febrero",
    prev: 175,
    curr: 110,
  },
  {
    name: "Marzo",
    prev: 130,
    curr: 135,
  },
  {
    name: "Abril",
    prev: 115,
    curr: 133,
  },
  {
    name: "Mayo",
    prev: 167,
    curr: 134,
  },
  {
    name: "Junio",
    prev: 130,
    curr: 180,
  },
  {
    name: "Julio",
    prev: 135,
    curr: 164,
  },
  {
    name: "Agosto",
    prev: 172,
    curr: 128,
  },
  {
    name: "Septiembre",
    prev: 110,
    curr: 200,
  },
  {
    name: "Octubre",
    prev: 190,
    curr: 171,
  },
  {
    name: "Noviembre",
    prev: 140,
    curr: 175,
  },
  {
    name: "Diciembre",
    prev: 169,
    curr: 110,
  },
];

const rows = [
  {
    hospital: "Rivadavia",
    ref: "OE0005",
    medicamento: "Factor VIII Octapharma",
    fecha: "04/12/2022",
    cantidad: "25 unidades",
    tipo: "Estandar",
    estado: "En preparación",
  },
  {
    hospital: "Rivadava",
    ref: "OE0004",
    medicamento: "Factor VIII Octapharma",
    fecha: "01/12/2022",
    cantidad: "5 unidades",
    tipo: "Urgencia",
    estado: "En preparación",
  },
  {
    hospital: "Camila Gomez",
    ref: "OE0003",
    medicamento: "Factor VIII Koate",
    fecha: "17/11/2022",
    cantidad: "15 unidades",
    tipo: "Estandar",
    estado: "Enviado",
  },
  {
    hospital: "Julian Gutierrez",
    ref: "OE0002",
    medicamento: "Facto VIII UNC",
    fecha: "10/11/2022",
    cantidad: "50 unidades",
    tipo: "Urgencia",
    estado: "Recibido",
  },
];

export default function PedidosCentral() {
  const [stockOpen, setStockOpen] = useState(false);
  const [año, setAño] = useState("");

  let navigate = useNavigate();

  const goToCargarNuevoPedido = () => {
    let path = "/CargarNuevoPedido";
    navigate(path);
  };

  return (
    <Container
      sx={{ display: "flex", minWidth: "100%", padding: "20px" }}
      disableGutters
    >
      <MenuDrawerCentral />
      <Box style={boxShadowStyle}>
        <Typography
          variant="h1"
          component="div"
          sx={{ paddingBottom: "25px", paddingTop: "10px", color: "#008180" }}
        >
          Pedidos
        </Typography>

        <Grid container spacing={2} columns={2}>
          <Grid item xs={2}>
            <Typography
              variant="h4"
              component="div"
              sx={{
                paddingBottom: "25px",
                paddingTop: "10px",
                color: "#008180",
              }}
            >
              Pedidos 2021 vs 2022
            </Typography>
          </Grid>

          <Grid item xs={1}>
            <FormControl
              sx={{ minWidth: "100%", paddingBottom: "50px" }}
              variant="outlined"
            >
              <Select
                onChange={(v) => setAño(v.target.value)}
                value={año}
                sx={{ width: "100%" }}
                displayEmpty
              >
                <MenuItem value="" default disabled>
                  <em>Año 1*</em>
                </MenuItem>
                <MenuItem value={"Año"}>2021</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={1}>
            <FormControl sx={{ minWidth: "100%" }} variant="outlined">
              <Select
                onChange={(v) => setAño(v.target.value)}
                value={año}
                sx={{ width: "100%" }}
                displayEmpty
              >
                <MenuItem value="" default disabled>
                  <em>Año 2*</em>
                </MenuItem>
                <MenuItem value={"Año"}>2022</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={2} justifyContent="center" alignContent="center">
            <ComposedChart
              width={1500}
              height={350}
              data={barData}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <ChartTooltip />
              <Legend />
              <Bar
                dataKey="prev"
                fill="#E93030"
                unit={" pedidos"}
                name="Cant. pedidos en 2021"
              />
              <Bar
                dataKey="curr"
                fill="#008180"
                unit={" pedidos"}
                name="Cant. pedidos en 2022"
              />
            </ComposedChart>
          </Grid>

          <Grid item xs={2}>
            <Box
              sx={{
                padding: "15px",
                backgroundColor: "#F0F0F0",
                display: "flex",
                marginBottom: "20px",
              }}
            >
              <RadioButtonCheckedIcon
                sx={{ marginRight: "10px" }}
              ></RadioButtonCheckedIcon>
              <Typography variant="p" component="span">
                Cantidad de <b style={{ color: "#FF0000" }}>pedidos</b> de tipo
                urgencia del mes: <b style={{ color: "#008180" }}>6</b>
              </Typography>
            </Box>
            <Box
              sx={{
                padding: "15px",
                backgroundColor: "#F0F0F0",
                display: "flex",
                marginBottom: "20px",
              }}
            >
              <RadioButtonCheckedIcon
                sx={{ marginRight: "10px" }}
              ></RadioButtonCheckedIcon>
              <Typography variant="p" component="span">
                Tiempo de entrega promedio entre el envío y la recepción:{" "}
                <b style={{ color: "#008180" }}>3 días</b>
              </Typography>
            </Box>
            <Box
              sx={{
                padding: "15px",
                backgroundColor: "#F0F0F0",
                display: "flex",
              }}
            >
              <RadioButtonCheckedIcon
                sx={{ marginRight: "10px" }}
              ></RadioButtonCheckedIcon>
              <Typography variant="p" component="span">
                Cantidad de pedidos totales enviados este mes:{" "}
                <b style={{ color: "#008180" }}>25</b>
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Grid container spacing={2} columns={2} sx={{ marginTop: "40px" }}>
          <Grid item xs={2}>
            <Typography
              variant="h5"
              component="div"
              sx={{
                marginBottom: "15px",
                textAlign: "right",
                color: "teal",
                cursor: "pointer",
              }}
              onClick={goToCargarNuevoPedido}
            >
              <u>Cargar un nuevo pedido</u>
              <AddBoxIcon
                sx={{ marginLeft: "10px", top: "5px", position: "relative" }}
              ></AddBoxIcon>
            </Typography>
            <TableContainer component={Paper}>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow
                    sx={{
                      backgroundColor: "#f5f5f5",
                    }}
                  >
                    <TableCell>
                      <b>Hospital</b>
                    </TableCell>
                    <TableCell>
                      <b>Referencia pedido</b>
                    </TableCell>
                    <TableCell>
                      <b>Nombre de medicamento</b>
                    </TableCell>
                    <TableCell>
                      <b>Fecha del pedido</b>
                    </TableCell>
                    <TableCell>
                      <b>Cantidad</b>
                    </TableCell>
                    <TableCell>
                      <b>Tipo</b>
                    </TableCell>
                    <TableCell>
                      <b>Estado</b>
                    </TableCell>
                    <TableCell>
                      <b>Acción</b>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.hospital}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                        backgroundColor: "#f5f5f5",
                      }}
                    >
                      <TableCell component="th" scope="row">
                        {row.hospital}
                      </TableCell>
                      <TableCell>{row.ref}</TableCell>
                      <TableCell>{row.medicamento}</TableCell>
                      <TableCell>{row.fecha}</TableCell>
                      <TableCell>{row.cantidad}</TableCell>
                      <TableCell>{row.tipo}</TableCell>
                      <TableCell>{row.estado}</TableCell>
                      <TableCell>
                        {row.estado === "En preparación" && (
                          <DeleteIcon
                            sx={{ color: "red", cursor: "pointer" }}
                            onClick={() => setStockOpen(true)}
                          ></DeleteIcon>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </Box>

      <Modal
        open={stockOpen}
        onClose={() => setStockOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Typography variant="h6" component="h2">
            ¿Está seguro que desea eliminar el pedido?
          </Typography>
          <Divider sx={{ marginTop: 1, marginBottom: 2 }} />
          <br />
          <Container sx={{ textAlign: "center" }}>
            <Button
              variant="outlined"
              onClick={() => setStockOpen(false)}
              sx={{ marginRight: 1, width: 180 }}
            >
              CANCELAR
            </Button>
            <Button
              variant="contained"
              onClick={() => setStockOpen(false)}
              sx={{ marginRight: 1, width: 180 }}
            >
              CONFIRMAR
            </Button>
          </Container>
        </Box>
      </Modal>
    </Container>
  );
}
