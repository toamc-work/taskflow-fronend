import { InitialFormState as InitialFormStateRegistration } from "./components/Register/common/types";
import { InitialFormState as InitialFormStateLogin } from "./components/Login/common/types";
import _ from 'lodash';

interface IApi {
    preformRegistration:(form:InitialFormStateRegistration) => Promise<{message:string, code:number}>
    preformLogin:(form:InitialFormStateLogin) => Promise<{message:string, code:number, token?: string, ttl?:Date | null}>
}

export class Api implements IApi{

    private apiURL:string

    constructor()
    {
        this.apiURL = process.env.REACT_APP_API_URL || '';
    }

    public preformRegistration = async (form: InitialFormStateRegistration):Promise<{message:string, code:number}> => {
        
        const url = `${this.apiURL}/user/register`
        const options = {
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body:JSON.stringify({
                user_username:form.username,
                user_password:form.password,
                user_email:form.email,
            })
        };

        try
        {
            const requestPromise = await fetch(url, options); 
            const response: {message:string, code:number} = await requestPromise.json();
            return response;
        }
        catch(error)
        {
            throw new Error(error instanceof Error ? error.message : 'failed preformRegistration Api request');
        };

    }

    public preformLogin = async (form:InitialFormStateLogin) => {
        const url = `${this.apiURL}/user/login`
        const options = {
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body:JSON.stringify({
                user_email:form.email,
                user_password:form.password,
            })
        };

        try
        {
            const requestPromise = await fetch(url, options); 
            const response: {message:string, code:number, token?:string, ttl?:Date | null} = await requestPromise.json();
            console.log({response})
            return response;

        }
        catch(error)
        {
            throw new Error(error instanceof Error ? error.message : 'failed preformLogin Api request');
        };
    }
}