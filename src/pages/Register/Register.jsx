import "./Register.css"

export default function Register() {
    return (
      <section className="auth">
        <h2>Crear cuenta</h2>
        <form>
          <input type="text" placeholder="Nombre completo" required />
          <input type="email" placeholder="Correo electrónico" required />
          <input type="password" placeholder="Contraseña" required />
          <button type="submit">Registrarse</button>
        </form>
      </section>
    );
  }
  