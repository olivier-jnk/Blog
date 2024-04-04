const cookieBanner = document.getElementById("cookie-banner")

function depopCookies() {
    cookieBanner.classList.add("opacity-0", "translate-y-full");
    setTimeout(() => {
        cookieBanner.classList.add("hidden");
    }, 500);
}