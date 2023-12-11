
export const revalidate = 60 * 60 * 24; // 24 hours
export default async function Home() {
  return (
    <main>
      <h1>You are home, bro.</h1>
    </main>
  );
}
