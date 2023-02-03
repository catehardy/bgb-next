import Head from "next/head";

// WIP - seeing how to add Firebase auth

export default function Login() {
  return (
    <>
      <Head>
        <title>BGB Login</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <title>Login</title>
      </Head>

      <body>
        <div class="login-form">
          <div>
            <label>Email</label>
            <input name="email" placeholder="Email" id="email" />
          </div>
          <div>
            <label>Password</label>
            <input name="password" placeholder="Password" id="password" />
          </div>
          <button onclick="register()" class="submit-btn" type="submit">
            Submit
          </button>
        </div>
      </body>
    </>
  );
}
