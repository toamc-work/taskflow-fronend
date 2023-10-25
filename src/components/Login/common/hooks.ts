import { useEffect, useState } from "react"
import { IUseFormBundleResponse, InitialFormState, RequestState } from "./types"
import { RuleObject } from "antd/es/form";

export const useFormBundle = <Payload>():IUseFormBundleResponse<Payload> => {
    const [state, setState] = useState<InitialFormState>({
        email: '',
        password: '',
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
    
    const makeRequest = async (callback: ({email, password}:InitialFormState) => Promise<Payload>): Promise<void> => {
        try
        {
            setRequest((prevState) => {
                return {
                    ...prevState,
                    loading:true,
                }
            })

            const payload:Payload = await callback(state);
            console.log({payload});

            setRequest({
                ...request,
                payload: payload,
                loading: false,
            });
        }
        catch(error)
        {
            setRequest({
                ...request,
                error:error,
                loading:false,
            })
        }
    }

    const onSubmit = (callback: ({email, password}:InitialFormState) => Promise<Payload>): void => {
        try
        {
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
 

    const rules:{[key:string]:RuleObject[]} = {
        username: [
            {
                required:true,
                message:'username is required',
            },
            {
                min:6,
                message: 'minimum 6 letters',
            },
            {
                max:14,
                message: 'maximum 14 letters',
            },
        ],
        email: [
            {
                required:true,
                message: 'email is required'
            },
            {
                type:'email',
                message: 'invalid email format',
            },
        ],
        password: [
            {
                required: true,
                message: "password is required.",
            },
            {
            pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{8,}$/,
            message: "Password must include at least one uppercase letter, one lowercase letter, and one special character (!@#$%^&*).",
            },
            {
                min:8,
                message:'minimum 8 letters',
            },
            {
                max:14,
                message:'maximum 14 letters',
            },
        ],
        confirmPassword: [
            {
                required: true,
                message: "confirm password is required.",
            },
            {
                validator:((rule, value) => {
                    if(value != state.password) return Promise.reject('confirmation failed')
                    else return Promise.resolve()
                })
            }
        ]
    }

    return [state, {
        request:request,
        rules:rules,
        onChange:onChange,
        onSubmit:onSubmit,
    }];

};