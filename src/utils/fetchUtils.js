export default class fetchUtils {
    static API_URI = "http://localhost:3724/api"
    static USE_CORS = true
    static PROXY_URI = "https://dakotac5-cors-anywhere.herokuapp.com/"

    static async get(url = '', useCors = this.USE_CORS, callback = false) {
        if (!callback) {
            return await fetch(this.API_URI + url, {mode: useCors ? "cors" : "no-cors"});
        }
        fetch(this.PROXY_URI + url).then(response => {
            if (!response.ok) {
                throw Error(`Server error: [${response.status}] [${response.statusText}] [${response.url}]`);
            }
            return response.json();
        })
            .then(receivedJson => {
                callback(receivedJson)
            })
            .catch(err => {
                console.debug("Error in fetch", err);
            });
    }

    static async postData(url = '', data = {}, useCors = this.USE_CORS) {
        // Default options are marked with *
        return await fetch(url, {
            method: 'POST',
            mode: useCors ? "cors" : "no-cors",
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'

            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify(data)
        });
    }

    static async putData(url = '', data = {}, useCors = this.USE_CORS) {
        // Default options are marked with *
        return await fetch(url, {
            method: 'PUT',
            mode: useCors ? "cors" : "no-cors",
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'

            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify(data)
        });
    }

    static async deleteData(url = '', data = {}, useCors = this.USE_CORS) {
        // Default options are marked with *
        return await fetch(url, {
            method: 'DELETE',
            mode: useCors ? "cors" : "no-cors",
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'

            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify(data)
        });
    }

    static async deleteRequest(url = '', useCors = this.USE_CORS) {
        return this.deleteData(url, {}, useCors)
    }


}
