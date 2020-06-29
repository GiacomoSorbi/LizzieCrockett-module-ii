import React from 'react';
import './VideoContainer.css';

const VideoContainer = ({ character }) => {
    const [transcript, setTranscript] = React.useState(false);
    const openTranscript = () => {
        setTranscript(true);
    }
    const closeTranscript = () => {
        setTranscript(false);
    }

    const [teachersNotes, setTeachersNotes] = React.useState(false);
    const openTeachersNotes = () => {
        setTeachersNotes(true);
    }
    const closeTeachersNotes = () => {
        setTeachersNotes(false);
    }

    return (
        <div className="videocontainer-wrapper">
            <h1>Video of {character.name} here </h1>
            <iframe title={character.name} width="560" height="315" src={character.video} frameborder="0" allowfullscreen></iframe>
            {!transcript ?
                <>
                    <button className="toggle" onClick={openTranscript}>Open Transcript <i class="fa fa-chevron-down" aria-hidden="true"></i></button>

                </>
                :
                <div className="transcript">
                    <button className="toggle" onClick={closeTranscript}>Close Transcript <i class="fa fa-chevron-up" aria-hidden="true"></i></button>
                    <p> {character.transcript}</p>
                </div>
            }
            <h3>{character.name}</h3>
            <h3>{character.occupation}</h3>
            <p className="biography">{character.biography}</p>
            {!teachersNotes ?
                <>
                    <button className="toggle" onClick={openTeachersNotes}>Teacher's Notes <i class="fa fa-chevron-down" aria-hidden="true"></i></button>

                </>
                :
                <div className="teachers-notes">
                    <button className="toggle" onClick={closeTeachersNotes}>Close Teacher's Notes <i class="fa fa-chevron-up" aria-hidden="true"></i></button>
                    <h3>Teacher's notes</h3>
                    <p><i>{character.teachersnotes}</i></p>
                </div>
            }
        </div>
    )
}

export default VideoContainer;


