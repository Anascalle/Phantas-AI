
import "./Login.css"
export default function Login() {
    return (
      <section class="auth-card">
      <h1>Phantas IA</h1>
      <h2>Iniciar sesión</h2>

      <form action="/login" method="POST" class="auth-form">
        <label for="email">Correo electrónico</label>
        <input type="email" id="email" name="email" required />

        <label for="password">Contraseña</label>
        <input type="password" id="password" name="password" required />

        <button type="submit">Entrar</button>
      </form>

      <p class="auth-switch">
        ¿No tienes cuenta?
        <a href="register.html">Regístrate aquí</a>
      </p>
    </section>
    );
  }