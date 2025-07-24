import './App.css';

function App() {
  return (
    <div className="login-page">
      <img src="./logo.dn.png" alt="Logo" className="logo" />
      <div className="login-box">
        <h2 className="login-title">Login</h2>

        <form>
          <div className="input-group">
            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" required />
          </div>

          <div className="input-group">
            <label htmlFor="senha">Senha</label>
            <input type="password" id="senha" required />
          </div>

          <button type="submit" className="login-btn">Acessar</button>
        </form>

        <div className="login-links">
          <p>Já é assinante e não tem login?</p>
          <p>Esqueceu a senha?</p>

        </div>
      </div>
    </div>
  );
}

export default App;
