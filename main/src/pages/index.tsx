import { useEffect } from 'react';
import { loadMicroApp } from 'qiankun';

export default function HomePage() {
  useEffect(() => {
    const a = loadMicroApp({
      name: 'app-a',
      entry: 'https://chiaweilee.github.io/qiankun-demo/a/',
      container: '#app-a',
    });
    const b = loadMicroApp({
      name: 'app-b',
      entry: 'https://chiaweilee.github.io/qiankun-demo/b/',
      container: '#app-b',
    });
    console.log(a.mount());
    console.log(b.mount());
  }, []);
  return (
    <div>
      <h2>Hello, Case!</h2>
      <div>
        <div id="app-a"></div>
        <div id="app-b"></div>
      </div>
    </div>
  );
}
