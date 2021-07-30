export function ReadLocalStorage(key, defaultValue) {
  const storageItem = localStorage.getItem(key);

  if (!storageItem) {
    return defaultValue;
  }

  const LSdata = JSON.parse(storageItem);
  return LSdata;
}

export function WriteLocalStorage(key, value) {
  const CodeData = JSON.stringify(value);

  localStorage.setItem(key, CodeData);
}
