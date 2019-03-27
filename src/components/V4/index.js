import React, { Component } from 'react';

import { withFirebase } from '../Firebase';
import { LineChart, Line, ComposedChart, CartesianGrid, XAxis, YAxis, Tooltip, AreaChart, Area, BarChart, Bar, Cell, Legend, ReferenceLine, PieChart, Pie, Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ScatterChart, Scatter} from 'recharts';

const data = [{name: 'Enero', users: 100, Hombres: 2600, amt: 2900},{name: 'Febrero', users: 300, Hombres: 1200, amt: 1400},{name: 'Marzo', users: 400, Hombres: 2400, amt: 2400}];

const data3 = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 }
];

const dataRadar = [
  {
    subject: 'Inseguro', A: 120, B: 110, fullMark: 150,
  },
  {
    subject: 'Muy lleno', A: 98, B: 130, fullMark: 150,
  },
  {
    subject: 'Mal estado', A: 86, B: 130, fullMark: 150,
  },
  {
    subject: 'Malas actividades', A: 99, B: 100, fullMark: 150,
  },
  {
    subject: 'Poco Agradable', A: 85, B: 90, fullMark: 150,
  },
  {
    subject: 'Poca asistencia', A: 65, B: 85, fullMark: 150,
  },
];

const data2 = [
{
  name: 'Sebastian', users: 5, pv: 5, amt: 2400,
},
{
  name: 'Henry', users: 4, pv: 4, amt: 2210,
},
{
  name: 'Ricardo', users: 3, pv: 3, amt: 2290,
},
{
  name: 'Camilo', users: 2, pv: 2, amt: 2000,
},
{
  name: 'Andres', users: 1, pv: 1, amt: 2181,
},
{
  name: 'Fernanda', users: 1, pv: 1, amt: 2500,
}
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

class V4Page extends Component {
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
      <h1 className="text-center">Información sobre los reviews</h1>
      <div className="text-center">información relacionada con los reviews de la app</div>
    </div>

    <div className="container">
      <div className="ml-12">

       </div>
  <div class="container mt-5">
    <div class="row">
      <div class="col-sm-8">
        <h4  className="text-center" >Reviews negativos</h4>
          <RadarChart cx={250} cy={200} outerRadius={120} width={500} height={500} data={dataRadar}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis />
          <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#04B431" fillOpacity={0.6} />
        </RadarChart>
      </div>
      <div class="col-sm-4 other">
          <div className="text-center align-center texto border rounded border-success mt-4"> REVIEWS POSITIVOS: 74 </div>
          <div className="text-center align-center texto border rounded border-success mt-4"> REVIEWS NEGATIVOS: 12 </div>
    </div>
    </div>
  </div>



       <div class="container mt-5 mb-10">
         <div class="row">
           <div class="col-sm-10">
             <h4 className="text-center" >Usuarios con más reviews</h4>
               <BarChart
              width={800}
              height={300}
              data={data2}
              margin={{
                top: 5, right: 30, left: 20, bottom: 50,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Bar dataKey="pv" barSize={20} fill="#413ea0" />
            </BarChart>
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

export default withFirebase(V4Page);
