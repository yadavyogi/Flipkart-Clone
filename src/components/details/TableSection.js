import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import { adURL } from "../../constant/data";

const currentDate = new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000);
function TableSection() {
  return (
    <div>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell style={{ color: "#878787" }}>Delivery</TableCell>
            <TableCell style={{ fontWeight: "600" }}>
              Delivery by {currentDate.toDateString()} | ₹40 Delivery charges
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell style={{ color: "#878787" }}>Warranty</TableCell>
            <TableCell>No Warranty</TableCell>
          </TableRow>

          <TableRow>
            <TableCell style={{ color: "#878787" }}>Seller</TableCell>
            <TableCell>
              <Box style={{ color: "#2874f0" }} component="span">
                CORSECA
              </Box>
              <Typography>GST invoice available</Typography>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell colSpan={2}>
              <img src={adURL} alt="Super coin" style={{ width: 390 }} />
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell style={{ color: "#878787" }}>Description</TableCell>
            <TableCell style={{}}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              alias voluptate maiores? Quasi saepe optio modi vel magni.
              Expedita, omnis nisi. Eos sapiente facere praesentium iste fugit.
              Incidunt, placeat veniam!
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}

export default TableSection;
