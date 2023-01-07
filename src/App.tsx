import { Link, Route } from "wouter";
import Counter from "./Counter";
import Todo from "./Todo";

export default function App() {
  return (
    <>
      <Route path="/">
        <Link href="/">Home</Link>
        <Link href="/counter">Counter</Link>
        <Link href="/todo">Todo</Link>
      </Route>
      <Route path="/counter" component={Counter} />
      <Route path="/todo" component={Todo} />
    </>
  );
}
