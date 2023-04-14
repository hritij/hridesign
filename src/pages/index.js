import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";

import logo from "../assets/hri_white.jpg";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <nav className="flex justify-around">
      <Image src={logo} width={100} />
      <div className="w-1/2">
        <div className="flex justify-around flex-grow">
          <div>Design gallery</div>
          <div>Services</div>
          <div>About Us</div>
        </div>
      </div>
      <div>
        <button className="px-2 py-3 bg-red-400 text-white rounded-md hover:bg-red-600">
          Get Free Quote
        </button>
      </div>
    </nav>
  );
}
