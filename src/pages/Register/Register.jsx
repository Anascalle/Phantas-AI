import "./Register.css"

export default function Register() {
    return (
      <section class="auth-card">
      <h1>Phantas IA</h1>
      <h2>Crear cuenta</h2>

      <form action="/register" method="POST" class="auth-form">
        <label for="name">Nombre de usuario</label>
        <input type="text" id="name" name="name" required />

        <label for="email">Correo electrónico</label>
        <input type="email" id="email" name="email" required />

        <label for="password">Contraseña</label>
        <input type="password" id="password" name="password" required />

        <label for="confirm-password">Confirmar contraseña</label>
        <input type="password" id="confirm-password" name="confirm-password" required />

        <button type="submit">Registrarme</button>
      </form>

      <p class="auth-switch">
        ¿Ya tienes una cuenta?
        <a href="login.html">Inicia sesión</a>
      </p>
    </section>
    );
  }