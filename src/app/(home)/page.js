import Demo from "@/Components/Demo/Demo";
import HomePage from "@/Components/Home/HomePage";
var Sniffr = require("sniffr").default;
import { NextResponse, userAgent } from "next/server";

export default function Home() {
  var ip = require("ip");

  return (
    <main>
      <>
        <Demo />
        <HomePage />
      </>
    </main>
  );
}
