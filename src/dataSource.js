//Data Source package
const avatar = require('../src/images/hand_pose.jpg')


export const userColumns = [

    { field: 'id', headerName: 'ID', width: 70 },

    { field: 'user', headerName: 'User', width: 230, renderCell: (params) => { 
            return (  <div className='poster'> 
                        <img className='cell-image' src={ params.row.image } alt='avatar'/>
                        { params.row.username }
                      </div>
            )
        }
    },

    { field: 'email', headerName: 'Email', width: 230 },

    { field: 'age', headerName: 'Age', width: 90,},

    {
      field: 'status',
      headerName: 'Status',
      width: 160,
      renderCell: (params) => {
        return ( <div className={`status ${ params.row.status }`}> { params.row.status } </div> )
      }
      
    }


]

export const userData = [

    {
        id: 1,
        username: 'Snow',
        image: avatar,
        status: 'active',
        email: 'jsnowtargaryean@gmail.com',
        age: 35
    }, 
    
    {
        id: 2,
        username: 'Stark',
        image: avatar,
        status: 'passive',
        email: 'neddeadeddard@live.com',
        age: 65
    }, 
    
    {
        id: 3,
        username: 'Lannister',
        image: avatar,
        status: 'pending',
        email: 'alwayspays@yahoo.com',
        age: 50

    },
 
    {
        id: 4,
        username: 'Melisandre',
        image: avatar,
        status: 'passive',
        email: 'witchburnn11@gmail.com',
        age: 45

    }, 
    
    {
        id: 5,
        username: 'Arya Stark',
        image: avatar,
        status: 'active',
        email: 'aryassasin1@live.com',
        age: 18
    }

]