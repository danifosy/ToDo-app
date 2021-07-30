// Retrieves the key and the value from the local storage
export function ReadLocalStorage(key, defaultValue) {
  const storageItem = localStorage.getItem(key);

  // If it's empty, give me whatever I gave you before
  if (!storageItem) {
    return defaultValue;
  }

  // Converts the string from the LS into whatever value I set
  const LSdata = JSON.parse(storageItem);
  return LSdata;
}

// Creates a string out of my value and turns it into a string
export function WriteLocalStorage(key, value) {
  const CodeData = JSON.stringify(value);

  localStorage.setItem(key, CodeData);
}

ReadLocalStorage("task", "sleep");
