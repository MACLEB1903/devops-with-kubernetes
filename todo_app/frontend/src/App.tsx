import BgImage from "../components/BgImage";
import Hero from "../components/Hero";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

export default function App() {
  return (
    <>
      <BgImage />
      <section className="w-full h-screen absolute z-100 flex flex-col items-center justify-center gap-12 xl:gap-18 2xl:gap-24 text-white">
        <Hero />
        <TodoForm />
        <TodoList />
      </section>
    </>
  );
}
