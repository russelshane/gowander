import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link } from "react-router-dom";

function Notice() {
  /**
   * Update localStorage if user has already clicked on
   * 'Continue' on first website visit.
   */
  const [noticeHidden, setNoticeHidden] = useState(false);
  const showNotice = localStorage.getItem("cookie-notice");

  function handleCookieNotice() {
    localStorage.setItem("cookie-notice", "continue");
  }

  return (
    <>
      {!showNotice && (
        <div
          className={`${
            noticeHidden ? "hidden" : "visible"
          } w-full fixed bottom-0 left-0 right-0 bg-blue-500 p-6 flex flex-col justify-between gap-4 border-t-4 border-orange-400 md:flex-row`}
        >
          <div className="flex flex-col max-w-3xl">
            <p className="text-slate-100">
              This website uses cookies to ensure you get the best experience on
              our website. By continuing to browse the site, you are agreeing to
              our use of cookies. For more information, please see our{" "}
              <Link className="underline" to="/help/privacy">
                Cookie Policy
              </Link>
              .
            </p>
          </div>
          <Button
            onClick={() => {
              handleCookieNotice();
              setNoticeHidden(true);
            }}
            size="lg"
            className="bg-orange-400"
          >
            Continue
          </Button>
        </div>
      )}
    </>
  );
}

export default Notice;
