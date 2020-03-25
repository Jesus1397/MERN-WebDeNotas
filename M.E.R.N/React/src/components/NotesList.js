import React, { Component } from "react";
import Axios from "axios";
import { format } from "timeago.js";
import { Link } from "react-router-dom";

export default class NotesList extends Component {
  state = {
    notes: []
  };

  getNotes = async () => {
    var notes = await Axios.get("http://localhost:4000/api/notes");
    this.setState({
      notes: notes.data
    });
  };
  componentDidMount = () => {
    this.getNotes();
  };
  deleteNote = async id => {
    await Axios.delete("http://localhost:4000/api/notes/" + id);
    this.getNotes();
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          {this.state.notes.map(note => (
            <div className="col-md-4 p-2" key={note._id}>
              <div className="card">
                <div className="card-header d-flex justify-content-between">
                  <h5>{note.title}</h5>
                  <Link
                    to={"/edit/" + note._id}
                    className="btn btn-info btn-sm"
                  >
                    Edit
                  </Link>
                </div>
                <div className="card-body">
                  <p>{note.author}</p>
                  <p>{format(note.date)}</p>
                  <p>{note.content}</p>
                </div>
                <div className="card-footer">
                  <button
                    className="btn btn-danger btn-block"
                    onClick={() => {
                      this.deleteNote(note._id);
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
