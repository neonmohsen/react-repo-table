import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { styled } from "@mui/system";
import SortUpIcon from "../icons/SortUpIcon";
import SortDownIcon from "../icons/SortDownIcon";

const CustomDataGrid = styled(DataGrid)(({ theme }) => ({
  "& .MuiDataGrid-root": {
    backgroundColor: "#fff",
  },
  "& .MuiDataGrid-columnsContainer": {
    backgroundColor: "#3f51b5",
    color: "#fff",
    fontWeight: "bold",
    borderBottom: "2px solid #fff",
    "& .MuiDataGrid-colCellTitle": {
      lineHeight: "1.5",
    },
  },
  "& .MuiDataGrid-cell": {
    color: "#333",
  },
  "& .MuiDataGrid-row": {
    "&:nth-of-type(even)": {
      backgroundColor: "#f5f5f5",
    },
    "&:hover": {
      backgroundColor: "#e0e0e0",
    },
  },
  "& .MuiDataGrid-cell:focus-within": {
    backgroundColor: "#e0e0e0",
  },
  "& .MuiDataGrid-columnSeparator": {
    display: "none",
  },
  "& .MuiDataGrid-sortIcon": {
    color: "#fff",
    fontSize: "1rem",
  },
  "& .MuiDataGrid-iconSeparator": {
    color: "#fff",
    opacity: "0.8",
  },
  "& .MuiPagination-root": {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(2),
    justifyContent: "center",
    "& .MuiPagination-ul": {
      "& button": {
        fontSize: "1rem",
        fontWeight: "bold",
      },
    },
  },
  "& .MuiPaginationItem-root.Mui-selected": {
    backgroundColor: "#3f51b5",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#3f51b5",
      color: "#fff",
    },
  },
}));

const RepoTable = ({ repos, page, handlePageChange }) => {
  const columns = [
    {
      field: "name",
      headerName: "Name",
      width: 200,
      renderCell: (params) => (
        <a
          href={repos[params.id].html_url}
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          {params.value}
        </a>
      ),
    },
    { field: "description", headerName: "Description", width: 300 },
    { field: "language", headerName: "Language", width: 150 },
    { field: "stars", headerName: "Stars", width: 150 },
    { field: "forks", headerName: "Forks", width: 150 },
  ];

  const rows = repos.map((repo, index) => ({
    id: index,
    name: repo.name,
    description: repo.description,
    language: repo.language,
    stars: repo.stars,
    forks: repo.forks,
  }));

  return (
    <div style={{ height: 650, width: "100%" }}>
      <CustomDataGrid
        rows={rows}
        columns={columns}
        pageSize={30}
        rowsPerPageOptions={[30]}
        pagination
        onPageChange={handlePageChange}
        getRowClassName={(params) => "super-app-theme--cell"}
        components={{
          ColumnSortedAscendingIcon: SortUpIcon,
          ColumnSortedDescendingIcon: SortDownIcon,
        }}
      />
    </div>
  );
};

export default RepoTable;
