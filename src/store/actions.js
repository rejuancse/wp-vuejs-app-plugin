import Axios from 'axios'

export const actions = {
    // SAVE_SETTINGS: ( { commit }, payload ) => {
    //     commit( 'SAVING' )
    //     let url = `https://miusage.com/v1/challenge/2/static/`
    //     console.log('EE', url);
    //     Axios.post( url, {
    //         firstname: payload.firstname,
    //         lastname : payload.lastname,
    //         email    : payload.email,
    //     } )
    //     .then( ( response ) => {
    //         commit( 'SAVED' )
    //     } )
    //     .catch( ( error ) => {
    //         console.log( error )
    //     } )
    // },

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