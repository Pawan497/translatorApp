import './styles.css';
import React, { useState } from "react";
import Field from "./field";
import Translate from "./translate";
import Languages from "./languages";

export default function App() {
   const [language, setLanguage] = useState('es');
   const [text, setText] = useState('');
   console.log("txt",text,"lang",language);

  return (
    <div>
      <Field onChange={setText} />
      <Languages language={language} onLanguageChange={setLanguage} />
      <hr />
      <Translate text={text} language ={language} />
    </div>
  );
}
