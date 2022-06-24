import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket'
import LocalShippingIcon from '@mui/icons-material/LocalShipping'
import ArticleIcon from '@mui/icons-material/Article'
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { DarkModeContext } from '../../context/darkContext'
import { AnalyticsSharp, NotificationAddRounded, HealthAndSafety, Settings ,Logout} from '@mui/icons-material'

export default function Sidebar() {

    const { dispatch } = useContext(DarkModeContext)

    return(  <div className='sidebar'>
                <div className='sidebar-top'>
                    <Link to={'/'} className='App-link'>
                        <span className='logo'>Advance Admin</span>
                    </Link>
                </div>
                <hr />
                <div className='sidebar-center'>
                    <ul>
                        <p className='title'>MAIN</p><Link to={'/'} className='App-link'><li><DashboardIcon  className='icon'/><span className='dashboard'>Dashboard</span></li></Link>
                        <p className='title'>LISTS</p><Link to={'/users'} className='App-link'><li><PersonOutlineIcon className='icon'/><span className='dashboard'>Users</span></li></Link>
                        <Link to={'/products'} className='App-link'><li><ProductionQuantityLimitsIcon className='icon'/><span className='dashboard'>Products</span></li></Link>
                        <li><ShoppingBasketIcon className='icon'/><span className='dashboard'>Orders</span></li>
                        <li><LocalShippingIcon className='icon'/><span className='dashboard'>Delivery</span></li>
                        <p className='title'>LINKS</p><li><AnalyticsSharp className='icon'/><span className='dashboard'>Stats</span></li>
                        <li><NotificationAddRounded className='icon'/><span className='dashboard'>Notifications</span></li>
                        <p className='title'>SERVICES</p><li><HealthAndSafety className='icon'/><span className='dashboard'>System Health</span></li>
                        <li><ArticleIcon className='icon'/><span className='dashboard'>Logs</span></li>
                        <li><Settings className='icon'/><span className='dashboard'>Settings</span></li>
                        <p className='title'>USER</p><li><PermContactCalendarIcon className='icon'/><span className='dashboard'>Profile</span></li>
                        <li><Logout className='icon'/><span className='dashboard'>Logout</span></li>
                    </ul>
                </div>
                <hr />
                <div className='sidebar-bottom'>
                    <div className='select-theme' onClick={() => dispatch({type:'LIGHT'})}></div>
                    <div className='select-theme' onClick={() => dispatch({type:'DARK'})}></div>
                </div>
            </div>
    
    )

}