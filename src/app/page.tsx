export const runtime = 'edge';

export default function Home() {
  // Server Action
  async function helloWorld() {
    'use server';

    console.log('hello world');
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <form action={helloWorld}>
        <button
          type="submit"
          className="bg-slate-600 border border-slate-300 rounded-lg p-3 hover:bg-slate-500"
        >
          Hello World
        </button>
      </form>
    </main>
  );
}
