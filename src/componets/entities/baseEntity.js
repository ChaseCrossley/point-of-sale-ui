import {Component} from "react";
import fetchUtils from "../../utils/fetchUtils";

export default class BaseEntity extends Component {
    constructor(props) {
        super(props);
        if (this.constructor === BaseEntity) {
            throw new Error(" Object of Abstract Class cannot be created");
        }
    }
    
     getDirective(){
        let directive = this.constructor.name.split("")
        directive[0] = directive[0].toLowerCase()
        return directive.join("")
    }

     get(id = null, callback) {
        const url = "/" + this.getDirective() + "/retrieve" + (!id ? "All" : "/" + id)
        fetchUtils.get(url).then(r => {
            if (!r.ok) {
                console.log("THERE WAS AN ERROR")
                throw Error(r.statusText)
            }
            console.log("GET Request: " + url)
            const json = r.json();
            console.log("response: " + json)
            return json;
        }).then(receivedJson => {
            callback(receivedJson)
        }).catch(err => {
            console.debug("Error in fetch", err);
        });
    }

     post(data, callback) {
        const url = "/" + this.getDirective() + "/create"
        fetchUtils.postData(url, data).then(r => {
            if (!r.ok) {
                console.log("THERE WAS AN ERROR")
                throw Error(r.statusText)
            }
            console.log("GET Request: " + url)
            const json = r.json();
            console.log("response: " + json)
            return json;
        }).then(receivedJson => {
            callback(receivedJson)
        }).catch(err => {
            console.debug("Error in fetch", err);
        });
    }

     put(data, callback) {
        const url = "/" + this.getDirective() + "/update"
        fetchUtils.putData(url, data).then(r => {
            if (!r.ok) {
                console.log("THERE WAS AN ERROR")
                throw Error(r.statusText)
            }
            console.log("GET Request: " + url)
            const json = r.json();
            console.log("response: " + json)
            return json;
        }).then(receivedJson => {
            callback(receivedJson)
        }).catch(err => {
            console.debug("Error in fetch", err);
        });
    }

     delete(id, callback) {
        const url = "/" + this.getDirective() + "/delete/" + id
        fetchUtils.deleteRequest(url).then(r => {
            if (!r.ok) {
                console.log("THERE WAS AN ERROR")
                throw Error(r.statusText)
            }
            console.log("GET Request: " + url)
            const json = r.json();
            console.log("response: " + json)
            return json;
        }).then(receivedJson => {
            callback(receivedJson)
        }).catch(err => {
            console.debug("Error in fetch", err);
        });
    }

}
