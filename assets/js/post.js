/**
 * Main JS file for GhostFrame behaviours
 */

document.onreadystatechange = function() {
  if (document.readyState === 'complete') {
    const main_image = document.querySelectorAll('img[alt="main-image"]');
    const article = document.querySelectorAll("article");
    if (!main_image.length) {
      article[0].className = "no-main";
    } else {
      const background_src = main_image[0].src;
      const header = document.querySelectorAll(".post-head");
      const content = document.querySelectorAll(".post-content");
      const first_paragraph = document.querySelectorAll(".post-content p")[0];

      const background = new Image();
      background.src = background_src;
      background.onload = function() {
        main_image[0].remove();
        article[0].className += " main";
        header[0].style.backgroundImage = 'url(' + background_src + ')';
        if (first_paragraph.innerHTML === "") {
          first_paragraph.remove();
        }
        // if ($(first_paragraph).length && $(first_paragraph).text() === "" && !$(first_paragraph).children().length) {
        //   $(first_paragraph).remove();
        // }
      }
    }
  }
}
