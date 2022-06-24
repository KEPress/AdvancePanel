import './navigate.scss'
import { SearchOutlined, LanguageOutlined, DarkModeOutlined, FullscreenOutlined } from '@mui/icons-material'
import { NotificationsNoneOutlined, ChatBubbleOutlineOutlined, ListOutlined} from '@mui/icons-material'
const profile = require('../../images/hand_pose.jpg');

export default function Navigate() {

    return( <div className='navigate'>
                <div className='wrapper'>
                    <div className='search'>
                        <input type='text' name='search' id='search' placeholder='Search...' />
                        <SearchOutlined  className='icon'/>
                    </div>
                    <div className='navigate-items'>
                        <div className='item'>
                            <LanguageOutlined className='icon'/>
                            English
                        </div>
                        <div className='item'>
                            <DarkModeOutlined className='icon'/>
                            
                        </div>
                        <div className='item'>
                            <FullscreenOutlined className='icon'/>
                           
                        </div>
                        <div className='item'>
                            <NotificationsNoneOutlined className='icon'/>
                            <div className='counter'>1</div>
                        </div>
                        <div className='item'>
                            <ChatBubbleOutlineOutlined className='icon'/>
                            <div className='counter'>2</div>
                        </div>
                        <div className='item'>
                            <ListOutlined className='icon'/>
                           
                        </div>
                        <div className='item'>
                            <img src={ profile } alt='' className='avatar' />
                        </div>
                    </div>
                </div>
            </div>


    )


}