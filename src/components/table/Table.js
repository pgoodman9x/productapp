import React from 'react';
import Row from './TableRow';
import './Table.scss';

function Table({ headings, data, tableStyle }) {
    let thead = headings.map((thead, idx) => { return <th key={idx}>{thead}</th> });
    let edit = false;
    let rows;
    if(tableStyle === "control"){
        rows = data.map((item) => {
            return <Row key={item.id} data={item} edit={edit} />
        })
    }else{
        rows = data.map((item) => {
            return <Row key={item.id} data={item} />
        })
    }

    return (
        <div className="table-container">
            <table className="c-table">
                <thead>
                    <tr>
                        {thead}
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        </div>
    )
}

export default Table
