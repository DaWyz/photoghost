/**
 * Main JS file for GhostFrame behaviours
 */

document.onreadystatechange = function() {
  if (document.readyState === 'complete') {
    document.querySelectorAll(".tag-photos").forEach(article => {
      const img =  article.querySelectorAll(".content-temp img:first-of-type");
      const background_src = img[0].src;

      const temp_content = article.querySelectorAll(".content-temp");

      const background = new Image();
      background.src = background_src;
      background.onload = function() {
        temp_content[0].remove();
        article.className += ' article-cover';
        article.style.backgroundImage = 'url(' + background_src + ')';
      }
    });
  }
}
