export const updateEventMessage = (formTag, messageTag, res) => {
  messageTag.innerText = res;
  formTag.appendChild(messageTag);
  setTimeout(() => {
    formTag.removeChild(formTag.lastChild);
  }, 3000);
};

export default { updateEventMessage };
