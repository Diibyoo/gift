document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".section");
    const modal = document.getElementById("myModal");
    const modalFrame = document.getElementById("modalFrame");
    const closeModal = document.getElementById("closeModal");

    sections.forEach((section) => {
        section.addEventListener("click", () => {
            const externalURL = section.getAttribute("data-url");
            modalFrame.src = externalURL;
            modal.style.display = "block";
            document.body.style.overflow = "hidden"; // Prevent scrolling when the modal is open
        });
    });

    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
        modalFrame.src = "";
        document.body.style.overflow = "auto"; // Re-enable scrolling when the modal is closed
    });

    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
            modalFrame.src = "";
            document.body.style.overflow = "auto"; // Re-enable scrolling when the modal is closed
        }
    });
});
