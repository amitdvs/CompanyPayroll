import { Grid, Typography } from '@mui/material'
import Sidebar from '../sidebar/Sidebar'

type titleProps = {
  title: string
}

export const PageTitle = (props: titleProps) => {
  return (
    <div>
      <Grid container>
        <Grid item xs={12} sm={12}>
          <Typography style={styles.text} variant="h1">
            {props.title}
          </Typography>
        </Grid>
      </Grid>
    </div>
  )
}

const styles = {
  text: {
    margin: '0 0 0 100px',
  },
}
