import { RuleObject } from "antd/es/form";

export interface InitialFormState {
	email: string;
	password: string;
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
        onSubmit:(callback: ({email, password}:InitialFormState) => Promise<Payload>) => void
    }
]