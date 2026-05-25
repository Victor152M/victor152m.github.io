const btn = document.getElementById("menu-toggle");
const nav = document.getElementById("mobile-nav");
const openIcon = document.getElementById("menu-open");
const closeIcon = document.getElementById("menu-close");

if (btn && nav) {
    btn.addEventListener("click", function () {
        const isHidden = nav.classList.contains("hidden");
        nav.classList.toggle("hidden", !isHidden);
        btn.setAttribute("aria-expanded", String(isHidden));
        if (isHidden) {
            openIcon.classList.add("hidden");
            closeIcon.classList.remove("hidden");
        } else {
            openIcon.classList.remove("hidden");
            closeIcon.classList.add("hidden");
        }
    });
    // Close when clicking outside
    document.addEventListener("click", function (e) {
        if (!nav.contains(e.target) && !btn.contains(e.target)) {
            if (!nav.classList.contains("hidden")) {
                nav.classList.add("hidden");
                btn.setAttribute("aria-expanded", "false");
                openIcon.classList.remove("hidden");
                closeIcon.classList.add("hidden");
            }
        }
    });
}
