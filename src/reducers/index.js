import { combineReducers } from "redux";

const songsReducer = () => {
    return [
        {
            title: 'abc',
            duration: '1:45'
        },
        {
            title: 'def',
            duration: '2:32'
        },
        {
            title: 'ghi',
            duration: '4:05'
        },
        {
            title: 'jkl',
            duration: '3:20'
        }
    ];
};

const selectedSongReducer = (selectSong=null, action) => {
    if(action.type === 'SONG_SELECTED')
        return action.payload;
    return selectSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});

