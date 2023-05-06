import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  CircularProgress,
  AppBar,
  Toolbar,
  IconButton,
} from "@mui/material";
import { GitHub } from "@mui/icons-material";
import RepoTable from "./components/RepoTable";
import getReactRepositories from "./services/githubService";

const App = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);

  useEffect(() => {
    getReactRepositories(page * 30)
      .then((data) => setRepos(data))
      .finally(() => setLoading(false));
  }, [page]);

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit">
            <GitHub />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            React Repositories
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg" sx={{ marginTop: "2rem" }}>
        {loading ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "200px",
            }}
          >
            <CircularProgress />
          </div>
        ) : (
          <RepoTable
            repos={repos}
            page={page}
            handlePageChange={handlePageChange}
          />
        )}
      </Container>
    </div>
  );
};

export default App;
