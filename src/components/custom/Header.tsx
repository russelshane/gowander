import { Button } from "@/components/ui/button";

function Header() {
  return (
    <header className="w-full shadow-sm p-8 flex justify-between items-center backdrop-blur-md bg-white/30 sticky top-0 z-10">
      <a href="/">
        <img
          className="object-contain max-w-52 md:max-w-60"
          src={`/assets/branding/svg-gowander-logo-full-flex-dark.svg`}
          alt="GoWander"
        />
      </a>
      <Button size="lg">Sign In</Button>
    </header>
  );
}

export default Header;
