import React from 'react'
import './App.css'
const Login = (props) => {
    const {
        email,
        setEmail,
        password,
        setPassword,
        handleLogin,
        handleSignup,
        hasAccount,
        setHasAccount,
        emailError,
        passwordError,
    } = props;
    return (
        <section className="login">
            <div className="loginContainer">
                <label> Nome do Usuário</label>
                <input type="text"
                    autoFocus
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <p className="errorMsg">{emailError}</p>

                <label> Senha</label>
                <input type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <p className="errorMsg">{passwordError}</p>
                <div className="btnContainer">
                    {hasAccount ? (
                        <>
                            <button onClick={handleLogin} >Acessar</button>
                            <p>Não possui uma conta? <span onClick={() => setHasAccount(!hasAccount)}>Inscrever</span></p>
                        </>
                    ) : (
                        <>
                            <button onClick={handleSignup}>Inscrever-se</button>
                            <p>Já tem uma conta? <span onClick={() => setHasAccount(!hasAccount)}>Entrar</span></p>
                        </>
                    )}
                </div>


            </div>

        </section>
    )
}
export default Login;