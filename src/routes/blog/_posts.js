// Ordinarily, you'd generate this data from markdown files in your
// repo, or fetch them from a database of some kind. But in order to
// avoid unnecessary dependencies in the starter template, and in the
// service of obviousness, we're just going to leave it here.

// This file is called `_posts.js` rather than `posts.js`, because
// we don't want to create an `/blog/posts` route — the leading
// underscore tells Sapper not to do that.

const fs = require("fs");
const fm = require("front-matter");
const marked = require("marked");

const dir = "src/data/blogposts";
const files = fs.readdirSync(dir);

const posts = [];
for (let i = 0; i < files.length; i++) {
  const content = fs.readFileSync(`${dir}/${files[i]}`, { encoding: "utf-8" });
  // Use the front-matter library to separate the body from the front matter
  const { body, ...frontMatter } = fm(content);
  // Use the marked library to turn markdown into html
  const html = marked(body);
  posts.push({ html, ...frontMatter.attributes });
}

export default posts;
