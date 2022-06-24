import './new.scss';
import Navigate from '../../components/navigate/navigate';
import Sidebar from '../../components/sidebar/sidebar';
import { useState } from 'react';
import { DriveFolderUploadOutlined } from '@mui/icons-material';

const profile = require('../../images/Regular_Smurf.png');

export default function New({inputs, title}) {

    const [file, setFile] = useState('');

    return(  <div className='new'>
                <Sidebar />
                <div className='new-content'>
                    <Navigate />
                    <div className='top'>
                        <h1 className='title'>{ title }</h1>
                    </div>
                    <div className='bottom'>
                        <div className='bottom-left'>
                            <img src={ file ? URL.createObjectURL(file) : profile } alt='' className='image' />
                        </div>
                        <div className='bottom-right'>
                            <form>
                                <div className='input'>
                                    <label htmlFor='file'> Upload Image: <DriveFolderUploadOutlined className='upload'/></label>
                                    <input type={'file'} id='file' onChange={event => setFile(event.target.files[0])} style={{display:'none'}} />
                                </div>
                                { inputs.map((input) => (
                                    <div className='input' key={ input.id }>
                                        <label>{ input.label } </label>
                                        <input type={ input.map } placeholder={ input.placeholder } />
                                    </div>
                                ))}
                                <button>Send</button>
                            </form>
                        </div>
                    </div>
                </div>
             </div>


    )


}