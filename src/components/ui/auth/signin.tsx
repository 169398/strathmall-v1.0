"use client";
import React, { useState, useTransition } from "react";
import Social from "./social";
import Image from "next/image";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/src/components/ui/form";
import { Input } from "@/src/components/ui/input";
import { cn } from "@/src/lib/utils";
import Link from "next/link";
import { Button } from "../button";

const FormSchema = z.object({
	email: z.string().email({ message: "Invalid Email Address" }),
	password: z.string().min(6, { message: "Password is too short" }),
});

export default function SignIn() {
	return (
		<div className="w-full sm:w-[26rem] shadow sm:p-5  border dark:border-zinc-800 rounded-md">
			<div className="p-5 space-y-5">
				<div className="text-center space-y-3">
					<Image
						src={"/supabase.png"}
						alt="supabase logo"
						width={50}
						height={50}
						className=" rounded-full mx-auto"
					/>
					<h1 className="font-bold">Sign in to SupaAuth</h1>
					<p className="text-sm">
						Welcome back! Please sign in to continue
					</p>
				</div>
				<Social redirectTo={"/"} />
				<div className="flex items-center gap-5">
					<div className="flex-1 h-[0.5px] w-full bg-zinc-400 dark:bg-zinc-800"></div>
					<div className="text-sm">or</div>
					<div className="flex-1 h-[0.5px] w-full bg-zinc-400 dark:bg-zinc-800"></div>
				</div>
				<SignInForm redirectTo={"/"} />
			</div>
		</div>
	);
}

export function SignInForm({ redirectTo }: { redirectTo: string }) {
	const [passwordReveal, setPasswordReveal] = useState(false);

	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	function onSubmit(data: z.infer<typeof FormSchema>) {}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel className=" font-semibold  test-sm">
								Email Address
							</FormLabel>
							<FormControl>
								<Input
									className="h-8"
									placeholder="example@gmail.com"
									type="email"
									{...field}
								/>
							</FormControl>
							<FormMessage className="text-red-500" />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="password"
					render={({ field }) => (
						<FormItem>
							<FormLabel className="text-sm font-semibold">
								Password
							</FormLabel>
							<FormControl>
								<div className=" relative">
									<Input
										className="h-8"
										type={
											passwordReveal ? "text" : "password"
										}
										{...field}
									/>
									<div
										className="absolute right-2 top-[30%] cursor-pointer group"
										onClick={() =>
											setPasswordReveal(!passwordReveal)
										}
									>
										{passwordReveal ? (
											<FaRegEye className=" group-hover:scale-105 transition-all" />
										) : (
											<FaRegEyeSlash className=" group-hover:scale-105 transition-all" />
										)}
									</div>
								</div>
							</FormControl>
							<FormMessage className="text-red-500" />
						</FormItem>
					)}
				/>
				<Button
					type="submit"
					className="w-full h-8 bg-indigo-500 hover:bg-indigo-600 transition-all text-white flex items-center gap-2"
				>
					Continue
				</Button>
			</form>
			<div className="text-center text-sm">
				<h1>
					Doest not have account yet?{" "}
					<Link
						href={
							redirectTo
								? `/register?next=` + redirectTo
								: "/register"
						}
						className="text-blue-400"
					>
						Register
					</Link>
				</h1>
			</div>
		</Form>
	);
}
