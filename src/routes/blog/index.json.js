import posts from "./_posts.js";

const contents = JSON.stringify(
  posts.map((post) => {
    return {
      title: post.title,
      description: post.description,
      slug: post.slug,
      bannerImg: post.bannerImg,
      bannerTitleCol: post.bannerTitleCol,
    };
  })
);

export function get(req, res) {
  res.writeHead(200, {
    "Content-Type": "application/json",
  });

  res.end(contents);
}
