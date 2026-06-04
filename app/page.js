// This root page is only reached if middleware is bypassed (e.g. static export).
// The middleware normally redirects / → /en or /es.
import { redirect } from "next/navigation";

export default function RootPage() {
  redirect("/en");
}
