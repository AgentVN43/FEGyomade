
import GenerateSitemap from "react-router-sitemap-maker";
import Routes from "../routes/index";

const sitemapData = await GenerateSitemap(Routes(), {
	baseUrl: "https://gyomade.vn",
	hashrouting: true,
	changeFrequency: "monthly"
});

sitemapData.toFile("./build/sitemap.xml");