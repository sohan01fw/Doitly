"use client";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useEffect, useLayoutEffect, useState } from "react";

export default function auth() {
  const handleAuth = () => {
    const redirectURL = "http://localhost:3000/dashboard";
    const res = account.createOAuth2Session("google", redirectURL);
  };
  const router = useRouter();
  const [loading, setLoading] = useState(true); // Add a loading state
  const authToken = Cookies.get("user_id");

  useEffect(() => {
    // Replace "user_id" with your cookie name
    if (authToken) {
      router.push("/"); // Redirect to login page if the required cookie is not present
    } else {
      setLoading(false); // Set loading to false once the authentication check is complete
    }
  }, [router, authToken]);

  // Render loading indicator or blank screen while checking authentication status
  if (loading) {
    return null; // You can customize this loading indicator as per your UI
  }
  return (
    <div>
      <button className="btn" onClick={handleAuth}>
        signtoGoggle
      </button>
    </div>
  );
}
