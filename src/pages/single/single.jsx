import './single.scss';
import Sidebar from '../../components/sidebar/sidebar';
import Navigate from '../../components/navigate/navigate';
import Chart from '../../components/chart/chart';
import DataTable from '../../components/datatable/datatable'; 
const profile = require('../../images/hand_pose.jpg');


export default function Single() {

    return( <div className='single'>
                <Sidebar />
                <div className='single-content'>
                    <Navigate />
                    <div className='top'>
                        <div className='top-left'>
                            <div className='edit'>Edit Profile</div>
                            <h1 className='general-title'>User Information</h1>
                             <div className='item'>
                                <img src={profile} alt='' className='item-image'/>
                                <div className='details'>
                                    <h1 className='details-title'>John Doe</h1>
                                    <div className='info'>
                                        <span className='info-key'>Email: </span>
                                        <span className='info-value'>JohnDoespeaks@gmail.com</span>
                                    </div>
                                    <div className='info'>
                                        <span className='info-key'>Contact: </span>
                                        <span className='info-value'>+1 (800) 227-4638</span>
                                    </div>
                                    <div className='info'>
                                        <span className='info-key'>Address: </span>
                                        <span className='info-value'>#56, Eton Hall Lane</span>
                                    </div>
                                    <div className='info'>
                                        <span className='info-key'>Country: </span>
                                        <span className='info-value'>Halifax, United Kingdom</span>
                                    </div>
                                </div>
                             </div>
                        </div>
                        <div className='top-right'>
                            <Chart aspect={ 3 / 1 } title='Last spending 6 months' />
                        </div>
                    </div>
                    <div className='bottom'>
                        <h1 className='general-title'>Last Transactions</h1>
                        <DataTable />
                    </div>
                </div>
            </div>
        )

}