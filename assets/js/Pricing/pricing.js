document.querySelectorAll(".dropdown-menu > .dropdown-item").forEach(
    (item) => {
        item.addEventListener("click", function (event) {
            event.preventDefault();
            document.getElementById("MaxC-choose-plan-drop-down").textContent = this.textContent;
            document.getElementById("maxc-total-amount-in-the-card").textContent = `Total amount payable for ${this.textContent}:`;
            document.getElementById("maxc-total-amount-to-be-paid-finally").classList.remove("d-none");
            document.getElementById("maxc-total-amount-to-be-paid-finally").textContent = `$ ${this.dataset.info}`;
        });
    }
);