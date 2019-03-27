import React, { Component } from 'react';

import { withFirebase } from '../Firebase';
import { LineChart, Line, ComposedChart, CartesianGrid, XAxis, YAxis, Tooltip, AreaChart, Area, BarChart, Bar, Cell, Legend, ReferenceLine, PieChart, Pie, Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ScatterChart, Scatter} from 'recharts';

const data = [{name: 'Enero', users: 100, Hombres: 2600, amt: 2900},{name: 'Febrero', users: 300, Hombres: 1200, amt: 1400},{name: 'Marzo', users: 400, Hombres: 2400, amt: 2400}];

const data3 = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 }
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

class V1Page extends Component {
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
      <h1 className="text-center">Información sobre usuarios</h1>
      <div className="text-center">información relacionada con los usuarios de la app</div>
    </div>

    <div className="container">
      <div className="ml-12">

       </div>
  <div class="container mt-5">
    <div class="row">
      <div class="col-sm-8">
        <h4 className="text-center" >Porcentaje de hombres y mujeres</h4>
          <LineChart width={700} height={300} data={data} margin={{ top: 50, right: 20, bottom: 50, left: 50 }}>
             <Line type="monotone" dataKey="users" stroke="#2d572c" />
             <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
             <XAxis dataKey="name" />
             <YAxis />
             <Tooltip />
           </LineChart>
      </div>
      <div class="col-sm-4 other">
          <div className="text-center align-center"> USUARIOS REGISTRADOS EN LA APLICACIÓN ACTUALMENTE: {number} </div>
      </div>
    </div>
  </div>



       <div class="container mt-5">
         <div class="row">
           <div class="col-sm-6">
             <h4 className="text-center" >Porcentaje de hombres y mujeres</h4>
               <PieChart width={400} height={400}>
               <Pie
                 data={data3}
                 cx={220}
                 cy={120}
                 labelLine={false}
                 label={renderCustomizedLabel}
                 outerRadius={100}
                 fill="#8884d8"
                 dataKey="value"
               >
                 {
                   data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                 }
               </Pie>
             </PieChart>
           </div>
           <div class="col-sm-6 other">
             <h4 className="text-center" >Pregunta 18: Hombres/ Mujeres </h4>
               <BarChart
               width={500}
               height={300}
               data={dataBars}
               margin={{
                 top: 5, right: 30, left: 20, bottom: 5,
               }}
             >
               <CartesianGrid strokeDasharray="3 3" />
               <XAxis dataKey="name" />
               <YAxis />
               <Tooltip />
               <Legend />
               <Bar dataKey="Hombres" fill="#01A9DB" minPointSize={5}>
               </Bar>
               <Bar dataKey="Mujeres" fill="#FF8000" minPointSize={10} />
             </BarChart>
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

export default withFirebase(V1Page);
