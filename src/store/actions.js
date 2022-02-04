import Axios from 'axios';

export const actions = {
    FETCH_SETTINGS: ( { commit }, payload ) => {
        let url = `https://miusage.com/v1/challenge/2/static/`

        Axios.get( url )
        .then( ( response ) => {
            payload = response.data
            commit( 'UPDATE_SETTINGS', payload )
        } )
        .catch( ( error ) => {
            console.log( error )
        } )
    }
}