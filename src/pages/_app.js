import "@/styles/globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

function App({ Component, pageProps }) {
  return (
    <main className="w-4/5 mx-auto border pt-24 " style={{ marginTop: "150px" }}>
      <Navbar />
      <Component {...pageProps} />

    </main>
  );
}

export default App;
