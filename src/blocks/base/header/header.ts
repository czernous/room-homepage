/* eslint-disable no-unused-expressions */
// eslint-disable-next-line no-unused-vars
export default function Header(e: Event) {
  const minimizedMenu = document.querySelector('.mobile-menu');
  const expandedMenu = document.querySelector('.mobile-menu__open');
  // eslint-disable-next-line no-unused-vars
  const toggleBtns = document.querySelectorAll('.mobile-menu .btn');

  if (!e) return;
  const target = e.target as HTMLTextAreaElement;
  if (
    target === document.querySelector('.navbar__icon-close') ||
    target === document.querySelector('.navbar__icon-open') ||
    target.classList.contains('btn')
  ) {
    Array.from([minimizedMenu, expandedMenu]).forEach((el) => {
      el?.classList.contains('hidden')
        ? el?.classList.remove('hidden')
        : el?.classList.add('hidden');
    });

    console.log(e.target);
  }
}
