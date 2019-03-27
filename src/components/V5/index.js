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
  name: '10 am', users: 4000, pv: 2400, amt: 2400,
},
{
  name: '12 pm', users: 3000, pv: 1398, amt: 2210,
},
{
  name: '2 pm', users: 2000, pv: 9800, amt: 2290,
},
{
  name: '4 pm', users: 2780, pv: 3908, amt: 2000,
},
{
  name: '6 pm', users: 1890, pv: 4800, amt: 2181,
},
{
  name: '8 pm', users: 590, pv: 3800, amt: 2500,
},
{
  name: '10 pm', users: 490, pv: 4300, amt: 2100,
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

class V5Page extends Component {
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
      <h1 className="text-center">Información sobre uso de la app</h1>
      <div className="text-center">información relacionada con los usuarios de la app</div>
    </div>

    <div className="container">
      <div className="ml-12">

       </div>
  <div class="container mt-5">
    <div class="row">
      <div class="col-sm-8">
        <h4 className="text-center" >Histórico de usuarios registrados</h4>
          <LineChart width={700} height={300} data={data} margin={{ top: 50, right: 20, bottom: 50, left: 50 }}>
             <Line type="monotone" dataKey="users" stroke="#2d572c" />
             <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
             <XAxis dataKey="name" />
             <YAxis />
             <Tooltip />
           </LineChart>
      </div>
      <div class="col-sm-4 other">
          <div className="text-center align-center texto border rounded border-success mt-4"> USUARIOS REGISTRADOS: {number} </div>
      </div>
    </div>
  </div>



       <div class="container mt-5 mb-10">
         <div class="row">
           <div class="col-sm-8">
             <h4 className="text-center" > Horas de uso de la app</h4>
               <AreaChart
                   width={700}
                   height={250}
                   data={data2}
                   margin={{
                     top: 10, right: 30, left: 0, bottom: 5,
                   }}
                 >
                   <CartesianGrid strokeDasharray="3 3" />
                   <XAxis dataKey="name" />
                   <YAxis />
                   <Tooltip />
                   <Area type="monotone" dataKey="users" stroke="#04B431" fill="#04B431" />
                 </AreaChart>
           </div>
           <div class="col-sm-4 other">
            <div className="texto border rounded border-success mt-4"> 0 <br /> Usuarios Online</div>
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

export default withFirebase(V5Page);
