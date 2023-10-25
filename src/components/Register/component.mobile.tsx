import React from "react";
import "./styles.mobile.css";
import { Button, Form, Input, InputPassword } from "./common/styled-components";
import { useFormBundle } from "./common/hooks";
import { SCRIPTS } from "./common/scripts";
import { Api } from "../../Api";
import { Link, Navigate } from "react-router-dom";

export const RegisterMobileComponent: React.FunctionComponent = () => {
    const [form, {request, rules, onChange, onSubmit}] = useFormBundle<{message:string, code:number}>()
    console.log(request.payload);
    if(request.payload?.code === 200) return <Navigate to={'/signin'}/>;

    return (
            <div id="register-content">
                <header id="register-header">
                    <h1>{SCRIPTS.title}</h1>
                    <p>{SCRIPTS.subTitle}</p>
                </header>
                <main id="register-main">
                    <Form 
                        onFinish={() => onSubmit(new Api().preformRegistration)} 
                        validateTrigger='onSubmit'
                        initialValues={{
                            remember:false
                        }}  
                        id="register-form"
                    >
                        <Form.Item
                            name={'username'}
                            rules={rules.username}
                        >
                            <Input 
                                name='username'
                                value={form.username} 
                                onChange={onChange} 
                                placeholder="Username"
                            />
                        </Form.Item>

                        <Form.Item
                            name={'email'}
                            rules={rules.email}
                        >
                            <Input 
                                name='email'
                                onChange={onChange} 
                                value={form.email} 
                                placeholder="Email"
                            />
                        </Form.Item>
                        <Form.Item
                            name={'password'}
                            rules={rules.password}
                        >

                            <InputPassword 
                                name='password'
                                onChange={onChange} 
                                value={form.password} 
                                placeholder="Password"
                            />
                        </Form.Item>
                        <Form.Item
                            name={'confirmPassword'}
                            rules={rules.confirmPassword}
                        >
                            <InputPassword 
                                name='confirmPassword'
                                onChange={onChange} 
                                value={form.confirmPassword} 
                                placeholder="Confirm Password"
                            />
                        </Form.Item>
                        <Button htmlType="submit" loading={request.loading} type="primary">{SCRIPTS.submit}</Button>
                    </Form>
                </main>
                <footer id="register-footer">
                    <Link to={"/signin"}>{SCRIPTS.link}</Link>
                </footer>
            </div>
    )
};