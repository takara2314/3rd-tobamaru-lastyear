import * as sitemap from "super-sitemap";

export const GET = async () => {
  return await sitemap.response({
    origin: "https://3rd-tobamaru-lastyear.vercel.app"
  });
};
