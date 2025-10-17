import { Link } from "wouter";
import { Instagram, Facebook, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card border-t border-card-border mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-serif text-xl font-bold text-foreground mb-4" data-testid="text-footer-brand">
              Cassava Flour Co.
            </h3>
            <p className="text-muted-foreground text-sm" data-testid="text-footer-tagline">
              Premium artisan cassava flour, sustainably sourced and traditionally processed.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4" data-testid="text-footer-shop-title">Shop</h4>
            <ul className="space-y-2">
              <li><Link href="/shop"><a className="text-muted-foreground hover:text-foreground text-sm" data-testid="link-footer-products">Products</a></Link></li>
              <li><Link href="/premium"><a className="text-muted-foreground hover:text-foreground text-sm" data-testid="link-footer-premium">Premium Bulk</a></Link></li>
              <li><Link href="/recipes"><a className="text-muted-foreground hover:text-foreground text-sm" data-testid="link-footer-recipes">Recipes</a></Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4" data-testid="text-footer-about-title">About</h4>
            <ul className="space-y-2">
              <li><Link href="/process"><a className="text-muted-foreground hover:text-foreground text-sm" data-testid="link-footer-process">Our Process</a></Link></li>
              <li><Link href="/sustainability"><a className="text-muted-foreground hover:text-foreground text-sm" data-testid="link-footer-sustainability">Sustainability</a></Link></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground text-sm" data-testid="link-footer-contact">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4" data-testid="text-footer-connect-title">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-foreground" data-testid="link-social-instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground" data-testid="link-social-facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground" data-testid="link-social-twitter">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm" data-testid="text-footer-copyright">
            © 2024 Cassava Flour Co. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
