import React from 'react';
import { LineChart, Line, ComposedChart, CartesianGrid, XAxis, YAxis, Tooltip, AreaChart, Area, BarChart, Bar, Cell, Legend, ReferenceLine, PieChart, Pie, Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ScatterChart, Scatter} from 'recharts';

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

const dataVertical = [
  {
    name: 'Simón Bolivar', uv: 590, pv: 800, amt: 1400,
  },
  {
    name: 'Tunal', uv: 868, pv: 967, amt: 1506,
  },
  {
    name: 'Virrey', uv: 1397, pv: 1098, amt: 989,
  },
  {
    name: 'Jardin Botánico', uv: 1480, pv: 1200, amt: 1228,
  },
  {
    name: 'Tayrona', uv: 1520, pv: 1108, amt: 1100,
  }
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


const dataComposed = [
  {
    name: 'Usuario 1', uv: 590, pv: 800, amt: 1400,
  },
  {
    name: 'Usuario 2', uv: 868, pv: 967, amt: 1506,
  },
  {
    name: 'Usuario 3', uv: 1300, pv: 1098, amt: 989,
  },
  {
    name: 'Usuario 4', uv: 1400, pv: 1100, amt: 1228,
  },
  {
    name: 'Usuario 5', uv: 1420, pv: 1308, amt: 1100,
  },
  {
    name: 'Usuario 6', uv: 1400, pv: 1450, amt: 1700,
  },
];

const data = [{name: 'Enero', users: 100, pv: 2600, amt: 2900},{name: 'Febrero', users: 300, pv: 1200, amt: 1400},{name: 'Marzo', users: 400, pv: 2400, amt: 2400}];

const HomePage = () => (
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
        <Scatter yAxisId="left" name="A school" data={data01} fill="#413ea0" />
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
        <Bar dataKey="pv" fill="#413ea0" minPointSize={5}>
        </Bar>
        <Bar dataKey="uv" fill="#82ca9d" minPointSize={10} />
      </BarChart>
    </div>
    <div class="col-sm-6 other">
      <h4>Pregunta 4: Parques más frecuentados</h4>
        return (
      <ComposedChart
        layout="vertical"
        width={500}
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
        <Bar dataKey="pv" barSize={20} fill="#413ea0" />
        <Line dataKey="uv" stroke="#ff7300" />
      </ComposedChart>
    </div>
  </div>
</div>
<div class="container mt-5">
  <div class="row">
    <div class="col-sm-6">
      <h4>Pregunta 5: Parques con poca información</h4>
        <BarChart
       width={500}
       height={300}
       data={data2}
       margin={{
         top: 5, right: 30, left: 20, bottom: 5,
       }}
     >
       <CartesianGrid strokeDasharray="3 3" />
       <XAxis dataKey="name" />
       <YAxis />
       <Legend />
       <Bar dataKey="pv" barSize={20} fill="#413ea0" />
     </BarChart>
    </div>
    <div class="col-sm-6 other">
      <h4>Pregunta 6: Usuarios con mayor interacción</h4>
        <ComposedChart
        width={500}
        height={400}
        data={ dataComposed}
        margin={{
          top: 20, right: 20, bottom: 20, left: 20,
        }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="uv" barSize={20} fill="#413ea0" />
        <Line type="monotone" dataKey="uv" stroke="#ff7300" />
      </ComposedChart>
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
        <BarChart
       width={500}
       height={300}
       data={data2}
       margin={{
         top: 5, right: 30, left: 20, bottom: 5,
       }}
     >
       <CartesianGrid strokeDasharray="3 3" />
       <XAxis dataKey="name" />
       <YAxis />
       <Legend />
       <Bar dataKey="pv" barSize={20} fill="#413ea0" />
     </BarChart>
    </div>
  </div>
</div>
<div class="container mt-5">
  <div class="row">
    <div class="col-sm-6">
      <h4>Pregunta 9: Reviews por ubicación</h4>
        <BarChart
       width={500}
       height={300}
       data={data2}
       margin={{
         top: 5, right: 30, left: 20, bottom: 5,
       }}
     >
       <CartesianGrid strokeDasharray="3 3" />
       <XAxis dataKey="name" />
       <YAxis />
       <Legend />
       <Bar dataKey="pv" barSize={20} fill="#413ea0" />
     </BarChart>
    </div>
    <div class="col-sm-6 other">
      <h4>Pregunta 10: Parques inseguros (# de Reportes) </h4>
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
        <Bar dataKey="pv" fill="#413ea0" stackId="stack" />
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
        <br/>
        <br/>
      <div className="texto border rounded border-success mt-4"> 24 <br /> Entrenadores registrados</div>
    </div>
  </div>
</div>
<div class="container mt-5">
  <div class="row">
    <div class="col-sm-6">
      <h4>Pregunta 13: Máquinas en mal estado</h4>
        <ComposedChart
        width={500}
        height={400}
        data={ dataComposed}
        margin={{
          top: 20, right: 20, bottom: 20, left: 20,
        }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="uv" barSize={20} fill="#413ea0" />
        <Line type="monotone" dataKey="uv" stroke="#ff7300" />
      </ComposedChart>
    </div>
    <div class="col-sm-6 other">
      <h4>Pregunta 14: Usuarios tiempo real</h4>
      <br/>
      <br/>
        <div className="texto border rounded border-success mt-4"> 243 <br /> Usuarios Online</div>
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
        <br/>
        <br/>
          <br/>
          <br/>
          <div className="texto border rounded border-success mt-4"> 160 <br /> Parques registrados</div>
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

export default HomePage;
