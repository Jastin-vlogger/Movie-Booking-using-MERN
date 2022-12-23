import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../../thems";
import Header from "../../../components/Admin/Header/Header";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { approveTheaters, fetchTheaters } from "../../../action/theaterAction";
import Loading from "../../../components/Loading/Loading";

function TheaterList() {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const getTheatersList = useSelector((state) => state.getTheaters);
  const { loading, getTheaters, error } = getTheatersList;
  const getTheaterApproveStatus = useSelector((state) => state.approveTheater);
  const { approvetheaters } = getTheaterApproveStatus;

  console.log(getTheaters);

  useEffect(() => {
    dispatch(fetchTheaters());
  }, [approvetheaters, dispatch]);

  const approveTheater = (status) => {
    dispatch(approveTheaters(status));
  };

  const navigate = useNavigate();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "_id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "theater",
      headerName: "theater",
      type: "text",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "isApproved",
      headerName: "Action",
      flex: 1,
      renderCell: (params) => {
        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={
              params.row.isApproved === false
                ? colors.greenAccent[700]
                : []
            }
            borderRadius="4px"
          >
            {params.row.isApproved === false && (
              <div
              style = {{cursor:"pointer"}}
                className="viewButton"
                onClick={() =>
                  approveTheater({ status: "approve", id: params.id })
                }
              >
                Approve
              </div>
            )}
          </Box>
        );
      },
    },
  ];
  const columnsApproved = [
    { field: "_id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "theater",
      headerName: "theater",
      type: "text",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
  ];
  return (
    <Box m="20px">
      <Header title="Theaters" subtitle="Manage Theaters" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        {loading && <Loading />}
        <DataGrid
          checkboxSelection
          rows={getTheaters}
          columns={columns}
          pageSize={9}
          rowsPerPageOptions={[9]}
          getRowId={(row) => row._id}
        />
      </Box>
    </Box>
  );
}

export default TheaterList;
