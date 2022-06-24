import Navigate from '../../components/navigate/navigate';
import Sidebar from '../../components/sidebar/sidebar';
import UserTable from '../../components/usertable/usertable';
import './list.scss';

export default function List() {

    return( <div className='list'>
                <Sidebar />
                <div className='list-content'>
                   <Navigate />
                   <UserTable />
                </div>
            </div>
    
    
    
    )



}