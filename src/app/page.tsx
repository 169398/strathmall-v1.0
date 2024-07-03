
import Link from "next/link";
import React from "react";
import Navbar from "../components/Navbar";

export default function page() {
	return (
		<div className="p-5 flex items-center justify-center h-screen flex-col">
			<h1 className="text-4xl">Welcome to StrathMall</h1>
<Navbar />
		</div>
	);
}
