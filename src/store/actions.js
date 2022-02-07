import Axios from 'axios'

export const actions = {
    FETCH_SETTINGS: ( { commit }, payload ) => {
        let url = `https://miusage.com/v1/challenge/2/static/`
        Axios.get( url )
        .then( ( response ) => {
            payload = response.data
            commit( 'UPDATE_SETTINGS', payload )

            // console.log('payload', payload)

            // let ctx = document.getElementById('planet-chart');

            // let localStorageData = JSON.parse(localStorage.getItem('ctx'));

            // // store to local
            // localStorage.setItem('localStorageData', JSON.stringify( payload ));
        } )
        .catch( ( error ) => {
            console.log( error )
        } )
    }
}
