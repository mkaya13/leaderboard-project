export const warningMessageFunction = (formTag, warningMessageTag, res) => {
  warningMessageTag.innerText = res;
  formTag.appendChild(warningMessageTag);
  setTimeout(() => {
    formTag.removeChild(formTag.lastChild);
  }, 3000);
};

export default { warningMessageFunction };
