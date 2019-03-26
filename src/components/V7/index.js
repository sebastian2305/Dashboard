import React, { Component } from 'react';

import { withFirebase } from '../Firebase';
import { LineChart, Line, ComposedChart, CartesianGrid, XAxis, YAxis, Tooltip, AreaChart, Area, BarChart, Bar, Cell, Legend, ReferenceLine, PieChart, Pie, Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ScatterChart, Scatter} from 'recharts';

const data = [{name: 'Enero', users: 100, pv: 2600, amt: 2900},{name: 'Febrero', users: 300, pv: 1200, amt: 1400},{name: 'Marzo', users: 400, pv: 2400, amt: 2400}];

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
      <h1 className="text-center">Visualización Número de usuarios</h1>
      <div className="text-center">información de número de usuarios por mes</div>
    </div>

    <div className="container">
    <div className="container">
      <LineChart width={700} height={300} data={data} margin={{ top: 50, right: 20, bottom: 5, left: 0 }}>
         <Line type="monotone" dataKey="users" stroke="#2d572c" />
         <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
         <XAxis dataKey="name" />
         <YAxis />
         <Tooltip />
       </LineChart>
      {loading && <div>Loading ...</div>}
      {number}


      <UserList users={users} />
    </div>
</div>

      </div>
    );
  }
}

const UserList = ({ users }) => (
  <ul>
    {users.map(user => (
      <li>
        <span>
          <strong>ID:</strong> {user.uid}
        </span>
        <span>
          <strong>E-Mail:</strong> {user.number}
        </span>
      </li>
    ))}
  </ul>
);

export default withFirebase(V1Page);
