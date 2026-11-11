document.addEventListener("DOMContentLoaded", () => {
            const path = document.querySelector('.heart-path');
            const length = path.getTotalLength();

            path.style.strokeDasharray = length;
            path.style.strokeDashoffset = length;

            path.getBoundingClientRect();
            path.style.transition = 'stroke-dashoffset 2.5s ease-in-out';

            setTimeout(() => {
                path.style.strokeDashoffset = '0';
            }, 100);
        });