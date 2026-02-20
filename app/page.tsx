import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen bg-blue-50 flex flex-col justify-between">
      <header className="w-full flex justify-between items-center px-8 py-5 shadow-md">
        <div className="text-xl font-bold">Xianyuan Bao</div>
        <nav>
          <ul className="flex">
            <li className="ml-6">
              <a href="https://cv.baoxianyuan.cn/">CV</a>
            </li>
            <li className="ml-6">
              <a href="https://blog.baoxianyuan.cn/">Blog</a>
            </li>
            <li className="ml-6">
              <a href="https://github.com/baoxianyuan/">Github</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <h1 className="text-6xl font-normal text-center mb-12" style={{ fontFamily:'pacifico'}}>👋Hello</h1>
        <h2 className="text-5xl font-bold text-center mb-8">I'm <span className="bg-blue-300 rounded-xl px-2.5 py-1.5">Xianyuan</span></h2>
      </main>
      <footer className="p-5">
        <p className="text-center">Copyright © 2026 <a href="https://www.baoxianyuan.cn/">baoxianyuan.cn</a>. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
