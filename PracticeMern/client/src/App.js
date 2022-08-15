import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Create from './components/create';
import RecordList from './components/recordList';
import Edit from './components/edit';
const App=()=>{
    return(
        <div>
            <Navbar/>
            <Routes>
                <Route exact path='/' element={<RecordList/>}/>
                <Route path='/create' element={<Create/>}/>
                <Route path='/edit/:id' element={<Edit/>}/>
                
            </Routes>
        </div>

    );
};

export default App;