import { useEffect, useRef } from "react";
import { loadMicroApp } from "qiankun";
// @ts-ignore
import RemoteButton from "remoteComponent/Button";
// @ts-ignore
import RemotePage from "remoteComponent/Page";

console.log("RemotePage", RemotePage);

export default function DemoPage() {
  const subRef = useRef(null);

  useEffect(() => {
    const microApp = loadMicroApp({
      name: "app1",
      entry: "//localhost:3001",
      // @ts-ignore
      container: subRef.current,
    });
    return () => {
      microApp.unmount();
    };
  }, []);

  return (
    <div>
      <h2>This is the main repo</h2>
      <div
        ref={subRef}
        style={{ width: "500px", height: "200px", background: "#999" }}
      />
      <div>
        <RemoteButton />
        <div style={{ width: "500px", height: "200px", background: "#999" }}>
          <RemotePage />
        </div>
      </div>
      <div>
        <a href="http://localhost:3001/" target="_blank">
          open sub
        </a>
      </div>
      <div>
        <a href="http://localhost:3002/" target="_blank">
          open mf
        </a>
      </div>
    </div>
  );
}
