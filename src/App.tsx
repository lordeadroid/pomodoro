import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  page: {
    color: "red",
  },
});

const App = (): React.JSX.Element => {
  const classes = useStyles();

  return (
    <div className={classes.page}>
      <h1>Pomodoro</h1>
    </div>
  );
};

export default App;
