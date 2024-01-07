import { useEffect, useRef } from "react";
import { loadMicroApp } from "qiankun";

export default function DemoPage() {
  const subRef = useRef(null);

  useEffect(() => {
    const microApp = loadMicroApp({
      name: "app1",
      entry: "//localhost:3001",
      container: subRef.current,
    });
    return () => {
      microApp.unmount();
    };
  }, []);

  return (
    <div>
      <h2>Welcome to Qiankun Monorepo Demo!</h2>
      <div ref={subRef} style={{ width: '500px', height: '200px', background: '#999' }} />
    </div>
  );
}
