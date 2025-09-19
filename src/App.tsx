import GeneratedComponent from "./GeneratedComponent";

export default function App() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",          // if unsure, temporarily try "100vh"
        background: "transparent",
        borderRadius: "37px",
        overflow: "hidden",      // clip shader to fixed corners
      }}
    >
      <GeneratedComponent />
    </div>
  );
}
