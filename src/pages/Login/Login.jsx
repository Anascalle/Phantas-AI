
import "./Login.css"
export default function Login() {
    return (
      <section className="auth">
        <h2>Iniciar Sesión</h2>
        <form>
          <input type="email" placeholder="Correo electrónico" required />
          <input type="password" placeholder="Contraseña" required />
          <button type="submit">Entrar</button>
        </form>
      </section>
    );
  }
  
  