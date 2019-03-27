import React from 'react';
import { Card, CardImg, CardText, CardBody, CardSubtitle, Button } from 'reactstrap';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import especies from './especies.jpg';
import interaccion from './interaccion.png';
import parque from './parque.jpg';
import reviews from './reviews.png';
import uso from './uso.jpg';
import usuarios from './usuarios.png';

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
    width: 700,
    height: 800,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
});

 const tileData = [
    {
     img: usuarios,
     title: 'Usuarios',
      author: 'información sobre usuarios',
      url: ROUTES.V1
    },
    {
     img: parque,
     title: 'Parques',
      author: 'Información relacionada con los parques',
      url: ROUTES.V2
    },
    {
     img: especies,
     title: 'Especies',
      author: 'Información sobre las especies',
      url: ROUTES.V3
    },
    {
     img: reviews,
     title: 'Reviews',
      author: 'Calificaciones de los usuarios',
      url: ROUTES.V4
    },
    {
     img: uso,
     title: 'Uso de la app',
      author: 'Estadísticas sobre el uso de la app',
      url: ROUTES.V5
    },
    {
     img: interaccion,
     title: 'Interacción',
      author: 'Registros sobre la interacción de los usuarios',
      url: ROUTES.V6
    }
  ];



function LandingPage(props) {
  const { classes } = props;
  return (
    <div>
      <div class="jumbotron">
    <h1 className="text-center" >Dashboard de Colombia Viva</h1>
    <div className="text-center">Aquí encontrarás toda la información de negocio de la app</div>
    </div>
<div className={classes.root}>
  <GridList cellHeight={200} className={classes.gridList}>
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

  <div class="container mt-5">
    <hr></hr>
    <h1 className="text-center my-5" > Preguntas de negocio</h1>
    <div class="row">
      <div class="col-sm">
        <div>
      <Card>
        <CardImg top width="20%" height="200" src="http://www.cibepyme.com/export/sites/cibepyme/minisites/costa_rica/.content/imagenes/estadisticas.jpg_1160572873.jpg" alt="Card image cap" />
        <CardBody>
          <CardSubtitle className="font-weight-bold">Pregunta 1</CardSubtitle>
          <CardText>¿Cuántas descargas tiene la aplicación al mes?</CardText>
        </CardBody>
      </Card>
    </div>
      </div>
      <div class="col-sm">
        <div>
      <Card>
        <CardImg top width="20%" height="200" src="http://coie-server.uned.es/archivos_publicos/qweb_web/1/estadisticas1.jpg" alt="Card image cap" />
        <CardBody>
          <CardSubtitle className="font-weight-bold">Pregunta 2</CardSubtitle>
          <CardText>¿Cuáles son las ubicaciones más buscadas en la aplicación?</CardText>
        </CardBody>
      </Card>
    </div>

      </div>
      <div class="col-sm">
        <div>
      <Card>
        <CardImg top width="20%" height="200" src="http://legionariosdecristo.org/es/wp-content/uploads/2016/03/estadisticalc15-e1456758898158.jpg" alt="Card image cap" />
        <CardBody>
          <CardSubtitle className="font-weight-bold">Pregunta 3</CardSubtitle>
          <CardText>¿Qué rango de edad es el más frecuente en los usuarios?</CardText>
        </CardBody>
      </Card>
    </div>
      </div>
    </div>
    <div class="row mt-4">
      <div class="col-sm">
        <div>
      <Card>
        <CardImg top width="20%" height="200" src="http://turismodelasubbetica.es/wp-content/uploads/2017/06/estad%C3%ADstica-copia.jpg" alt="Card image cap" />
        <CardBody>
          <CardSubtitle className="font-weight-bold">Pregunta 4</CardSubtitle>
          <CardText>¿Cuáles son los parques más frecuentados por los usuarios?</CardText>
        </CardBody>
      </Card>
    </div>
      </div>
      <div class="col-sm">
        <div>
      <Card>
        <CardImg top width="20%" height="200" src="http://www.escapadarural.com/blog/propietarios/files/2015/04/Estad%C3%ADsticas-de-casas-rurales.jpg" alt="Card image cap" />
        <CardBody>
          <CardSubtitle className="font-weight-bold">Pregunta 5</CardSubtitle>
          <CardText>¿Cuáles parques presentan poca información para los usuarios?</CardText>
        </CardBody>
      </Card>
    </div>
      </div>
      <div class="col-sm">
        <div>
      <Card>
        <CardImg top width="20%" height="200" src="https://lh5.googleusercontent.com/-A4M5N0ybXZQ/VI39mynYBsI/AAAAAAABLUk/VZmzxezdpJo/s640/estadisticas-viaje.jpg" alt="Card image cap" />
        <CardBody>
          <CardSubtitle className="font-weight-bold">Pregunta 6</CardSubtitle>
          <CardText>¿Cuáles usuarios presentan mayor interacción con la aplicación?</CardText>
        </CardBody>
      </Card>
    </div>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <div>
      <Card>
        <CardImg top width="20%" height="200" src="http://www.cibepyme.com/export/sites/cibepyme/minisites/costa_rica/.content/imagenes/estadisticas.jpg_1160572873.jpg" alt="Card image cap" />
        <CardBody>
          <CardSubtitle className="font-weight-bold">Pregunta 7</CardSubtitle>
          <CardText>¿Cuántas descargas tiene la aplicación al mes?</CardText>
        </CardBody>
      </Card>
    </div>
      </div>
      <div class="col-sm">
        <div>
      <Card>
        <CardImg top width="20%" height="200" src="http://coie-server.uned.es/archivos_publicos/qweb_web/1/estadisticas1.jpg" alt="Card image cap" />
        <CardBody>
          <CardSubtitle className="font-weight-bold">Pregunta 8</CardSubtitle>
          <CardText>¿Cuáles son las ubicaciones más buscadas en la aplicación?</CardText>
        </CardBody>
      </Card>
    </div>
      </div>
      <div class="col-sm">
        <div>
      <Card>
        <CardImg top width="20%" height="200" src="http://legionariosdecristo.org/es/wp-content/uploads/2016/03/estadisticalc15-e1456758898158.jpg" alt="Card image cap" />
        <CardBody>
          <CardSubtitle className="font-weight-bold">Pregunta 9</CardSubtitle>
          <CardText>¿Qué rango de edad es el más frecuente en los usuarios?</CardText>
        </CardBody>
      </Card>
    </div>
      </div>
    </div>
    <div class="row mt-4">
      <div class="col-sm">
        <div>
      <Card>
        <CardImg top width="20%" height="200" src="http://turismodelasubbetica.es/wp-content/uploads/2017/06/estad%C3%ADstica-copia.jpg" alt="Card image cap" />
        <CardBody>
          <CardSubtitle className="font-weight-bold">Pregunta 10</CardSubtitle>
          <CardText>¿Cuáles son los parques más frecuentados por los usuarios?</CardText>
        </CardBody>
      </Card>
    </div>
      </div>
      <div class="col-sm">
        <div>
      <Card>
        <CardImg top width="20%" height="200" src="http://www.escapadarural.com/blog/propietarios/files/2015/04/Estad%C3%ADsticas-de-casas-rurales.jpg" alt="Card image cap" />
        <CardBody>
          <CardSubtitle className="font-weight-bold">Pregunta 11</CardSubtitle>
          <CardText>¿Cuáles parques presentan poca información para los usuarios?</CardText>
        </CardBody>
      </Card>
    </div>
      </div>
      <div class="col-sm">
        <div>
      <Card>
        <CardImg top width="20%" height="200" src="https://lh5.googleusercontent.com/-A4M5N0ybXZQ/VI39mynYBsI/AAAAAAABLUk/VZmzxezdpJo/s640/estadisticas-viaje.jpg" alt="Card image cap" />
        <CardBody>
          <CardSubtitle className="font-weight-bold">Pregunta 12</CardSubtitle>
          <CardText>¿Cuáles usuarios presentan mayor interacción con la aplicación?</CardText>
        </CardBody>
      </Card>
    </div>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <div>
      <Card>
        <CardImg top width="20%" height="200" src="http://www.cibepyme.com/export/sites/cibepyme/minisites/costa_rica/.content/imagenes/estadisticas.jpg_1160572873.jpg" alt="Card image cap" />
        <CardBody>
          <CardSubtitle className="font-weight-bold">Pregunta 13</CardSubtitle>
          <CardText>¿Cuántas descargas tiene la aplicación al mes?</CardText>
        </CardBody>
      </Card>
    </div>
      </div>
      <div class="col-sm">
        <div>
      <Card>
        <CardImg top width="20%" height="200" src="http://coie-server.uned.es/archivos_publicos/qweb_web/1/estadisticas1.jpg" alt="Card image cap" />
        <CardBody>
          <CardSubtitle className="font-weight-bold">Pregunta 14</CardSubtitle>
          <CardText>¿Cuáles son las ubicaciones más buscadas en la aplicación?</CardText>
        </CardBody>
      </Card>
    </div>
      </div>
      <div class="col-sm">
        <div>
      <Card>
        <CardImg top width="20%" height="200" src="http://legionariosdecristo.org/es/wp-content/uploads/2016/03/estadisticalc15-e1456758898158.jpg" alt="Card image cap" />
        <CardBody>
          <CardSubtitle className="font-weight-bold">Pregunta 15</CardSubtitle>
          <CardText>¿Qué rango de edad es el más frecuente en los usuarios?</CardText>
        </CardBody>
      </Card>
    </div>
      </div>
    </div>
    <div class="row mt-4">
      <div class="col-sm">
        <div>
      <Card>
        <CardImg top width="20%" height="200" src="http://turismodelasubbetica.es/wp-content/uploads/2017/06/estad%C3%ADstica-copia.jpg" alt="Card image cap" />
        <CardBody>
          <CardSubtitle className="font-weight-bold">Pregunta 16</CardSubtitle>
          <CardText>¿Cuáles son los parques más frecuentados por los usuarios?</CardText>
        </CardBody>
      </Card>
    </div>
      </div>
      <div class="col-sm">
        <div>
      <Card>
        <CardImg top width="20%" height="200" src="http://www.escapadarural.com/blog/propietarios/files/2015/04/Estad%C3%ADsticas-de-casas-rurales.jpg" alt="Card image cap" />
        <CardBody>
          <CardSubtitle className="font-weight-bold">Pregunta 17</CardSubtitle>
          <CardText>¿Cuáles parques presentan poca información para los usuarios?</CardText>
        </CardBody>
      </Card>
    </div>
      </div>
      <div class="col-sm">
        <div>
      <Card>
        <CardImg top width="20%" height="200" src="https://lh5.googleusercontent.com/-A4M5N0ybXZQ/VI39mynYBsI/AAAAAAABLUk/VZmzxezdpJo/s640/estadisticas-viaje.jpg" alt="Card image cap" />
        <CardBody>
          <CardSubtitle className="font-weight-bold">Pregunta 18</CardSubtitle>
          <CardText>¿Cuáles usuarios presentan mayor interacción con la aplicación?</CardText>
        </CardBody>
      </Card>
    </div>
      </div>
    </div>

  </div>

  </div>

);
}
LandingPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LandingPage);
