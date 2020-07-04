const getCopyrightYear = () => {
  document.getElementById('footer-copyright')
  .appendChild(document.createTextNode(
    new Date().getFullYear()
  ));
};

export default getCopyrightYear();