import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import image from './parque.jpeg';
import * as ROUTES from '../../constants/routes';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
});

 const tileData = [
    {
     img: image,
     title: 'Visualización 1',
      author: 'author',
      url: ROUTES.ACCOUNT
    },
    {
     img: image,
     title: 'Visualización 1',
      author: 'author',
      url: ROUTES.ACCOUNT
    },
    {
     img: image,
     title: 'Visualización 1',
      author: 'author',
      url: ROUTES.ACCOUNT
    },
    {
     img: image,
     title: 'Visualización 1',
      author: 'author',
      url: ROUTES.ACCOUNT
    }
  ];

function V8Page(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">Visualizaciónes</ListSubheader>
        </GridListTile>
        {tileData.map(tile => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              subtitle={<span>{tile.author}</span>}
              actionIcon={
                <IconButton className={classes.icon} href={tile.url}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

V8Page.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(V8Page);
