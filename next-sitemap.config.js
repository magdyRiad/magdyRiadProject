/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://magdyriad.net", // استبدل ده بالدومين بتاع موقعك
  generateRobotsTxt: true,
  exclude: ["/_next", "/static"], // استبعاد المجلدات دي من الـ Sitemap
  // الصفحات اللي بتبدأ بـ _ أو فيها [ ] مش هتتضاف تلقائيًا، فمش محتاجين نضيفها هنا إلا لو عايزين نعاملها بشكل خاص
  // robotsTxtOptions: {
  //   additionalSitemaps: [`${process.env.SITE_URL}/server-sitemap.xml`],
  // },
  // ممكن نضيف هنا إعدادات تانية لو محتاجين نغير حاجة في طريقة توليد الـ URLs أو نضيف حقول زيادة
};
