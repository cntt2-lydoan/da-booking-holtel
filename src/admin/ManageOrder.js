import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { Table, Tag, Space } from 'antd';
const { Column, ColumnGroup } = Table;

class ManageOrder extends Component {
    constructor(props) {
        super(props);
        this.state = {

            arrData: [],
            searchText: '',

        }
    }

    componentDidMount() {
        axios.get('https://booking-hotel-5cb23-default-rtdb.firebaseio.com/order.json')
            .then((response) => {
                if (response.data !== null) {
                    const data = response.data;
                    // console.log(data);

                    const objects = Object.values(response.data);
                    const keys = Object.keys(data);

                    objects.map((values, key) => {
                        values.id = keys[key];
                    });
                    this.setState({ arrData: objects });
                }

            });
    }


    render() {
        const { arrData } = this.state;       
        
        let res = arrData.map((value, key) => {
            return (
                <tr key={value.id}>
                <td>{key + 1}</td>
                <td>
                    {value.guest_count}
                </td>
                <td>{value.night}</td>
                <td>
                    <p>
                        {value.personal_information.firstname} {value.personal_information.lastname}
                    </p>
                    <p>
                        {value.personal_information.address}, {value.personal_information.city}
                    </p>
                    <p>Phone: {value.personal_information.phone}</p>
                    <p>Email: {value.personal_information.email}</p>
                </td>
                <td>
                    {value.room.name}
                </td>
                <td>{value.idUser}</td>
                <td>{value.total}</td>
            </tr>
            )
        })
        return (
            <div id="content-wrapper" className="d-flex flex-column">
                {/* Main Content */}
                <div id="content">
                    {/* Begin Page Content */}
                    <div className="container-fluid" style={{padding: '30px'}}>
                       <div>
                        <h1 className="h3 mb-2 text-gray-800">Manage Order</h1>
                        <div className="card shadow mb-4">

                        <div className="table-responsive">
                                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing={0}>
                                        <thead>
                                            <tr>
                                                <th>No</th>
                                                <th>Guest Count</th>
                                                <th>
                                                    Night
                                                </th>
                                                <th>Personal Information</th>
                                                <th>Room</th>
                                                <th>idUser</th>
                                                <th>total</th>
                                            </tr>
                                        </thead>
                                        <tfoot>
                                            <tr>
                                            <th>No</th>
                                                <th>Guest Count</th>
                                                <th>
                                                    Night
                                                </th>
                                                <th>Personal Information</th>
                                                <th>Room</th>
                                                <th>idUser</th>
                                                <th>total</th>
                                            </tr>
                                        </tfoot>
                                        <tbody>
                                            {res}
                                        </tbody>
                                    </table>
                                </div>

                            
                        {/* <Table dataSource={arrData}>
                                <Column title="Guest Count" dataIndex="guest_count" key="guest_count" />
                                <Column title="Night" dataIndex="night" key="night" />
                                <ColumnGroup title="Personal Information" dataIndex="personal_information"> 
                                    <Column title="Address" dataIndex="personal_information" key="address" render={personal_information=>
                                        <Fragment>
                                            {personal_information.address}
                                        </Fragment>
                                    }/>
                                    <Column title="City" dataIndex="personal_information" key="city" render={personal_information=>
                                        <Fragment>
                                            {personal_information.city}
                                        </Fragment>
                                    }/>
                                    <Column title="Email" dataIndex="personal_information" key="email" render={personal_information=>
                                        <Fragment>
                                            {personal_information.email}
                                        </Fragment>
                                    }/>
                                    <Column title="Firstname" dataIndex="personal_information" key="firstname" render={personal_information=>
                                        <Fragment>
                                            {personal_information.firstname}
                                        </Fragment>
                                    }/>
                                    <Column title="Lastname" dataIndex="personal_information" key="lastname" render={personal_information=>
                                        <Fragment>
                                            {personal_information.lastname}
                                        </Fragment>
                                    }/>
                                    <Column title="Phone" dataIndex="personal_information" key="phone" render={personal_information=>
                                        <Fragment>
                                            {personal_information.phone}
                                        </Fragment>
                                    }/>
                                    <Column title="Zipcode" dataIndex="personal_information" key="zipcode" render={personal_information=>
                                        <Fragment>
                                            {personal_information.zipcode}
                                        </Fragment>
                                    }/>
                                </ColumnGroup>
                                <ColumnGroup title="Room" dataIndex="room">
                                    <Column title="Capacity" dataIndex="room" key="capacity" render={room=>
                                        <Fragment>
                                            {room.capacity}
                                        </Fragment>
                                    }/>
                                    <Column title="Category Room" dataIndex="room" key="categoryRoom" render={room=>
                                        <Fragment>
                                            {room.categoryRoom}
                                        </Fragment>
                                    }/>
                                    <Column title="Facility" dataIndex="room" key="facility" render={room=>
                                        <Fragment>
                                            {room.facility}
                                        </Fragment>
                                    }/>
                                    <Column title="Name" dataIndex="room" key="name" render={room=>
                                        <Fragment>
                                            {room.name}
                                        </Fragment>
                                    }/>
                                    <Column title="Price" dataIndex="room" key="price" render={room=>
                                        <Fragment>
                                            {room.price}
                                        </Fragment>
                                    }/>                           
                                </ColumnGroup>
                                <Column title="Total" dataIndex="total" key="total" />              
                </Table> */}

</div> 
                        </div>
                    </div>
                    {/* /.container-fluid */}
                </div>
                {/* End of Main Content */}
                {/* Footer */}
                <footer className="sticky-footer bg-white">
                    <div className="container my-auto">
                        <div className="copyright text-center my-auto">
                            <span>Copyright © Your Website 2019</span>
                        </div>
                    </div>
                </footer>
                {/* End of Footer */}
            </div>
        );
    }
}

export default ManageOrder;