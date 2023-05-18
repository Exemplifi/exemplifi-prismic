import { SliceZone } from "@prismicio/react";

import { createClient } from "../../prismicio";
import { components } from "../../slices";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Page({ page }) {
  return <SliceZone slices={page.data.slices} components={components} />;
}

export async function getStaticProps() {
  const client = createClient();

  const page = await client.getSingle("homepage");

  return {
    props: {
      page,
    },
  };
}
