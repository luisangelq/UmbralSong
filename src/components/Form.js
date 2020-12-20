import {useState} from "react"

const Form = ({saveWordSearch}) => {

    const [search, saveSearch] = useState({
        artist: "",
        song: ""
    });
    const [error, saveError] = useState(false);

    const { artist, song } = search;

    const updateState = e => {
        saveSearch({
            ...search,
            [e.target.name] : e.target.value,
        })
    }

    const searchInfo = e => {
        e.preventDefault()

        if(artist.trim() === "" || song.trim() === ""){
            saveError(true);
            return;
        }
        saveError(false);

        saveWordSearch(search);
    }
  return (
    <div className="bg-info">
      <div className="container">
        <div className="row">
          <form className="col card text-white bg-transparent mb-5 pt-5 pb-2"
            onSubmit={searchInfo}
          >
            <fieldset>
              <legend className="text-center">Search words Songs</legend>
              { error ? <p className="alert alert-danger text-center p-2">All Fields Are Required</p> : null}
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Artist</label>
                    <input
                      type="text"
                      className="form-control"
                      name="artist"
                      placeholder="Artist Name"
                      onChange={updateState}
                      value={artist}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Song</label>
                    <input
                      type="text"
                      className="form-control"
                      name="song"
                      placeholder="Song Name"
                      onChange={updateState}
                      value={song}
                    />
                  </div>
                </div>
              </div>

              <button type="submit" className="btn btn-primary float-right">Search</button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
