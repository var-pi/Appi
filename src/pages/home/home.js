export default async function () {
  const articlePreview = document.getElementById("article-preview");

  articlePreview.innerHTML = await (
    await fetch("/src/pages/tutorial/tutorial.html")
  ).text();
}

