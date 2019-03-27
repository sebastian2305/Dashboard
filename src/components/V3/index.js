import React, { Component } from 'react';

import { withFirebase } from '../Firebase';
import { LineChart, Line, ComposedChart, CartesianGrid, XAxis, YAxis, Tooltip, AreaChart, Area, BarChart, Bar, Cell, Legend, ReferenceLine, PieChart, Pie, Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ScatterChart, Scatter} from 'recharts';

const data = [{name: 'Enero', users: 100, Hombres: 2600, amt: 2900},{name: 'Febrero', users: 300, Hombres: 1200, amt: 1400},{name: 'Marzo', users: 400, Hombres: 2400, amt: 2400}];

const data3 = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 }
];

const data2 = [
{
  name: 'Pelicano', registros: 40, positivas: 240, amt: 2400,
},
{
  name: 'Perico Australiano', registros: 30, positivas: 139, amt: 2210,
},
{
  name: 'Colibrí', registros: 20, positivas: 98, amt: 2290,
},
{
  name: 'Loro', registros: 27, positivas: 39, amt: 2000,
},
{
  name: 'Paloma', registros: 18, positivas: 48, amt: 2181,
},
{
  name: 'Canario', registros: 59, positivas: 380, amt: 2500,
},
];

const dataBars = [
  {
    name: '15-20', Mujeres: 4000, Hombres: 2400, amt: 2400,
  },
  {
    name: '20-25', Mujeres: 3000, Hombres: 1398, amt: 2210,
  },
  {
    name: '25-30', Mujeres: 2000, Hombres: 8, amt: 2290,
  },
  {
    name: '30-35', Mujeres: 2780, Hombres: 3908, amt: 2000,
  },
  {
    name: '40-45', Mujeres: 18, Hombres: 4800, amt: 2181,
  },
  {
    name: '45-60', Mujeres: 2390, Hombres: 3800, amt: 2500,
  },
  {
    name: '60+', Mujeres: 100, Hombres: 300, amt: 2100,
  },
];

const dataVertical = [
  {
    name: 'Simón Bolivar', acumulado: 59, frecuencia: 80, amt: 140,
  },
  {
    name: 'Tunal', acumulado: 86, frecuencia: 96, amt: 150,
  },
  {
    name: 'Virrey', acumulado: 139, frecuencia: 109, amt: 98,
  },
  {
    name: 'Jardin Botánico', acumulado: 148, frecuencia: 120, amt: 122,
  },
  {
    name: 'Tayrona', acumulado: 152, frecuencia: 110, amt: 110,
  }
];
const COLORS = ['#01A9DB', '#FF8000', '#FFBB28', '#FF8042'];
const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx, cy, midAngle, innerRadius, outerRadius, percent, index,
}) => {
   const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

class V3Page extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      users: [],
      number: 0,
    };
  }

  componentDidMount() {
    this.setState({ loading: true });

    this.props.firebase.users_num().on('value', snapshot => {
      const usersObject = snapshot.val();

      const usersList = Object.keys(usersObject).map(key => ({
        ...usersObject[key],
        uid: key,
      }));

      this.setState({
        users: usersList,
        number: usersList.length,
        loading: false,
      });
    });
  }

  componentWillUnmount() {
   this.props.firebase.users().off();
 }

  render() {
    const { users, loading , number} = this.state;
    return (
      <div>
      <div class="jumbotron">
      <h1 className="text-center">Información sobre especies</h1>
      <div className="text-center">información relacionada con las especies de la app</div>
    </div>

    <div className="container">
      <div className="ml-12">

       </div>
  <div class="container mt-5">
    <div class="row">
      <div class="col-sm-8">
        <h4 className="text-center" >Número de registros por especie</h4>
          <BarChart
         width={700}
         height={300}
         data={data2}
         margin={{
           top: 5, right: 30, left: 20, bottom: 5,
         }}
       >
         <CartesianGrid strokeDasharray="3 3" />
         <XAxis dataKey="name" />
         <YAxis />
         <Bar dataKey="registros" barSize={20} fill="#413ea0" />
       </BarChart>
      </div>
      <div class="col-sm-4 other">
          <div className="texto border rounded border-success mt-4"> ESPECIES REGISTRADAS: 60 </div>
      </div>
    </div>
  </div>



       <div class="container mt-5">
         <div class="row">
           <div class="col-sm-10">
             <h4 className="text-center" >Zonas con más especies</h4>
             <ComposedChart
               layout="vertical"
               width={800}
               height={400}
               data={dataVertical}
               margin={{
                 top: 20, right: 20, bottom: 20, left: 20,
               }}
             >
               <CartesianGrid stroke="#f5f5f5" />
               <XAxis type="number" />
               <YAxis dataKey="name" type="category" />
               <Tooltip />
               <Legend />
               <Area dataKey="amt" fill="#8884d8" stroke="#8884d8" />
               <Bar dataKey="frecuencia" barSize={20} fill="#413ea0" />
               <Line dataKey="acumulado" stroke="#ff7300" />
             </ComposedChart>
           </div>
           <div class="col-sm-2 other">

           </div>
         </div>
       </div>

      {loading && <div>Loading ...</div>}
</div>

      </div>
    );
  }
}

const UserList = ({ users }) => (
  <ul>
    {users.map(user => (
      <div>
        <span>
          <strong>ID:</strong> {user.uid}
        </span>
        <span>
          <strong>E-Mail:</strong> {user.number}
        </span>
      </div>
    ))}
  </ul>
);

export default withFirebase(V3Page);
