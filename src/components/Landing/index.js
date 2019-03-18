import React from 'react';
import { Button, Navbar, Nav, NavDropdown, FormControl,Form } from 'react-bootstrap'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import { PureComponent } from 'react';
import {
  AreaChart, Area} from 'recharts';
import {
  BarChart, Bar, Cell, Legend, ReferenceLine, LabelList
} from 'recharts';
import {
  PieChart, Pie, Sector
} from 'recharts';

import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
} from 'recharts';
import {
  ScatterChart, Scatter} from 'recharts';

const RADIAN = Math.PI / 180;
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
    name: '8 pm', users: 2390, pv: 3800, amt: 2500,
  },
  {
    name: '10 pm', users: 3490, pv: 4300, amt: 2100,
  },
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
    subject: 'Pocas máquinas', A: 65, B: 85, fullMark: 150,
  },
];

const data01 = [
  { x: 100, y: 200, z: 200 },
  { x: 120, y: 100, z: 260 },
  { x: 170, y: 300, z: 400 },
  { x: 140, y: 250, z: 280 },
  { x: 150, y: 400, z: 500 },
  { x: 110, y: 280, z: 200 },
];
const data02 = [
  { x: 300, y: 300, z: 200 },
  { x: 400, y: 500, z: 260 },
  { x: 200, y: 700, z: 400 },
  { x: 340, y: 350, z: 280 },
  { x: 560, y: 500, z: 500 },
  { x: 230, y: 780, z: 200 },
  { x: 500, y: 400, z: 200 },
  { x: 300, y: 500, z: 260 },
  { x: 240, y: 300, z: 400 },
  { x: 320, y: 550, z: 280 },
  { x: 500, y: 400, z: 500 },
  { x: 420, y: 280, z: 200 },
];

const data3 = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];

