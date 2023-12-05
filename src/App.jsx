import MainToDoList from "./modules/ToDoList";
import { ThemeProvider, createTheme } from "@mui/material";

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <MainToDoList />
      </ThemeProvider>
    </div>
  );
}

export default App;
