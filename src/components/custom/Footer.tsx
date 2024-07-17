import { ArrowUpRight } from "lucide-react";
import { Button } from "../ui/button";

function Footer() {
  return (
    <footer className="w-full p-8 flex flex-col gap-16 justify-between lg:flex-row md:gap-24 bg-slate-100">
      <div className="flex flex-col">
        <img
          src="assets/branding/svg-gowander-logo-full-flex-dark.svg"
          alt="AI Travel Planner - GoWander"
          className="object-contain max-w-56 mb-8"
        />
        <p className="text-slate-600 text-lg">
          &copy; 2024 GoWander AI. All Rights Reserved
        </p>
        <p className="text-sm text-slate-500">
          Built and Maintained by{" "}
          <a
            className="underline hover:opacity-60"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/russelshane"
          >
            Darsler Fortes
          </a>
        </p>

        <p className="text-sm text-slate-600 mb-2 mt-8">POWERED BY</p>
        <img
          src="/gemini-google-ai-logo.svg"
          alt="Google Gemini AI"
          className="object-contain max-w-24"
        />
      </div>
      <div className="max-w-48">
        <ul className="gap-2 flex flex-col text-lg font-light text-slate-500">
          <li className="hover:text-orange-400 underline cursor-pointer">
            Privacy
          </li>
          <li className="hover:text-orange-400 underline cursor-pointer">
            Terms of Use
          </li>
          <li className="hover:text-orange-400 underline cursor-pointer">
            Cookies
          </li>
          <li className="hover:text-orange-400 underline cursor-pointer">
            EU and UK Data Protection Notice
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-sm text-slate-600">VIEW PROJECT ON GITHUB</p>
        <Button size="default">
          Check Repository
          <ArrowUpRight className="ml-2" />
        </Button>
        <a
          href="https://github.com/russelshane/gowander"
          target="_blank"
          rel="noreferrer"
          className="text-slate-600 font-medium hover:text-orange-400"
        >
          github.com/russelshane/gowander
        </a>
        <div className="border-t-2 border-slate-200 py-6 mt-6">
          <p className="text-sm text-slate-600 mb-2">DEVELOPER EMAIL</p>
          <a
            href="https://github.com/russelshane/gowander"
            target="_blank"
            rel="noreferrer"
            className="text-orange-400 font-medium text-xl hover:text-blue-400"
          >
            hello@darsler.com
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
