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
            <iframe title={character.name} width="800" height="450" src={character.video} frameborder="0" allowfullscreen></iframe>
            <h3>{character.name}, {character.occupation}</h3>
            {!transcript ?
                <>
                    <button className="toggle" onClick={openTranscript}>Open Transcript <i class="fa fa-chevron-down" aria-hidden="true"></i></button>

                </>
                :
                <div className="transcript">
                    <button className="toggle" onClick={closeTranscript}>Close Transcript <i class="fa fa-chevron-up" aria-hidden="true"></i></button>
                    <h3>Video transcript</h3>
                    <p><i>{character.transcript}</i></p>
                </div>
            }

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


