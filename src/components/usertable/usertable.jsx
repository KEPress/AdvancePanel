import './usertable.scss'
import { DataGrid } from '@mui/x-data-grid'
import { userColumns, userData } from '../../dataSource'
import { Link } from 'react-router-dom'


export default function UserTable() {

    const action = [ { field: 'action', headerName: 'Action', width: 200, renderCell:()=>{
        return( <div className='action'>
                    <Link to={'/users/:userID'}><div className='view'>View</div></Link>
                    <div className='delete'>Delete</div>
                </div>)
    }}]
    return(   <div className='usertable'>
                <div className='title'>Users <Link to={'/users/new'} className='App-link'><div className='addUser'>Add New User</div></Link></div>
                <DataGrid className='grid' rows={userData} columns={userColumns.concat(action)} pageSize={9} rowsPerPageOptions={[9]} checkboxSelection />
              </div>
    
    )

}