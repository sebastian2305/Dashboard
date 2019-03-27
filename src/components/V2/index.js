import React, { Component } from 'react';

import { withFirebase } from '../Firebase';
import { LineChart, Line, ComposedChart, CartesianGrid, XAxis, YAxis, Tooltip, AreaChart, Area, BarChart, Bar, Cell, Legend, ReferenceLine, PieChart, Pie, Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ScatterChart, Scatter} from 'recharts';

const data = [{name: 'Enero', users: 100, Hombres: 2600, amt: 2900},{name: 'Febrero', users: 300, Hombres: 1200, amt: 1400},{name: 'Marzo', users: 400, Hombres: 2400, amt: 2400}];

const data3 = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 }
];
const dataComposed = [
  {
    name: 'Jardin Botanico', visitas: 590, pv: 800, amt: 1400,
  },
  {
    name: 'Parque Nacional', visitas: 868, pv: 967, amt: 1506,
  },
  {
    name: 'Simon Bolivar', visitas: 1300, pv: 1098, amt: 989,
  },
  {
    name: 'Virrey', visitas: 1400, pv: 1100, amt: 1228,
  },
  {
    name: 'Tunal', visitas: 1420, pv: 1308, amt: 1100,
  },
  {
    name: 'Cafe', visitas: 1400, pv: 1450, amt: 1700,
  },
];

const data2 = [
{
  name: 'Jardin botanico', negativas: 40, positivas: 240, amt: 2400,
},
{
  name: 'Parque Nacional', negativas: 30, positivas: 139, amt: 2210,
},
{
  name: 'Simon Bolivar', negativas: 20, positivas: 98, amt: 2290,
},
{
  name: 'Tunal', negativas: 27, positivas: 39, amt: 2000,
},
{
  name: 'Virrey', negativas: 18, positivas: 48, amt: 2181,
},
{
  name: 'Cafe', negativas: 59, positivas: 380, amt: 2500,
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

class V2Page extends Component {
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
      <h1 className="text-center">Información sobre Parques</h1>
      <div className="text-center">información relacionada con los usuarios de la app</div>
    </div>

  <div class="container mt-5">
    <div class="row">
      <div class="col-sm-8">
        <h4 className="text-center" >Parques más visitados</h4>
          <ComposedChart
          width={800}
          height={400}
          data={ dataComposed}
          margin={{
            top: 20, right: 20, bottom: 50, left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />

          <Bar dataKey="visitas" barSize={20} fill="#413ea0" className="mt-4" />
          <Line type="monotone" dataKey="visitas" stroke="#ff7300" />
        </ComposedChart>
      </div>
      <div class="col-sm-4 other">
          <div className="text-center align-center"> PARQUES REGISTRADOS EN LA APLICACIÓN ACTUALMENTE: 8 </div>
      </div>
    </div>
  </div>



       <div class="container mt-5">
         <div class="row">
           <div class="col-sm-6">
               <h4 className="text-center">Calificación de los parques</h4>
                 <BarChart
                 width={500}
                 height={300}
                 data={data2}
                 stackOffset="sign"
                 margin={{
                   top: 5, right: 30, left: 20, bottom: 5,
                 }}
               >
                 <CartesianGrid strokeDasharray="3 3" />
                 <XAxis dataKey="name" />
                 <YAxis />
                 <Tooltip />

                 <ReferenceLine y={0} stroke="#000" />
                 <Bar dataKey="positivas" fill="#413ea0" stackId="stack" />
                 <Bar dataKey="negativas" fill="#82ca9d" stackId="stack" />
               </BarChart>
           </div>
           <div class="col-sm-6 other">
      <div className="texto border rounded border-success mt-4"> 160 <br /> Calificaciones registrados</div>
           </div>
         </div>
       </div>

      {loading && <div>Loading ...</div>}

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

export default withFirebase(V2Page);