const dataBars = [
  {
    name: '15-20', uv: 4000, pv: 2400, amt: 2400,
  },
  {
    name: '20-25', uv: 3000, pv: 1398, amt: 2210,
  },
  {
    name: '25-30', uv: 2000, pv: 8, amt: 2290,
  },
  {
    name: '30-35', uv: 2780, pv: 3908, amt: 2000,
  },
  {
    name: '40-45', uv: 18, pv: 4800, amt: 2181,
  },
  {
    name: '45-60', uv: 2390, pv: 3800, amt: 2500,
  },
  {
    name: '60+', uv: 100, pv: 300, amt: 2100,
  },
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

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

const renderCustomizedLabelBars = (props) => {
  const {
    x, y, width, height, value,
  } = props;
  const radius = 10;

  return (
    <g>
      <circle cx={x + width / 2} cy={y - radius} r={radius} fill="#8884d8" />
      <text x={x + width / 2} y={y - radius} fill="#fff" textAnchor="middle" dominantBaseline="middle">
        {value.split(' ')[1]}
      </text>
    </g>
  );
};


const data = [{name: 'Enero', users: 100, pv: 2600, amt: 2900},{name: 'Febrero', users: 400, pv: 1200, amt: 1400},{name: 'Marzo', users: 400, pv: 2400, amt: 2400}];

const LandingPage = () => (
  <div>
    <div class="jumbotron">
  <h1>Dashboard de Colombia Viva</h1>
  <p>Aquí encontrarás toda la información de negocio de la app</p>
</div>

<div class="container">
  <div class="row">
    <div class="col-sm-6">
      <h4>Pregunta 1: Descargas de la aplicación al mes</h4>
        <LineChart width={500} height={250} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
           <Line type="monotone" dataKey="users" stroke="#2d572c" />
           <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
           <XAxis dataKey="name" />
           <YAxis />
           <Tooltip />
         </LineChart>
    </div>
    <div class="col-sm-6 other">
      <h4>Pregunta 2: Ubicaciones más buscadas</h4>
        <ScatterChart
        width={500}
        height={300}
        margin={{
          top: 20, right: 20, bottom: 20, left: 20,
        }}
      >
        <CartesianGrid />
        <XAxis type="number" dataKey="x" name="stature" unit="cm" />
        <YAxis yAxisId="left" type="number" dataKey="y" name="weight" unit="kg" stroke="#01A9DB" />
        <YAxis yAxisId="right" type="number" dataKey="y" name="weight" unit="kg" orientation="right" stroke="#82ca9d" />
        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
        <Scatter yAxisId="left" name="A school" data={data01} fill="#01A9DB" />
        <Scatter yAxisId="right" name="A school" data={data02} fill="#82ca9d" />
      </ScatterChart>
    </div>
  </div>
</div>
<div class="container mt-5">
  <div class="row">
    <div class="col-sm-6">
      <h4>Pregunta 3: Rango de edad de usuarios</h4>
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
        <Bar dataKey="pv" fill="#8884d8" minPointSize={5}>
        </Bar>
        <Bar dataKey="uv" fill="#82ca9d" minPointSize={10} />
      </BarChart>
    </div>
    <div class="col-sm-6 other">
      <h4>Pregunta 4: Parques más frecuentados</h4>
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
        <Legend />
        <ReferenceLine y={0} stroke="#000" />
        <Bar dataKey="pv" fill="#01A9DB" stackId="stack" />
        <Bar dataKey="users" fill="#82ca9d" stackId="stack" />
      </BarChart>
    </div>
  </div>
</div>
<div class="container mt-5">
  <div class="row">
    <div class="col-sm-6">
      <h4>Pregunta 5: Parques con poca información</h4>
        <LineChart width={500} height={250} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
           <Line type="monotone" dataKey="users" stroke="#2d572c" />
           <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
           <XAxis dataKey="name" />
           <YAxis />
           <Tooltip />
         </LineChart>
    </div>
    <div class="col-sm-6 other">
      <h4>Pregunta 6: Usuarios con mayor interacción</h4>
        <AreaChart
            width={500}
            height={250}
            data={data2}
            margin={{
              top: 10, right: 30, left: 0, bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="users" stroke="#8884d8" fill="#2d572c" />
          </AreaChart>
    </div>
  </div>
</div>
<div class="container mt-5">
  <div class="row">
    <div class="col-sm-6">
      <h4>Pregunta 7: Horas de mayor uso</h4>
        <AreaChart
            width={500}
            height={250}
            data={data2}
            margin={{
              top: 10, right: 30, left: 0, bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="users" stroke="#04B431" fill="#04B431" />
          </AreaChart>
    </div>
    <div class="col-sm-6 other">
      <h4>Pregunta 8: Ubicaciones más buscadas</h4>
        <AreaChart
            width={500}
            height={250}
            data={data2}
            margin={{
              top: 10, right: 30, left: 0, bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="users" stroke="#8884d8" fill="#2d572c" />
          </AreaChart>
    </div>
  </div>
</div>
<div class="container mt-5">
  <div class="row">
    <div class="col-sm-6">
      <h4>Pregunta 9: Reviews por ubicación</h4>
        <PieChart width={400} height={400}>
       <Pie
         data={data3}
         cx={200}
         cy={200}
         labelLine={false}
         label={renderCustomizedLabel}
         outerRadius={80}
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
      <h4>Pregunta 10: Parques inseguros</h4>
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
        <Legend />
        <ReferenceLine y={0} stroke="#000" />
        <Bar dataKey="pv" fill="#01A9DB" stackId="stack" />
        <Bar dataKey="users" fill="#82ca9d" stackId="stack" />
      </BarChart>
    </div>
  </div>
</div>
<div class="container mt-5">
  <div class="row">
    <div class="col-sm-6">
      <h4>Pregunta 11: Usuarios que más aportan</h4>
        <LineChart width={500} height={250} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
           <Line type="monotone" dataKey="users" stroke="#2d572c" />
           <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
           <XAxis dataKey="name" />
           <YAxis />
           <Tooltip />
         </LineChart>
    </div>
    <div class="col-sm-6 other">
      <h4>Pregunta 12: Entrenadores en la app</h4>
        <AreaChart
            width={500}
            height={250}
            data={data2}
            margin={{
              top: 10, right: 30, left: 0, bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="users" stroke="#8884d8" fill="#2d572c" />
          </AreaChart>
    </div>
  </div>
</div>
<div class="container mt-5">
  <div class="row">
    <div class="col-sm-6">
      <h4>Pregunta 13: Máquinas en mal estado</h4>
        <LineChart width={500} height={250} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
           <Line type="monotone" dataKey="users" stroke="#2d572c" />
           <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
           <XAxis dataKey="name" />
           <YAxis />
           <Tooltip />
         </LineChart>
    </div>
    <div class="col-sm-6 other">
      <h4>Pregunta 14: Usuarios tiempo real</h4>
        <AreaChart
            width={500}
            height={250}
            data={data2}
            margin={{
              top: 10, right: 30, left: 0, bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="users" stroke="#8884d8" fill="#2d572c" />
          </AreaChart>
    </div>
  </div>
</div>
<div class="container mt-5">
  <div class="row">
    <div class="col-sm-6">
      <h4>Pregunta 15: Reviews negativos</h4>
        <RadarChart cx={170} cy={200} outerRadius={150} width={500} height={500} data={dataRadar}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis />
        <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#04B431" fillOpacity={0.6} />
      </RadarChart>
    </div>
    <div class="col-sm-6 other">
      <h4>Pregunta 16: Parques en la aplicación</h4>
        <AreaChart width={500} height={350} data={data}
  margin={{ top: 50, right: 30, left: 0, bottom: 0 }}>
  <defs>
    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
    </linearGradient>
  </defs>
  <XAxis dataKey="name" />
  <YAxis />
  <CartesianGrid strokeDasharray="3 3" />
  <Tooltip />
  <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
  <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
</AreaChart>

    </div>
  </div>
</div>
<div class="container mt-5">
  <div class="row">
    <div class="col-sm-6">
      <h4>Pregunta 17: Tipos de máquina</h4>
        <PieChart width={500} height={500}>
       <Pie
         data={data3}
         cx={150}
         cy={100}
         labelLine={false}
         label={renderCustomizedLabel}
         outerRadius={80}
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
      <h4>Pregunta 18: Hombres/ Mujeres </h4>
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
        <Bar dataKey="pv" fill="#01A9DB" minPointSize={5}>
        </Bar>
        <Bar dataKey="uv" fill="#FF8000" minPointSize={10} />
      </BarChart>
    </div>
  </div>
</div>





  </div>
);

export default LandingPage;
