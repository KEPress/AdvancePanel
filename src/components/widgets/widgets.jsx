import './widgets.scss'
import { KeyboardArrowUp, PersonOutline, ShoppingBagOutlined, MonetizationOnOutlined, AccountBalanceOutlined } from '@mui/icons-material'

export default function Widgets( { type } ) {

    let data;

    //Temporary amounts
    const amount = 100;
    const percentage = 20;

    switch(type) {
       
        //NOTE: case name must be spelt correctly and match on the home.jsx page
        case 'users':
            data = {
                title: 'USERS',
                isMoney: false,
                link:'See all Users',
                icon: (<PersonOutline className='icon' style={{backgroundColor:'rgb(255, 0, 0, 0.2'}} />)
            };
            break;
        case 'orders':
            data = {
                title: 'ORDERS',
                isMoney: false,
                link:'View all orders',
                icon: (<ShoppingBagOutlined className='icon' style={{backgroundColor:'rgb(218, 165, 32, 0.2', color:'goldenrod'}} />) 
            };
            break;
        case 'earnings':
            data = {
                title: 'EARNINGS',
                isMoney: true,
                link:'View all net earnings',
                icon: (<MonetizationOnOutlined className='icon' style={{backgroundColor:'rgb(71, 163, 92, 0.2', color:'darkgreen'}} />) 
            };
            break;
        case 'balance':
            data = {
                title: 'BALANCE',
                isMoney: true,
                link:'See details',
                icon: (<AccountBalanceOutlined className='icon' style={{backgroundColor:'rgb(240, 139, 250, 0.2', color:'#8D2196'}} />) 
            };
            break;
        default:
            break;

    }

    return(  <div className='widget-content'>
                <div className='left'>
                    <span className='title'>{ data.title }</span>
                    <span className='counter'>{ data.isMoney && '$'} { amount }</span>
                    <span className='link'>{ data.link }</span>
                </div>
                <div className='right'>
                    <div className='percent positive'> 
                        <KeyboardArrowUp/>{ percentage }
                    </div>
                    { data.icon }
                </div>
             </div>


    )




}