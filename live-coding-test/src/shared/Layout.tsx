import Header from "./Header";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
      <>
        <Header />
        <main className="flex justify-center p-4">
          <div>{children}</div>
        </main>
      </>
    );
}