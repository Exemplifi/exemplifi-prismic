import Link from "next/link";
import { PrismicProvider } from "@prismicio/react";
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "../../prismicio";

import "router/styles/globals.css";

export default function App({ Component, pageProps }) {
  <PrismicProvider internalLinkComponent={(props) => <Link {...props} />}>
    <PrismicPreview repositoryName={repositoryName}>
      return <Component {...pageProps} />
    </PrismicPreview>
  </PrismicProvider>;
}
