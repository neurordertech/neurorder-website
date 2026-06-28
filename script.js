<script>
function enterWebsite() {
  document.body.classList.add("entered");

  document.getElementById("entry-screen").style.display = "none";

  document.getElementById("site-content").style.display = "block";
}

function toggleMenu() {
  const menu = document.getElementById("navigation-panel");
  const button = document.getElementById("menu-button");

  menu.classList.toggle("open");
  button.classList.toggle("active");
}
</script>

function filterNews() {
  const selected = document.getElementById("newsFilter").value;
  const posts = document.querySelectorAll(".news-post");

  posts.forEach(post => {
    if (selected === "all" || post.dataset.source === selected) {
      post.style.display = "block";
    } else {
      post.style.display = "none";
    }
  });
}