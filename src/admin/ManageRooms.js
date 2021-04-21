import React, { Component } from 'react';
import axios from 'axios';
import { datas } from '../connectFirebase/firebaseConnect';
import FileBase64 from 'react-file-base64';
import { notificationComponent } from '../utils/notification';
class ManageRooms extends Component {
    constructor(props) {
        super(props);
        this.state = {

            arrData: [],
            searchText: '',

            room: {
                name: '',
                price: '',
                unit: '$',
                description: '',
                listImage: [
                ],
                facility: [{ facility: "" }],
                capacity: '',
                categoryRoom: ''

            }
        }
    }
    componentDidMount() {
        axios.get('https://booking-hotel-5cb23-default-rtdb.firebaseio.com/room.json')
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
    getFiles(files) {
        console.log(files);
        this.setState({ 
            room: { ...this.state.room,
                 listImage: [...this.state.room.listImage, ...files.map(val => val.base64)] } });
    }
    isChange = (event) => {

        this.setState({
            room: {
                ...this.state.room,
                [event.target.name]: event.target.value
            }
        });

    };

    addRoll() {

        this.setState({
            room: {
                ...this.state.room, facility: [...this.state.room.facility, { facility: "" }]
            }
        });


    }

    isChangeFacility(event, index) {
        let array = this.state.room.facility;
        array[index] = event.target.value;
        this.setState({
            room: { ...this.state.room, facility: [...array] }
        });

    }

    renderItem(array) {
        let res = array.map((values, key) => {
            console.log(values.listImage);
            return (
            <tr key={values.id}>
                <td>{key + 1}</td>
                <td>
                    {values.listImage.map(val => <img src={val} style={{ width: '100%', padding: '5px' }} />)}
                </td>
                <td>{values.name}</td>
                <td>{values.price} {values.unit}</td>
                <td>{values.capacity}</td>
                <td>{values.description}</td>
                <td>{values.facility.map(val => <p>{val}</p>)}</td>
                <td>{values.categoryRoom}</td>
            </tr>
            )
        });
        return res;
    }
    // saveProduct = () => {

    //     
    //     datas.ref().child('room').push(room);
    //     if (room.listImage.length != 0 && room.name !== '' && room.price !== '' && room.capacity !== '' && room.description !== '' && room.facility.length != 0 && room.categoryRoom !== ''){ 
    //         notificationComponent('success', `Thêm ${room.name} thành công`);
    //         window.location.reload();
    //     }
    //     else {
    //         return notificationComponent('error', 'Không bỏ trống cái chi nha mậy!')
    //     }
    // }
    saveProduct = () => {
        const { room } = this.state;
        let data = {
            listImage: [...room.listImage],
            name: room.name,
            price: room.price,
            unit: room.unit,
            capacity: room.capacity,
            description: room.description,
            facility: [...room.facility],
            categoryRoom: room.categoryRoom
        }
        datas.ref().child('room').push(data).catch((err) => console.log(err))
        console.log(data);
        notificationComponent('success', `Thêm ${room.name} thành công`);
        setTimeout(() => {
            window.location.reload();
        }, 2000);
    }

    render() {
        const { room, arrData } = this.state;
        console.log(arrData);
        console.log(room);


        let res = arrData.map((values, key) => {
            // console.log(values.listImage);
            return (
            <tr key={values.id}>
                <td>{key + 1}</td>
                <td>
                  {values.listImage ?  values.listImage.map(val => <img src={val} style={{ width: '100%', padding: '5px' }} />)  : ''}
                </td>
                <td>{values.name}</td>
                <td>{values.price} {values.unit}</td>
                <td>{values.capacity}</td>
                <td>{values.description}</td>
                <td>{values.facility ? values.facility.map(val => <p>{val}</p>) : ''}</td>
                <td>{values.categoryRoom}</td>
            </tr>
            )
        });

        return (
            <div id="content-wrapper" className="d-flex flex-column">
                {/* Main Content */}
                <div id="content">
                    {/* Begin Page Content */}
                    <div className="container-fluid">
                        {/* Page Heading */}
                        <h1 className="h3 mb-2 text-gray-800">Manage Rooms</h1>                        {/* DataTales Example */}
                        <div className="card shadow mb-4">
                            {/* <div className="card-header py-3">
                                <h6 className="m-0 font-weight-bold text-primary">DataTables Example</h6>

                            </div> */}

                            <div className="card-body">
                                <button type="button" data-toggle="modal" data-target="#exampleModalLong" className="btn btn-primary" style={{ marginBottom: '20px', float: 'left' }}>New room</button>

                                <div className="modal fade" id="exampleModalLong" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                                    <div className="modal-dialog" role="document">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="exampleModalLongTitle">Add room</h5>
                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">×</span>
                                                </button>
                                            </div>
                                            <div className="modal-body">
                                                <div className="form-group">
                                                    <label >Image</label>
                                                    <FileBase64 className="form-control py-4" id="inputImage" multiple={true} onDone={this.getFiles.bind(this)} />
                                                    <div className="form-group">{this.state.room.listImage.map(val => <img src={val} style={{ width: '25%', padding: '5px' }} />)}</div>
                                                </div>
                                                <div className="form-group">
                                                    <label >Name</label>
                                                    <input type="text" className="form-control"
                                                        name="name"
                                                        value={room.name}
                                                        onChange={(event) => this.isChange(event)} />
                                                </div>
                                                <div className="form-group d-flex">
                                                    <div className="col-md-6" style={{ paddingLeft: '0px' }}>
                                                        <label >Price</label>
                                                        <input type="number" className="form-control" name="price" value={room.price} onChange={(event) => this.isChange(event)} />
                                                    </div>
                                                    <div className="col-md-6" style={{ paddingRight: '0px' }}>
                                                        <label >Unit</label>
                                                        <input type="text" className="form-control" value={room.unit} />
                                                    </div>

                                                </div>
                                                <div className="form-group">
                                                    <label >Description</label>
                                                    <textarea className="form-control" name="description" value={room.description} onChange={(event) => this.isChange(event)} ></textarea>
                                                </div>
                                                <div className="form-group">
                                                    <label >Capacity</label>
                                                    <input type="number" className="form-control" name="capacity" value={room.capacity} onChange={(event) => this.isChange(event)} />
                                                </div>



                                                <div className="col-md-6">
                                                        <div className="form-group form-group-facility">
                                                            <label className="small mb-1">Facility <i class="fa fa-plus-circle" onClick={() => this.addRoll()} aria-hidden="true"></i></label>
                                                            {room.facility.map((val, key) => (<input
                                                                type="text"
                                                                name="facility"
                                                                value={room.facility[key].facility}
                                                                className="form-control py-4 modal-product-input"
                                                                onChange={(event, index) => this.isChangeFacility(event, key)}
                                                            />))}
                                                        </div>
                                                    </div>


                                                {/* <div className="form-group">
                                                        <label >Category Room</label>
                                                        <input type="texx" className="form-control"  name="capacity" value={room.categoryRoom} onChange={(event) => this.isChange(event)} />
                                                    </div>   */}
                                                <div className="form-group">
                                                    <label for="exampleFormControlSelect1">Category Room</label>
                                                    <select value={room.categoryRoom} name="categoryRoom" class="form-control" id="exampleFormControlSelect1" onChange={(event) => this.isChange(event)} >
                                                        <option value="Vip">Vip</option>
                                                        <option value="Normal">Normal</option>
                                                    </select>
                                                </div>
                                                {/* <div className="form-group">
                                                        <label htmlFor="exampleInputPassword1">Password</label>
                                                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                                                    </div> */}

                                                {/* <div className="form-group form-check">
                                                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                                                    </div>
                                                    <button className="btn btn-primary">Submit</button> */}
                                            </div>

                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                                <button type="button" className="btn btn-primary" onClick={() => this.saveProduct()}>Save changes</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="table-responsive">
                                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing={0}>
                                        <thead>
                                            <tr>
                                                <th>No</th>
                                                <th>Image</th>
                                                <th>Name</th>
                                                <th>Price</th>
                                                <th>Capacity</th>
                                                <th>Description</th>
                                                <th>Facility</th>
                                                <th>Category Room</th>
                                                <th>#</th>
                                            </tr>
                                        </thead>
                                        <tfoot>
                                            <tr>
                                                <th>No</th>
                                                <th>Image</th>
                                                <th>Name</th>
                                                <th>Price</th>
                                                <th>Capacity</th>
                                                <th>Description</th>
                                                <th>Facility</th>
                                                <th>Category Room</th>
                                                <th>#</th>
                                            </tr>
                                        </tfoot>
                                        <tbody>
                                            {res}
                                        </tbody>
                                    </table>
                                </div>
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

export default ManageRooms;