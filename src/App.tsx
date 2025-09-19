import GeneratedComponent from "./GeneratedComponent";

export default function App() {
  return (
    <div
      style={{
        display: "grid",
        placeItems: "center",
        minHeight: "100vh",
        background: "transparent",   // ⬅ change this
      }}
    >
      <GeneratedComponent />
    </div>
  );
}
