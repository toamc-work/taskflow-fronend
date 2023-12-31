import { RuleObject } from "antd/es/form";

export interface InitialFormState {
	username: string;
	email: string;
	password: string;
	confirmPassword: string;
}

export interface RequestState<Payload> {
	loading: boolean;
	error: Error | unknown | null;
	payload: Payload | null;
}

export type IUseFormBundleResponse<Payload> = [
    InitialFormState,
    {
        request: RequestState<Payload>,
		rules: {[key:string]:RuleObject[]}
        onChange:(event:React.ChangeEvent<HTMLInputElement>) => void,
        onSubmit:(callback: ({username, email, password, confirmPassword}:InitialFormState) => Promise<Payload>) => void
    }
]