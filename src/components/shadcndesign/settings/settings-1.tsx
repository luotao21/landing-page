"use client";

import { Logo } from "@/components/logo";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Menu, Zap, Search, Terminal, X, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function Navbar2() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Mobile top bar component
  const MobileTopBar = () => (
    <div
      className={`bg-background flex items-center justify-between px-4 h-14 ${
        !isMenuOpen ? "border-b border-border" : ""
      }`}
    >
      {/* Mobile menu toggle button */}
      <Button
        variant="ghost"
        onClick={toggleMenu}
        className="relative flex items-center justify-center h-9 w-9 -ml-2 [&_svg]:size-5"
      >
        <span
          className={`absolute transition-all duration-300 ${
            isMenuOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0"
          }`}
        >
          <Menu />
        </span>
        <span
          className={`absolute transition-all duration-300 ${
            isMenuOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"
          }`}
        >
          <X />
        </span>
      </Button>

      {/* Logo */}
      <Logo className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8" />

      {/* Mobile upgrade button */}
      <div className="flex items-center gap-3 absolute right-4">
        <Button className="h-9 w-9 p-0 [&_svg]:size-5">
          <Zap />
        </Button>
      </div>
    </div>
  );

  // Navigation items component
  const NavItems = ({ isMobile = false }) => {
    const linkClasses = `font-medium ${isMobile ? "text-base" : "text-sm"} ${
      isMobile
        ? "text-muted-foreground"
        : "text-muted-foreground hover:bg-primary/5"
    } px-3 py-2 rounded-md`;

    return (
      <>
        {/* Main navigation links */}
        <Link href="#" className={linkClasses}>
          Dashboard
        </Link>
        <Link href="#" className={linkClasses}>
          Orders
        </Link>
        <Link href="#" className={linkClasses}>
          Products
        </Link>
        <Link href="#" className={linkClasses}>
          Customers
        </Link>
        <Link href="#" className={`${linkClasses} text-primary`}>
          Settings
        </Link>
      </>
    );
  };

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="h-16 bg-background border-b border-border shadow-sm hidden lg:block">
        <div className="container mx-auto flex items-center justify-between px-6 h-full">
          {/* Left section: Logo */}
          <div className="flex items-center gap-x-4">
            <Logo />
          </div>
          {/* Right section: user menu and button */}
          <div className="flex items-center gap-x-4">
            <div className="flex items-center gap-x-1">
              <NavItems />
            </div>
            <Button>
              <Zap className="h-4 w-4" /> Upgrade
            </Button>
            {/* User menu dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar className="cursor-pointer">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>My Profile</DropdownMenuItem>
                <DropdownMenuItem>Account</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <Separator className="my-1" />
                <DropdownMenuItem>Sign Out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            {/* New item button */}
          </div>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="lg:hidden">
        <MobileTopBar />
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="bg-background lg:hidden border-b border-border">
          <div className="flex flex-col">
            {/* Mobile menu content */}
            <div className="flex-grow overflow-y-auto p-2">
              <div className="flex flex-col">
                <NavItems isMobile={true} />
              </div>
            </div>
            <Separator />
            {/* Mobile user profile section */}
            <div className="p-2">
              {/* User info */}
              <div className="flex items-center space-x-3 p-2">
                <Avatar>
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">John Doe</p>
                  <p className="text-sm text-muted-foreground">
                    hi@shadcndesign.com
                  </p>
                </div>
              </div>
              {/* User-related links */}
              <div>
                <Link
                  href="#"
                  className="block font-medium text-muted-foreground px-2 py-2 rounded-md"
                >
                  My profile
                </Link>
                <Link
                  href="#"
                  className="block font-medium text-muted-foreground px-2 py-2 rounded-md"
                >
                  Account settings
                </Link>
                <Link
                  href="#"
                  className="block font-medium text-muted-foreground px-2 py-2 rounded-md"
                >
                  Billing
                </Link>
                <Link
                  href="#"
                  className="block font-medium text-muted-foreground px-2 py-2 rounded-md"
                >
                  Sign out
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export function Settings1() {
  return (
    <div className="min-h-screen bg-secondary">
      {/* Use the inline Navbar component */}
      <Navbar2 />
      <div className="bg-background border-b border-border">
        <div className="container mx-auto px-4 md:px-6 py-4 md:py-6 flex flex-col ">
          {/* Main content */}
          <div className="flex justify-between md:items-center gap-3 md:flex-row flex-col">
            <div className="space-y-2">
              <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
                Settings
              </h1>
            </div>
            {/* Search */}
            <div className="relative md:max-w-xs w-full">
              <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input type="search" placeholder="Search" className="pl-8" />
            </div>
            {/* Mobile-only dropdown */}
            <div className="md:hidden">
              <Select defaultValue="billing">
                <SelectTrigger>
                  <SelectValue placeholder="Select setting" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="profile">Profile</SelectItem>
                  <SelectItem value="account">Account</SelectItem>
                  <SelectItem value="members">Members</SelectItem>
                  <SelectItem value="billing">Billing</SelectItem>
                  <SelectItem value="invoices">Invoices</SelectItem>
                  <SelectItem value="api">API</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row">
          {/* Sidebar - hidden on mobile, no border */}
          <aside className="hidden md:block w-64 py-6 pr-6">
            <ul className="space-y-1 -ml-3">
              <li className="hover:bg-accent-foreground/10 rounded-md px-3 py-2 text-sm text-muted-foreground font-medium cursor-pointer">
                <a>
                  Profile
                </a>
              </li>
              <li className="hover:bg-accent-foreground/10 rounded-md px-3 py-2 text-sm text-muted-foreground font-medium cursor-pointer">
                <a>
                  Account
                </a>
              </li>
              <li className="hover:bg-accent-foreground/10 rounded-md px-3 py-2 text-sm text-muted-foreground font-medium cursor-pointer">
                <a>
                  Members
                </a>
              </li>
              <li className="hover:bg-accent-foreg bg-accent-foreground/5 rounded-md px-3 py-2 text-sm text-accent-foreground font-medium cursor-pointer">
                <a>
                  Billing
                </a>
              </li>
              <li className="hover:bg-accent-foreground/10 rounded-md px-3 py-2 text-sm text-muted-foreground font-medium cursor-pointer">
                <a>
                  Invoices
                </a>
              </li>
              <li className="hover:bg-accent-foreground/10 rounded-md px-3 py-2 text-sm text-muted-foreground font-medium cursor-pointer">
                <a>
                  API
                </a>
              </li>
            </ul>
          </aside>

          {/* Main content */}
          <main className="flex-1 py-4 md:py-6">
            <Card className="mb-4 bg-primary text-primary-foreground">
              <CardContent className="flex flex-col md:flex-row justify-between items-start md:items-center p-4 md:p-6">
                <div className="mb-4 md:mb-0">
                  <div className="flex items-center gap-2">
                    <Terminal className="h-5 w-5" />
                    <h3 className="font-semibold">You're using free plan</h3>
                  </div>
                  <p className="text-sm mt-1 text-primary-foreground/80">
                    You can add components to your app by upgrading to the next
                    plan.
                  </p>
                </div>
                <Button variant="secondary" className="md:w-auto w-full">
                  View plans
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Card details section */}
            <Card className="mb-4">
              <CardHeader className="pt-4 md:pt-6 pb-0 px-4 md:px-6">
                <CardTitle className="text-xl">Card details</CardTitle>
                <p className="text-sm text-muted-foreground">
                  View and update your card details here.
                </p>
              </CardHeader>
              <CardContent className="p-4 md:p-6">
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="nameOnCard">Name on card</Label>
                      <Input id="nameOnCard" value="Kathy Pacheco" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cardNumber">Card number</Label>
                      <Input id="cardNumber" value="1414 1412 4141 1422" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="expiry">Expiry</Label>
                      <Input id="expiry" value="05/2025" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cvv">CVV</Label>
                      <Input id="cvv" value="***" type="password" />
                    </div>
                  </div>
                </form>
              </CardContent>
              <CardFooter className="flex justify-end border-t py-4 px-4 md:px-6">
                <Button>Save</Button>
              </CardFooter>
            </Card>

            {/* Client details section */}
            <Card>
              <CardHeader className="pt-4 md:pt-6 pb-0 px-4 md:px-6">
                <CardTitle className="text-xl">Client details</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Update personal information.
                </p>
              </CardHeader>
              <CardContent className="p-4 md:p-6">
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="clientName">Client name</Label>
                      <Input id="clientName" value="Kathy Pacheco" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="emailAddress">Email address</Label>
                      <Input
                        id="emailAddress"
                        type="email"
                        value="kathy_pacheco@mail.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="country">Country</Label>
                      <Select defaultValue="US">
                        <SelectTrigger>
                          <SelectValue placeholder="Select a country" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="US">United States</SelectItem>
                          {/* Add more countries as needed */}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="streetAddress">Street address</Label>
                      <Input
                        id="streetAddress"
                        value="2825 Winding Way, Providence, RI 02908"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="city">City</Label>
                      <Input id="city" value="Providence" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="state">State</Label>
                      <Select defaultValue="RI">
                        <SelectTrigger>
                          <SelectValue placeholder="Select a state" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="RI">Rhode Island</SelectItem>
                          {/* Add more states as needed */}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </form>
              </CardContent>
              <CardFooter className="flex justify-end border-t py-4 px-4 md:px-6">
                <Button>Save</Button>
              </CardFooter>
            </Card>
          </main>
        </div>
      </div>
    </div>
  );
}
