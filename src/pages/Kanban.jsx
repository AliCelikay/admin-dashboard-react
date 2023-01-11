import React from 'react'
import { KandbanComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-kanban';

import { kanbanData, kanbanGrid } from '../data/dummy'
import { Header } from '../components';
import { KanbanComponent } from '@syncfusion/ej2-react-kanban/src';

const Kanban = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="App" title="Kanban" />
      <KanbanComponent
        id="kanban"
        dataSource={kanbanData}
        cardSettings={{contentField: 'Summary', headerField: 'Id'}}
        // keyField used to categories the elements inside each row, necassary
        keyField="Status"
      >
        <ColumnsDirective>
          {kanbanGrid.map((item, index) => <ColumnDirective key={index} {...item}/>)}
        </ColumnsDirective>
      </KanbanComponent>
    </div>
  )
}

export default Kanban;
