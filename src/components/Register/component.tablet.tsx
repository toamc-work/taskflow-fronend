import React from "react";
import "./styles.desktop.css";
import { Button, Input, InputPassword } from "./common/styled-components";
import { useFormBundle } from "./common/hooks";
import { SCRIPTS } from "./common/scripts";

export const RegisterTabletComponent: React.FunctionComponent = () => {
    const [form, {request, onChange, onSubmit}] = useFormBundle<{token:string}>()

    return (
            <div id="register-content">
                <header id="register-header">
                    <h1>{SCRIPTS.title}</h1>
                    <p>{SCRIPTS.subTitle}</p>
                </header>
                <main id="register-main">
                    <form onSubmit={(event) => onSubmit(event, async (form) => {
                        return await new Promise((resolve) => {
                            setTimeout(() => {
                                resolve({token:''});
                            },3000);
                        }) 

                    })} id="register-form">
                        <Input 
                            name='username'
                            value={form.username} 
                            onChange={onChange} 
                            placeholder="Username"
                        />
                        <Input 
                            name='email'
                            onChange={onChange} 
                            value={form.email} 
                            placeholder="Email"
                        />
                        <InputPassword 
                            name='password'
                            onChange={onChange} 
                            value={form.password} 
                            placeholder="Password"
                        />
                        <InputPassword 
                            name='confirmPassword'
                            onChange={onChange} 
                            value={form.confirmPassword} 
                            placeholder="Confirm Password"
                        />
                        <Button htmlType="submit" loading={request.loading} type="primary">{SCRIPTS.submit}</Button>
                    </form>
                </main>
            </div>
    )
};