<script>
  import { MetaTags } from "svelte-meta-tags";
  import { PUBLIC_SITE_URL } from "$env/static/public";

  export let title;
  export let description;
  export let href;

  $: metaTags = {
    title: "Tobamaru Project Team",
    titleTemplate: href !== "/" ? `${title} | Tobamaru Project Team` : "Tobamaru Project Team",
    description: description,
    canonical: `${PUBLIC_SITE_URL}${href}`,
    robots: "noindex",
    openGraph: {
      url: `${PUBLIC_SITE_URL}${href}`,
      title: href !== "/" ? `${title} | Tobamaru Project Team` : "Tobamaru Project Team",
      description: description,
      images: [
        {
          url: `${PUBLIC_SITE_URL}/x-header.webp`,
          width: 1500,
          height: 500,
          alt: "Xヘッダー"
        }
      ],
      siteName: "Tobamaru Project Team"
    },
    twitter: {
      handle: "@3rdTOBAMARUprg",
      site: "@3rdTOBAMARUprg",
      cardType: "summary_large_image",
      title: href !== "/" ? `${title} | Tobamaru Project Team` : "Tobamaru Project Team",
      description: description,
      image: `${PUBLIC_SITE_URL}/x-header.webp`,
      imageAlt: "Xヘッダー"
    }
  };
</script>

<MetaTags {...metaTags} />
