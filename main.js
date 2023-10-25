document.addEventListener('DOMContentLoaded', function () {
    const listItems = document.querySelectorAll('#image-list li');
    const previewImage = document.getElementById('preview-image');
    const imageTitle = document.querySelector('.image-title');
    const linkButton = document.querySelector('.link-button');

    listItems.forEach((item) => {
        item.addEventListener('click', function () {
            const selectedImage = item.getAttribute('data-image');
            const selectedTitle = item.getAttribute('data-title');
            const selectedLink = item.getAttribute('data-link');

            previewImage.src = selectedImage;
            imageTitle.textContent = selectedTitle;
            linkButton.href = selectedLink;
        });
    });
});
