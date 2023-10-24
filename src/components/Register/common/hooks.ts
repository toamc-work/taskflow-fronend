import { useEffect, useState } from "react"
import { IUseFormBundleResponse, InitialFormState, RequestState } from "./types"

export const useFormBundle = <Payload>():IUseFormBundleResponse<Payload> => {
    const [state, setState] = useState<InitialFormState>({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [request, setRequest] = useState<RequestState<Payload>>({
        error:null,
        payload: null,
        loading:false,
    });

    const onChange = (event:React.ChangeEvent<HTMLInputElement>):void => {
        const {name, value} = event.target;

        setState({
            ...state,
            [name]: value
        });
    };
    
    const beforeSubmit = ({username, email, password, confirmPassword}:InitialFormState) => {
    };

    const makeRequest = async (callback: ({username, email, password, confirmPassword}:InitialFormState) => Promise<Payload>): Promise<void> => {
        try
        {
            setRequest((prevState) => {
                return {
                    ...prevState,
                    loading:true,
                }
            })

            const payload:Payload = await callback(state);

            setRequest({
                ...request,
                payload: payload
            });
        }
        catch(error)
        {
            setRequest({
                ...request,
                error:error,
            })
        }
        finally
        {
            setRequest({
                ...request,
                loading:false,
            })
        }
    }

    const onSubmit = (event:React.FormEvent<HTMLFormElement>, callback: ({username, email, password, confirmPassword}:InitialFormState) => Promise<Payload>): void => {
        try
        {
            event.preventDefault();
            beforeSubmit(state)
            makeRequest(callback)
        }
        catch(error)
        {
            throw new Error(error instanceof Error ? error.message : 'unknown error happened on submit Register Form');
        }
    };

    useEffect(() => {
        if(request.error)
        {
            const timeoutID = setTimeout(() => {
                setState((prevState) => {
                    return {
                        ...prevState,
                        error:null,
                    }
                })
            }, 2000);

            return () => {
                clearTimeout(timeoutID)
            }
        }

    },[request.error]);
 
    return [state, {
        request:request,
        onChange:onChange,
        onSubmit:onSubmit,
    }];

};