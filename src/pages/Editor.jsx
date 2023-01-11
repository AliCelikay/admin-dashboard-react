import React from 'react'
import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditoryComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor'

import { EditorData } from '../data/dummy'
import { Header } from '../components'
import { RichTextEditorComponent } from '@syncfusion/ej2-react-richtexteditor/src'

const Editor = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="App" title="Editor" />
      <RichTextEditorComponent>
        {/* PrePopulated data to see how to edit words in syncfusion */}
        <EditorData />
        <Inject services={[HtmlEditor, Image, Link, Toolbar, QuickToolbar]}/>
      </RichTextEditorComponent>
    </div>
  )
}

export default Editor
