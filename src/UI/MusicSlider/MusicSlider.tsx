import React, { useState, useContext } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import { MusicContext } from '../../App';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 200 + theme.spacing(3) * 2,
  },
  margin: {
    height: theme.spacing(3),
  },
}));


const PrettoSlider = withStyles({
  root: {
    color: '#52af77',
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    marginTop: -8,
    marginLeft: -12,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);

interface MusicSliderProps {
  text: string,
};

const MusicSlider: React.FC<MusicSliderProps> = ({ text }) => {
  const classes = useStyles();

  const [volume, setVolume] = useState<number | number[] >(5 as number);
  const { setMusicVolume } = useContext(MusicContext);

  const handleChange = (event: any, value: number | number[] ): void => {
    setVolume(value);  
    setMusicVolume(Number(value));
  };

  return (
    <div className={classes.root}>
      <Typography gutterBottom>{text}</Typography>
      <PrettoSlider 
        value={volume}
        onChange={handleChange} 
        valueLabelDisplay="auto" 
        aria-label={`${text} slider`} 
        // defaultValue={20} 
        step={1}
        min={0}
        max={100}
      />
      <div className={classes.margin} />
    </div>
  );
}

export default MusicSlider;
