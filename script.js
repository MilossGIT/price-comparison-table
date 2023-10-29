document.addEventListener('DOMContentLoaded', function () {
  const priceColumns = document.querySelectorAll('.price-column');
  const features = document.querySelectorAll('.feature');
  const ctaButtons = document.querySelectorAll('.cta');

  features.forEach((feature) => {
    feature.addEventListener('click', function () {
      feature.classList.toggle('highlighted');
    });
  });

  priceColumns.forEach((column) => {
    const ctaButton = column.querySelector('.cta');
    ctaButton.addEventListener('click', function () {
      priceColumns.forEach((col) => {
        col.classList.remove('most-popular');
      });

      column.classList.add('most-popular');
    });
  });
});
