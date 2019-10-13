export default () => {
  `<main class="container">
  <h1>Admin Page</h1>
  <h1>LOGIN</h1>
  <div class>
    <form id="signup-form">
      <label for="email">Email</label>
      <hr/>
      <input
        type="email"
        name="email"
        id="signup-email"
        placeholder="EMAIL ADDRESS"
      />
      <hr/>
      <label for="password">Password</label>
      <hr/>
      <input
        type="password"
        name="password"
        id="signup-password"
        placeholder="PASSWORD"
      />
      <hr/>
      <br>
      <button type="submit">LOGIN</button>
    </form>
  </div>
  <footer>
    <nav>
    <ul>
      <li><a href="../">Back to Home</a></li>
    </ul>
    </nav>
  </footer>
</main>`;
}

