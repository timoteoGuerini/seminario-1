import React, { useState } from "react";
import { Container } from "@mui/system";
import { Box } from "@mui/system";
import { Typography, Divider, Select } from "@mui/material";
import { Grid } from "@mui/material";
import MenuDrawerCentral from "../../components/MenuDrawerCentral";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import Paper from "@mui/material/Paper";
import TableRow from "@mui/material/TableRow";
import AssessmentIcon from "@mui/icons-material/Assessment";
import MedicationIcon from "@mui/icons-material/Medication";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";


import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Pie,
  PieChart,
  Cell,
} from "recharts";

const boxShadowStyle = {
  padding: "10px 20px",
  borderRadius: "5px",
  border: "1px solid var(--main-border)",
  boxShadow: "1px 1px 10px 0 rgb(0 0 0 / 15%)",
  margin: "auto",
  marginTop: "40px",
  display: "flex",
  alignItems: "center",
};

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-25%, -50%)",
  width: "400px",
  bgcolor: "white",
  boxShadow: 24,
  p: 4,
  textAlign: "center",
};

const barData = [
  {
    name: "Factor VII Octapharma",
    sep: 1312,
    oct: 874,
  },
  {
    name: "Factor VIII UNC",
    sep: 1740,
    oct: 1390,
  },
  {
    name: "Factor VIII Koate",
    sep: 932,
    oct: 1037,
  },
];

const pieData = [
  { name: "Argerich", value: 400, color: "#0D3EEE" },
  { name: "Udaondo", value: 300, color: "#E40C0C" },
  { name: "Durand", value: 300, color: "#12DCAC" },
  { name: "Pirovano", value: 200, color: "#E77D30" },
  { name: "Garrahan", value: 278, color: "#60E04C" },
  { name: "Gandulfo", value: 189, color: "#31BCDB" },
  { name: "Rivadavia", value: 500, color: "#DB10AE" },
];

const rows = [
  {
    hospital: "Rivadavia",
    medicamentos: "Factor VIII Koate, Fac...",
  },
  {
    hospital: "Udaondo",
    medicamentos: "Factor VIII UNC",
  },
];

