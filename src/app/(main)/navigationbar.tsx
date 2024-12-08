"use client";
import Image from "next/image";
import logo from "../assets/logo.png";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { CreditCard } from "lucide-react";
import ThemeToggle from "@/components/theme-toggle";
import { dark } from "@clerk/themes";
import { useTheme } from "next-themes";

export default function Navigationbar() {
  const { theme } = useTheme();

  return (
    <header className="shadow-sm">
      <div className="max-w-7x1 mx-auto p-3 flex items-center justify-between gap-3">
        <Link href="/resumes" className="flex items-center gap-2">
          <Image
            src={logo}
            alt="logo"
            width={35}
            height={35}
            className="rounded-full"
            priority // Add this if the image is critical for layout
          />
          <span className="text-xl font-bold tracking-tight">
            AI resume builder
          </span>
        </Link>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <UserButton
            appearance={{
              baseTheme: theme === "dark" ? dark : undefined,
              elements: {
                avatarBox: {
                  width: 35,
                  height: 35,
                },
              },
            }}
          >
            <UserButton.MenuItems>
              <UserButton.Link
                label="Billing"
                labelIcon={<CreditCard className="size-4" />}
                href="/billing"
              />
            </UserButton.MenuItems>
          </UserButton>
        </div>
      </div>
    </header>
  );
}
