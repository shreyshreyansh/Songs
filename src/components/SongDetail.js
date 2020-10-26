import React from 'react';
import {connect} from 'react-redux';

function SongDetail(props) {
    return (
        <div>
            {props.song === null ? 'Click to get Detail' : 
            <div>
                <h3>Details For:</h3>
                <p>
                Title: {props.song.title}
                <br />
                Duration : {props.song.duration}
                </p>

            </div>
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {song : state.selectedSong};
}

export default connect(mapStateToProps)(SongDetail);
