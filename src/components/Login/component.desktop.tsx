import React from "react";
import "./styles.desktop.css";
import { Button, Form, Input, InputPassword } from "./common/styled-components";
import { useFormBundle } from "./common/hooks";
import { SCRIPTS } from "./common/scripts";
import { Api } from "../../Api";
import { Link, Navigate } from "react-router-dom";
import { Skeleton } from "antd";

export const LoginDesktopComponent: React.FunctionComponent = () => {
    const [form, {request, rules, onChange, onSubmit}] = useFormBundle<{message:string, code:number}>()

    return (
            <div id="login-content">
                <header id="login-header">
                    <h1>{SCRIPTS.title}</h1>
                    <p>{SCRIPTS.subTitle}</p>
                </header>
                <main id="login-main">
                    <Form 
                        onFinish={() => onSubmit(new Api().preformLogin)}
                        validateTrigger='onSubmit'
                        initialValues={{
                            remember:false
                        }}  
                        id="login-form"
                    >
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
                        <Button htmlType="submit" loading={request.loading} type="primary">{SCRIPTS.submit}</Button>
                    </Form>
                </main>
                <footer id="login-footer">
                    <Link to={"/signup"}>{SCRIPTS.link}</Link>
                </footer>
            </div>
    )
};