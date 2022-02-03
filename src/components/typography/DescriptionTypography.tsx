import {FC} from 'react';
import {makeStyles} from '@mui/styles';
import {Box} from '@mui/system';
import Typography from '@mui/material/Typography';
import { theme } from '../../shared/colorTheme';

const useStyles = makeStyles({
  box: {
    textAlign: 'left',
    marginBottom: '1em',
    marginLeft: '10px',
  },
});

const DescriptionTypography: FC<{message: string}> = ({message}) => {
  const styles = useStyles();
  return (
    <Box component="div" className={styles.box}>
      <Typography
        component='div'
        fontSize='15px'
        color={theme.palette.textBlack.light}
      >{message}
      </Typography>
    </Box>
  );
}

export default DescriptionTypography;
