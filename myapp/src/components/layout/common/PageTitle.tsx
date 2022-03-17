import { Grid, Typography } from "@mui/material";

type titleProps = {
  title: string;
};

export const PageTitle = (props: titleProps) => {
  return (
    <Grid container>
      <Grid item xs={12} sm={12}>
        <Typography style={styles.text} variant="h1">
          {props.title}
        </Typography>
      </Grid>
    </Grid>
  );
};

const styles = {
  text: {
    margin: "0 0 0 270px",
  },
};
