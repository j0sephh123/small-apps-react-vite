import { Link, Route } from "wouter";
import Counter from "./Counter";

export default function App() {
  return (
    <>
      <Route path="/">
        <Link href="/">Home</Link>
        <Link href="/counter">Counter</Link>
      </Route>
      <Route path="/counter" component={Counter} />
    </>
  );
}
