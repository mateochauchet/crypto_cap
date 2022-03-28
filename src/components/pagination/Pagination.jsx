import React from 'react';
import './pagination.css';

const Pagination = ({page,setPage,num}) => {
    return (
        <div className="app__pagination">
                <div>
                   {page>1 && <p onClick={()=>setPage(page-num)} > {'<'} Previous  </p>} 
                </div>
                <div>
                   <p onClick={()=>setPage(page+num)} >Next  {'>'} </p> 
                </div>
        </div>
    )
}

export default Pagination
