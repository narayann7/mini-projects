import "./App.css";
import TodoList from "./components/todo_list";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#BC9EC1",
    },
    secondary: {
      main: "#E3BAC6",
    },
    
    background: {
      default: "#1F2232",
      paper: "#596475",
    },
    text: {
      secondary: "rgba(0,0,0,0.7)",
    },
    info: {
      main: "#FDE8E9",
    },
    warning: {
      main: '#1F2232',
    },
  },
  typography: {
    h3: {
      fontSize: "2.3rem",
    },
  },

});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <TodoList />
    </ThemeProvider>
  );
}

export default App;