export default function HomeCentral() {
  const [stockOpen, setStockOpen] = useState(false);
  const [reportOpen, setReportOpen] = useState(false);
  const [hospital, setHospital] = useState("");

  return (
    <Container
      sx={{
        display: "flex",
        minWidth: "100%",
        marginTop: "80px",
      }}
    >
      <MenuDrawerCentral />
      <Box>
        <Grid container spacing={2} columns={4}>
          <Grid item xs={2}>
            <Typography
              variant="h4"
              component="div"
              sx={{ paddingBottom: "25px", paddingTop: "10px", color:"rgba(0, 129, 128, 0.87)" }}
            >
              <b>Medicamentos a punto de{" "}</b>
              <b style={{ color: "#FF0000" }}>quebrar stock</b>
            </Typography>
            <br />
            <br />
            <TableContainer component={Paper}>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow
                    sx={{
                      backgroundColor: "#f5f5f5",
                    }}
                  >
                    <TableCell>Hospital</TableCell>
                    <TableCell>Medicamentos</TableCell>
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
                      <TableCell>
                        <a href="#" onClick={() => setStockOpen(true)}>
                          {row.medicamentos}
                        </a>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          <Grid item xs={2}>
            <Typography
              variant="h4"
              component="div"
              sx={{ paddingBottom: "25px", paddingTop: "10px" }}
            >
              Comparativa de uso
              <b style={{ color: "#008180" }}> medicamentos</b> entre mes actual
              y mes pasado
            </Typography>
            <BarChart
              width={650}
              height={300}
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
              <Tooltip />
              <Legend />
              <Bar dataKey="sep" fill="#008180" unit={" unidades"} />
              <Bar dataKey="oct" fill="#E93030" unit={" unidades"} />
            </BarChart>
          </Grid>
          <Grid item xs={2}>
            <Typography
              variant="h4"
              component="div"
              sx={{ paddingBottom: "25px", paddingTop: "10px" }}
            >
              Descargá los reportes <b style={{ color: "#008180" }}>acá</b>
            </Typography>
            <Box style={boxShadowStyle}>
              <AssessmentIcon sx={{ color: "teal", fontSize: "56px" }} />
              <Typography
                variant="h5"
                component="span"
                sx={{ paddingLeft: "25px" }}
              >
                <a href="#" onClick={() => setReportOpen(true)}>
                  Stock por hospital
                </a>
              </Typography>
            </Box>
            <Box style={boxShadowStyle}>
              <MedicationIcon sx={{ color: "teal", fontSize: "56px" }} />
              <Typography
                variant="h5"
                component="span"
                sx={{ paddingLeft: "25px" }}
              >
                <a href="#" onClick={() => setReportOpen(true)}>
                  Uso de medicación
                </a>
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={2}>
            <Typography
              variant="h5"
              component="div"
              sx={{ paddingBottom: "25px", paddingTop: "10px" }}
            >
              Proporción de pacientes por hospital en{" "}
              <b style={{ color: "#008180" }}>Diciembre</b>
            </Typography>
            <PieChart width={700} height={400}>
              <Pie
                dataKey="value"
                isAnimationActive={false}
                data={pieData}
                fill="#8884d8"
                label={"name"}
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
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
            Medicamentos a punto de{" "}
            <b style={{ color: "#FF0000" }}>quebrar stock</b> en hospital{" "}
            <b style={{ color: "#008180" }}>Rivadavia</b>
          </Typography>
          <Divider sx={{ marginTop: 1, marginBottom: 2 }} />
          <Typography variant="p" component="p" sx={{ marginBottom: "5px" }}>
            Factor VIII Koate: <b style={{ color: "#FF0000" }}>5 unidades</b>
          </Typography>
          <Typography variant="p" component="p" sx={{ marginBottom: "5px" }}>
            Factor VII Octapharma:{" "}
            <b style={{ color: "#FF0000" }}>10 unidades</b>
          </Typography>
          <br />
          <Container sx={{ textAlign: "center" }}>
            <Button
              variant="contained"
              onClick={() => setStockOpen(false)}
              sx={{ marginRight: 1, width: 270 }}
            >
              CERRAR
            </Button>
          </Container>
        </Box>
      </Modal>

      <Modal
        open={reportOpen}
        onClose={() => setReportOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Typography variant="h6" component="h2">
            Esto descargará un reporte del stock de todos los medicamentos
            <b style={{ color: "#008180" }}> disponibles</b> en el hospital{" "}
            <b style={{ color: "#008180" }}>seleccionado</b>.
          </Typography>
          <Divider sx={{ marginTop: 1, marginBottom: 2 }} />
          <FormControl sx={{ minWidth: "100%" }} variant="outlined">
            <Select
              sx={{ width: "100%" }}
              onChange={(v) => setHospital(v.target.value)}
              value={hospital}
              displayEmpty
            >
              <MenuItem value="" default disabled>
                <em>Seleccione un hospital</em>
              </MenuItem>
              <MenuItem value={"posadas"}>Hospital Posadas</MenuItem>
              <MenuItem value={"rivadavia"}>Hospital Rivadavia</MenuItem>
              <MenuItem value={"pirovano"}>Hospital Pirovano</MenuItem>
            </Select>
          </FormControl>
          <br />
          <Container
            sx={{ textAlign: "center", marginTop: "20px", padding: 0 }}
          >
            <Button
              variant="contained"
              onClick={() => setReportOpen(false)}
              sx={{ width: "100%" }}
              disabled={!hospital}
            >
              DESCARGAR
            </Button>
          </Container>
        </Box>
      </Modal>
    </Container>
  );
}
