export default class fetchUtils {

    static async get(url = '', useCors = true, callback = false) {
        if (!callback) {
            return await fetch("https://dakotac5-cors-anywhere.herokuapp.com/" + url, {mode: useCors ? "cors" : "no-cors"});
        }
        fetch("https://dakotac5-cors-anywhere.herokuapp.com/" + url).then(response => {
            if (!response.ok) {
                // throw `Server error: [${response.status}] [${response.statusText}] [${response.url}]`;
            }
            return response.json();
        })
            .then(receivedJson => {
               callback(receivedJson)
            })
            .catch(err => {
                console.debug("Error in fetch", err);
                // setErrors(err)
            });
    }

    static async fetchData(url) {
        if (!url)
        return await fetch("https://dakotac5-cors-anywhere.herokuapp.com/" + url)
            .then(response => {
                if (!response.ok) {
                    // throw `Server error: [${response.status}] [${response.statusText}] [${response.url}]`;
                }
                return response.json();
            })
            .then(receivedJson => {
                console.log(receivedJson)
            })
            .catch(err => {
                console.debug("Error in fetch", err);
                // setErrors(err)
            });
    }

//     fetch("https://coffee.alexflipnote.dev/random.json", {
//     "headers": {
//         "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
//         "accept-language": "en-US,en;q=0.9",
//         "cache-control": "max-age=0",
//         "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"90\", \"Google Chrome\";v=\"90\"",
//         "sec-ch-ua-mobile": "?0",
//         "sec-fetch-dest": "document",
//         "sec-fetch-mode": "navigate",
//         "sec-fetch-site": "none",
//         "sec-fetch-user": "?1",
//         "upgrade-insecure-requests": "1"
//     },
//     "referrerPolicy": "strict-origin-when-cross-origin",
//     "body": null,
//     "method": "GET",
//     "mode": "cors"
// });
    static async postData(url = '', data = {}, useCors = true) {
        // Default options are marked with *
        const response = await fetch(url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: useCors ? "cors" : "no-cors", // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
        return response.json(); // parses JSON response into native JavaScript objects
    }

    static async putData(url = '', data = {}, useCors = true) {
        // Default options are marked with *
        const response = await fetch(url, {
            method: 'PUT', // *GET, POST, PUT, DELETE, etc.
            mode: useCors ? "cors" : "no-cors", // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
        return response.json(); // parses JSON response into native JavaScript objects
    }

    static async deleteData(url = '', data = {}, useCors = true) {
        // Default options are marked with *
        const response = await fetch(url, {
            method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
            mode: useCors ? "cors" : "no-cors", // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
        return response.json(); // parses JSON response into native JavaScript objects
    }

    static async deleteRequest(url = '', useCors = true) {
        return this.deleteData(url, {}, useCors)
    }


}
