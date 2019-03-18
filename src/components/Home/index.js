import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

import * as ROUTES from '../../constants/routes';
const HomePage = () => (
<div>
    <div class="jumbotron">
  <h1>Dashboard de Colombia Viva</h1>
  <p>Aquí encontrarás toda la información de negocio de la app</p>
</div>

  <div class="container mt-5">
    <div class="row">
      <div class="col-sm">
        <div>
      <Card>
        <CardImg top width="100%" height="300" src="http://www.cibepyme.com/export/sites/cibepyme/minisites/costa_rica/.content/imagenes/estadisticas.jpg_1160572873.jpg" alt="Card image cap" />
        <CardBody>
          <CardSubtitle className="font-weight-bold">Pregunta 1</CardSubtitle>
          <CardText>¿Cuántas descargas tiene la aplicación al mes?</CardText>
          <Button className="btn btn-success" href={ROUTES.LANDING}>Ver Visualización</Button>
        </CardBody>
      </Card>
    </div>
      </div>
      <div class="col-sm">
        <div>
      <Card>
        <CardImg top width="100%" height="300" src="http://coie-server.uned.es/archivos_publicos/qweb_web/1/estadisticas1.jpg" alt="Card image cap" />
        <CardBody>
          <CardSubtitle className="font-weight-bold">Pregunta 2</CardSubtitle>
          <CardText>¿Cuáles son las ubicaciones más buscadas en la aplicación?</CardText>
          <Button className="btn btn-success" href={ROUTES.LANDING}>Ver Visualización</Button>
        </CardBody>
      </Card>
    </div>
      </div>
      <div class="col-sm">
        <div>
      <Card>
        <CardImg top width="100%" height="300" src="http://legionariosdecristo.org/es/wp-content/uploads/2016/03/estadisticalc15-e1456758898158.jpg" alt="Card image cap" />
        <CardBody>
          <CardSubtitle className="font-weight-bold">Pregunta 3</CardSubtitle>
          <CardText>¿Qué rango de edad es el más frecuente en los usuarios?</CardText>
          <Button className="btn btn-success" href={ROUTES.LANDING}>Ver Visualización</Button>
        </CardBody>
      </Card>
    </div>
      </div>
    </div>
    <div class="row mt-4">
      <div class="col-sm">
        <div>
      <Card>
        <CardImg top width="100%" height="300" src="http://turismodelasubbetica.es/wp-content/uploads/2017/06/estad%C3%ADstica-copia.jpg" alt="Card image cap" />
        <CardBody>
          <CardSubtitle className="font-weight-bold">Pregunta 4</CardSubtitle>
          <CardText>¿Cuáles son los parques más frecuentados por los usuarios?</CardText>
          <Button className="btn btn-success" href={ROUTES.LANDING}>Ver Visualización</Button>
        </CardBody>
      </Card>
    </div>
      </div>
      <div class="col-sm">
        <div>
      <Card>
        <CardImg top width="100%" height="300" src="http://www.escapadarural.com/blog/propietarios/files/2015/04/Estad%C3%ADsticas-de-casas-rurales.jpg" alt="Card image cap" />
        <CardBody>
          <CardSubtitle className="font-weight-bold">Pregunta 5</CardSubtitle>
          <CardText>¿Cuáles parques presentan poca información para los usuarios?</CardText>
          <Button className="btn btn-success" href={ROUTES.LANDING}>Ver Visualización</Button>
        </CardBody>
      </Card>
    </div>
      </div>
      <div class="col-sm">
        <div>
      <Card>
        <CardImg top width="100%" height="300" src="https://lh5.googleusercontent.com/-A4M5N0ybXZQ/VI39mynYBsI/AAAAAAABLUk/VZmzxezdpJo/s640/estadisticas-viaje.jpg" alt="Card image cap" />
        <CardBody>
          <CardSubtitle className="font-weight-bold">Pregunta 6</CardSubtitle>
          <CardText>¿Cuáles usuarios presentan mayor interacción con la aplicación?</CardText>
          <Button className="btn btn-success" href={ROUTES.LANDING}>Ver Visualización</Button>
        </CardBody>
      </Card>
    </div>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <div>
      <Card>
        <CardImg top width="100%" height="300" src="http://www.cibepyme.com/export/sites/cibepyme/minisites/costa_rica/.content/imagenes/estadisticas.jpg_1160572873.jpg" alt="Card image cap" />
        <CardBody>
          <CardSubtitle className="font-weight-bold">Pregunta 7</CardSubtitle>
          <CardText>¿Cuántas descargas tiene la aplicación al mes?</CardText>
          <Button className="btn btn-success" href={ROUTES.LANDING}>Ver Visualización</Button>
        </CardBody>
      </Card>
    </div>
      </div>
      <div class="col-sm">
        <div>
      <Card>
        <CardImg top width="100%" height="300" src="http://coie-server.uned.es/archivos_publicos/qweb_web/1/estadisticas1.jpg" alt="Card image cap" />
        <CardBody>
          <CardSubtitle className="font-weight-bold">Pregunta 8</CardSubtitle>
          <CardText>¿Cuáles son las ubicaciones más buscadas en la aplicación?</CardText>
          <Button className="btn btn-success" href={ROUTES.LANDING}>Ver Visualización</Button>
        </CardBody>
      </Card>
    </div>
      </div>
      <div class="col-sm">
        <div>
      <Card>
        <CardImg top width="100%" height="300" src="http://legionariosdecristo.org/es/wp-content/uploads/2016/03/estadisticalc15-e1456758898158.jpg" alt="Card image cap" />
        <CardBody>
          <CardSubtitle className="font-weight-bold">Pregunta 9</CardSubtitle>
          <CardText>¿Qué rango de edad es el más frecuente en los usuarios?</CardText>
          <Button className="btn btn-success" href={ROUTES.LANDING}>Ver Visualización</Button>
        </CardBody>
      </Card>
    </div>
      </div>
    </div>
    <div class="row mt-4">
      <div class="col-sm">
        <div>
      <Card>
        <CardImg top width="100%" height="300" src="http://turismodelasubbetica.es/wp-content/uploads/2017/06/estad%C3%ADstica-copia.jpg" alt="Card image cap" />
        <CardBody>
          <CardSubtitle className="font-weight-bold">Pregunta 10</CardSubtitle>
          <CardText>¿Cuáles son los parques más frecuentados por los usuarios?</CardText>
          <Button className="btn btn-success" href={ROUTES.LANDING}>Ver Visualización</Button>
        </CardBody>
      </Card>
    </div>
      </div>
      <div class="col-sm">
        <div>
      <Card>
        <CardImg top width="100%" height="300" src="http://www.escapadarural.com/blog/propietarios/files/2015/04/Estad%C3%ADsticas-de-casas-rurales.jpg" alt="Card image cap" />
        <CardBody>
          <CardSubtitle className="font-weight-bold">Pregunta 11</CardSubtitle>
          <CardText>¿Cuáles parques presentan poca información para los usuarios?</CardText>
          <Button className="btn btn-success" href={ROUTES.LANDING}>Ver Visualización</Button>
        </CardBody>
      </Card>
    </div>
      </div>
      <div class="col-sm">
        <div>
      <Card>
        <CardImg top width="100%" height="300" src="https://lh5.googleusercontent.com/-A4M5N0ybXZQ/VI39mynYBsI/AAAAAAABLUk/VZmzxezdpJo/s640/estadisticas-viaje.jpg" alt="Card image cap" />
        <CardBody>
          <CardSubtitle className="font-weight-bold">Pregunta 12</CardSubtitle>
          <CardText>¿Cuáles usuarios presentan mayor interacción con la aplicación?</CardText>
          <Button className="btn btn-success" href={ROUTES.LANDING}>Ver Visualización</Button>
        </CardBody>
      </Card>
    </div>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <div>
      <Card>
        <CardImg top width="100%" height="300" src="http://www.cibepyme.com/export/sites/cibepyme/minisites/costa_rica/.content/imagenes/estadisticas.jpg_1160572873.jpg" alt="Card image cap" />
        <CardBody>
          <CardSubtitle className="font-weight-bold">Pregunta 13</CardSubtitle>
          <CardText>¿Cuántas descargas tiene la aplicación al mes?</CardText>
          <Button className="btn btn-success" href={ROUTES.LANDING}>Ver Visualización</Button>
        </CardBody>
      </Card>
    </div>
      </div>
      <div class="col-sm">
        <div>
      <Card>
        <CardImg top width="100%" height="300" src="http://coie-server.uned.es/archivos_publicos/qweb_web/1/estadisticas1.jpg" alt="Card image cap" />
        <CardBody>
          <CardSubtitle className="font-weight-bold">Pregunta 14</CardSubtitle>
          <CardText>¿Cuáles son las ubicaciones más buscadas en la aplicación?</CardText>
          <Button className="btn btn-success" href={ROUTES.LANDING}>Ver Visualización</Button>
        </CardBody>
      </Card>
    </div>
      </div>
      <div class="col-sm">
        <div>
      <Card>
        <CardImg top width="100%" height="300" src="http://legionariosdecristo.org/es/wp-content/uploads/2016/03/estadisticalc15-e1456758898158.jpg" alt="Card image cap" />
        <CardBody>
          <CardSubtitle className="font-weight-bold">Pregunta 15</CardSubtitle>
          <CardText>¿Qué rango de edad es el más frecuente en los usuarios?</CardText>
          <Button className="btn btn-success" href={ROUTES.LANDING}>Ver Visualización</Button>
        </CardBody>
      </Card>
    </div>
      </div>
    </div>
    <div class="row mt-4">
      <div class="col-sm">
        <div>
      <Card>
        <CardImg top width="100%" height="300" src="http://turismodelasubbetica.es/wp-content/uploads/2017/06/estad%C3%ADstica-copia.jpg" alt="Card image cap" />
        <CardBody>
          <CardSubtitle className="font-weight-bold">Pregunta 16</CardSubtitle>
          <CardText>¿Cuáles son los parques más frecuentados por los usuarios?</CardText>
          <Button className="btn btn-success" href={ROUTES.LANDING}>Ver Visualización</Button>
        </CardBody>
      </Card>
    </div>
      </div>
      <div class="col-sm">
        <div>
      <Card>
        <CardImg top width="100%" height="300" src="http://www.escapadarural.com/blog/propietarios/files/2015/04/Estad%C3%ADsticas-de-casas-rurales.jpg" alt="Card image cap" />
        <CardBody>
          <CardSubtitle className="font-weight-bold">Pregunta 17</CardSubtitle>
          <CardText>¿Cuáles parques presentan poca información para los usuarios?</CardText>
          <Button className="btn btn-success" href={ROUTES.LANDING}>Ver Visualización</Button>
        </CardBody>
      </Card>
    </div>
      </div>
      <div class="col-sm">
        <div>
      <Card>
        <CardImg top width="100%" height="300" src="https://lh5.googleusercontent.com/-A4M5N0ybXZQ/VI39mynYBsI/AAAAAAABLUk/VZmzxezdpJo/s640/estadisticas-viaje.jpg" alt="Card image cap" />
        <CardBody>
          <CardSubtitle className="font-weight-bold">Pregunta 18</CardSubtitle>
          <CardText>¿Cuáles usuarios presentan mayor interacción con la aplicación?</CardText>
          <Button className="btn btn-success" href={ROUTES.LANDING}>Ver Visualización</Button>
        </CardBody>
      </Card>
    </div>
      </div>
    </div>

  </div>


  </div>

);

export default HomePage;
