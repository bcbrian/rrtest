import type { Route } from "./+types/login";

export function loader({ context }: Route.LoaderArgs) {
  return { message: context.VALUE_FROM_NETLIFY };
}

export async function action({ request }: Route.ActionArgs) {
  // const formData = await request.formData();
  // const username = formData.get("username");
  // const password = formData.get("password");
  console.log("test");
  return null;
}

export default function Login({ loaderData }: Route.ComponentProps) {
  console.log(loaderData);
  return (
    <div>
      <h1>Login</h1>
      <form action="/login" method="post">
        <input type="text" name="username" />
        <input type="password" name="password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
