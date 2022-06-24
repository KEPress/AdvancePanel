import './datatable.scss'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from '@mui/material'
const product_image = require('../../images/hand_pose.jpg')

export default function DataTable() {

    const table_data = [
        {
            id: 231257,
            product: 'Dickatron 2000',
            image: product_image,
            customer: 'John Doe',
            date: '10 April 2000',
            stock: 35,
            method: 'Cash on delivery',
            status: 'Pending'
        },

        {
            id: 232321,
            product: 'Primadonna',
            image: product_image,
            customer: 'Jane Doe',
            date: '12 May 2001',
            stock: 100,
            method: 'Online',
            status: 'Approved'

        },

        {
            id: 221231,
            product: 'Plus Ultra',
            image: product_image,
            customer: 'Pablo Escobar',
            date: '10 June 2022',
            stock: 230,
            method: 'Online',
            status: 'Pending'

        },

        {

            id: 2456789,
            product: 'Plexatron',
            image: product_image,
            customer: 'Alice Eve',
            date: '11 July 2023',
            stock: 300,
            method: 'Online',
            status: 'Approved'

        },

        {
            
            id: 3212329,
            product: 'Ultramax',
            image: product_image,
            customer: 'Daffy Cuck',
            date: '12 August 2023',
            stock: 350,
            method: 'Online',
            status: 'Pending'

        }

    ]

    return(  <TableContainer component={Paper} className='data-table'>
                <Table sx={{minWidth: 650}} aria-label='simple table'>
                    <TableHead>
                        <TableRow>
                            <TableCell className='tableCell'> Tracking ID</TableCell>
                            <TableCell className='tableCell'>Product</TableCell>
                            <TableCell className='tableCell'> Customer</TableCell>
                            <TableCell className='tableCell'> Date</TableCell>
                            <TableCell className='tableCell'> Stock</TableCell>
                            <TableCell className='tableCell'> Payment Method</TableCell>
                            <TableCell className='tableCell'> Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        { table_data.map((table_data) => (
                            <TableRow key={table_data.id} sx={{ '&:last-child td, &:last-child th': {border:0}}}>
                                <TableCell className='tableCell'> { table_data.id }</TableCell>
                                <TableCell className='tableCell'> 
                                    <div className='wrapper'>
                                        <img src={ table_data.image } alt='' className='image' />
                                        { table_data.product }
                                    </div>
                                </TableCell>
                                <TableCell className='tableCell'> { table_data.customer }</TableCell>
                                <TableCell className='tableCell'> { table_data.date }</TableCell>
                                <TableCell className='tableCell'> { table_data.stock }</TableCell>
                                <TableCell className='tableCell'> { table_data.method }</TableCell>
                                <TableCell className='tableCell'>
                                    <span className={`status ${table_data.status}`}>
                                        { table_data.status }
                                    </span>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        )
}