import React from 'react';
import './VideoContainer.css';

const VideoContainer = ({ character }) => {
    /*the destructured prop "character" is passed from each individual instance of VideoContainer,
  allowing the component to render differently based on the data provided.*/   

   /*the React hook useState is used here to set the initial state of the transcript toggle as closed.
    "transcript" denotes the initial state (false); setTranscript is a function to change that state */
    const [transcript, setTranscript] = React.useState(false);
    
    /*this is the onClick function for the "Open Transcript" toggle button below,
    which changes the state of "transcript" to true*/
    const openTranscript = () => {
        setTranscript(true);
    }
    
    /*this is the onClick function for the "Close Transcript" toggle button below,
    which changes the state of "transcript" to false*/
    const closeTranscript = () => {
        setTranscript(false);
    }

    /*useState is used here to set the initial state of the teacher's notes toggle as closed.
    "teachersNotes" denotes the initial state (false); setTeachersNotes is a function to change that state */
    const [teachersNotes, setTeachersNotes] = React.useState(false);
    
    /*this is the onClick function for the "Teacher's Notes" toggle button below,
    which changes the state of "teachersNotes" to true*/
    const openTeachersNotes = () => {
        setTeachersNotes(true);
    }

    /*this is the onClick function for the "Close Teacher's Notes" toggle button below,
    which changes the state of "teachersNotes" to false*/
    const closeTeachersNotes = () => {
        setTeachersNotes(false);
    }

    return (
        <div className="videocontainer-wrapper">
            {/*renders an embedded video, with the url and character information taken from the data passed in the prop*/}
            <iframe title={character.name} width="800" height="450" src={character.video} frameborder="0" allowfullscreen></iframe>
            <h3>{character.name}, {character.occupation}</h3>
            {/*if the state of "transcript" is false, the page will render the first set of jsx below (before ":")
            - a toggle button with "Open Transcript," which performs the function openTranscript onClick.
            if the state of "transcript" is true, the second set of jsx (after ":") will be rendered
            - a toggle button with "Close Transcript," which performs the function closeTranscript onClick,
            and the transcript using data from the prop passed to the component*/}
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
            {/*the character's biography is rendered below, taken from the "character" prop passed to the component*/}
            <p className="biography">{character.biography}</p>
             {/*if the state of "teachersNotes" is false, the page will render the first set of jsx below (before ":")
            - a toggle button with "Teacher's Notes," which performs the function openTeachersNotes onClick.
            if the state of "teachersNotes" is true, the second set of jsx (after ":") will be rendered
            - a toggle button with "Close Teacher's Notes," which performs the function closeTeachersNotes onClick,
            and the teacher's notes using data from the props passed to the component*/}
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

//exports the component VideoContainer for use elsewhere
export default VideoContainer;


