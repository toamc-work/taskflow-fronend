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
        onChange:(event:React.ChangeEvent<HTMLInputElement>) => void,
        onSubmit:(event:React.FormEvent<HTMLFormElement>, callback: ({username, email, password, confirmPassword}:InitialFormState) => Promise<Payload>) => void
    }
]