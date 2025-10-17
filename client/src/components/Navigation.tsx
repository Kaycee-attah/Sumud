import { Link } from "wouter";
import { ShoppingCart, Moon, Sun, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "./ThemeProvider";
import { useState } from "react";

export function Navigation() {
  const { theme, toggleTheme } = useTheme();
  const [cartCount] = useState(0); //todo: remove mock functionality
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/shop", label: "Shop" },
    { href: "/process", label: "Process" },
    { href: "/recipes", label: "Recipes" },
    { href: "/premium", label: "Premium" },
    { href: "/sustainability", label: "Sustainability" },
  ];

  return (
    <nav className="sticky top-0 z-50 glass-card rounded-none border-0 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          <Link href="/" className="flex items-center gap-2">
            <span className="font-serif text-xl font-bold text-foreground" data-testid="text-brand">
              Cassava Flour Co.
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <a className="text-foreground hover-elevate px-3 py-2 rounded-md text-sm font-medium" data-testid={`link-${link.label.toLowerCase()}`}>
                  {link.label}
                </a>
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <Button
              size="icon"
              variant="ghost"
              onClick={toggleTheme}
              data-testid="button-theme-toggle"
            >
              {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </Button>

            <Link href="/cart">
              <a>
                <Button size="icon" variant="ghost" className="relative" data-testid="button-cart">
                  <ShoppingCart className="h-5 w-5" />
                  {cartCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground rounded-full w-5 h-5 text-xs flex items-center justify-center" data-testid="text-cart-count">
                      {cartCount}
                    </span>
                  )}
                </Button>
              </a>
            </Link>

            <Button
              size="icon"
              variant="ghost"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <a
                  className="block px-3 py-2 text-foreground hover-elevate rounded-md text-sm font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid={`link-mobile-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </a>
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
