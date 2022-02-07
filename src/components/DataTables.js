import React from "react";
import ReactDatatable from '@ashvin27/react-datatable';

export default (props) => {

    const configTable = {
        page_size: 10,
        length_menu: [ 10, 20, 50 ],
        show_filter: true,
        show_pagination: true
    }
    
  return (
    <ReactDatatable
        config={configTable}
        records={props.records}
        columns={props.columns}
        tHeadClassName="thead-light"
    />
  );
};
