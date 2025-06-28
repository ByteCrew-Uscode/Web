import { Stack } from "./stackflow";

export default function App() {
  return (
    <div className="size-screen">
      <div className="scrollbar-hide container-mobile fixed inset-0 overflow-hidden">
        <Stack />
      </div>
    </div>
  );
}
