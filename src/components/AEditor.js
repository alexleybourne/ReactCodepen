import React from 'react'
import { render } from "react-dom";
import AceEditor from "react-ace";

// Languages
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/mode-javascript";


import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-terminal";
import "ace-builds/src-min-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/snippets/javascript";


export default function AEditor() {

    function onChange(newValue) {
        console.log("change", newValue);
    }
    
    return (
        <AceEditor
  placeholder="Placeholder Text"
  mode="html"
  theme="terminal"
  name="blah2"
  onChange={onChange}
  fontSize={14}
  showPrintMargin={true}
  showGutter={true}
  highlightActiveLine={true}
  value={`function onLoad(editor) {
    console.log("i've loaded");
    }`}
  setOptions={{
  enableBasicAutocompletion: true,
  enableLiveAutocompletion: true,
  enableSnippets: true,
  showLineNumbers: true,
  tabSize: 2,
  }}/>
    )
}
