import Chart from '../../components/chart/chart';
import Featured from '../../components/featured/featured';
import Navigate from '../../components/navigate/navigate';
import Sidebar from '../../components/sidebar/sidebar';
import DataTable from '../../components/datatable/datatable';
import Widgets from '../../components/widgets/widgets';
import './home.scss';

export default function Home() {

    return( <div className='home'>
            <Sidebar />
               <div className='home-content'>
                    <Navigate />
                    <div className='widgets'>
                        <Widgets type='users' />
                        <Widgets type='orders'/>
                        <Widgets type='earnings'/>
                        <Widgets type='balance'/>
                    </div>
                    <div className="charts">
                        <Featured />
                        <Chart title='Last 6 Months (Revenue)' aspect={ 2 / 1}/>
                    </div>
                    <div className='list-content'>
                        <div className='list-title'>Latest Transactions</div>
                        <DataTable />
                    </div>
               </div>
            </div>

    )

}