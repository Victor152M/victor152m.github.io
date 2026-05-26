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

function openPopup(popupId) {
    const popup = document.getElementById(`popup-${popupId}`);
    if (popup) {
        popup.classList.remove("hidden");
        document.body.classList.add("overflow-hidden");
    }
}

function closePopup(popupId) {
    const popup = document.getElementById(`popup-${popupId}`);
    if (popup) {
        popup.classList.add("hidden");
        document.body.classList.remove("overflow-hidden");
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll("[data-popup]");
    cards.forEach(card => {
        card.addEventListener("click", function () {
            const popupId = this.getAttribute("data-popup");
            openPopup(popupId);
        });
    });

    // Close popup when clicking outside the content
    document.querySelectorAll("[id^='popup-']").forEach(popup => {
        popup.addEventListener("click", function (e) {
            if (e.target === this) {
                const popupId = this.id.replace("popup-", "");
                closePopup(popupId);
            }
        });
    });
});
