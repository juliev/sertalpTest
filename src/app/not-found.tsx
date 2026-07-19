import { NotFoundRedirect } from "@/components/not-found-redirect";
import { getDictionary } from "@/i18n/get-dictionary";

export default function NotFound() {
  return <NotFoundRedirect {...getDictionary().global.notFound} />;
}
