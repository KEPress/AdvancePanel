import './featured.scss'
import { MoreVertOutlined, KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material'
import { CircularProgressbar } from  'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

export default function Featured() {


    return(<div className='featured'>
                <div className='top'>
                    <h1 className='title'>Total Revenue</h1>
                    <MoreVertOutlined fontSize='small' />
                </div>
                <div className='bottom'>
                    <div className='bottom-chart'>
                        <CircularProgressbar value={70} text='70%' strokeWidth={5}/>
                    </div>
                    <p className='title'>Total Sales made today</p>
                    <p className='amount'>$500.00</p>
                    <p className='details'>Previous transactions processing. Last payments may not be included.</p>
                    <div className='summary'>
                        <div className='item'>
                            <div className='item-title'>Target</div>
                            <div className='item-result positive'>
                                <KeyboardArrowUp fontSize='small' />
                                <div className='result-amount'>$12.4k</div>
                            </div>
                        </div>
                        <div className='item'>
                            <div className='item-title'>Last Week</div>
                            <div className='item-result negative'>
                                <KeyboardArrowDown fontSize='small' />
                                <div className='result-amount'>$12.4k</div>
                            </div>
                        </div>
                        <div className='item'>
                            <div className='item-title'>Last Month</div>
                            <div className='item-result positive'>
                                <KeyboardArrowUp fontSize='small' />
                                <div className='result-amount'>$12.4k</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    
    )



}