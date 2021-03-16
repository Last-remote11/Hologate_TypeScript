import * as React from 'react';
import './Sidebar.css'

const Sidebar = () => {

    return (
        <React.StrictMode>
            <div className='sideBar fl w-10 pa2 shadow-5 ba2 b--purple dim'>
                <h1>여기에 뭘 넣을까??</h1><br></br>
                <a href='https://en.hololive.tv/' rel="noreferrer" target='_blank'><h2>Hololive official homepage(EN)</h2></a><br></br>
                <a href='abc'><h2>test</h2></a><br></br>
                <a href='abc'><h2>test</h2></a><br></br>
                <a href='abc'><h2>test</h2></a>
            </div>
        </React.StrictMode>
    )
        
    }

export default Sidebar