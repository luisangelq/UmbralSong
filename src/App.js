import { useState, useEffect } from "react"
import Form from "./components/Form";
import axios from "axios";

function App() {

  const [wordsearch, saveWordSearch] = useState({});
  const [ word, saveWord] = useState("");

  const {artist, song} = wordsearch;

  useEffect(() => {
    if(Object.keys(wordsearch).length === 0) return;

    const consultApi = async () => {
      
      const url = `https://api.lyrics.ovh/v1/${artist}/${song}`;

      const result = await axios(url);

      saveWord(result);
    }
    consultApi();

  }, [artist, song, wordsearch])

  return (
    <div className="App">
      <Form 
        saveWordSearch={saveWordSearch}
      />
    </div>
  );
}

export default App;
