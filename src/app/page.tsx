import Header from "@/components/layout/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold">Welcome to the Home Page</h1>
      </main>
    </div>
  );
}
