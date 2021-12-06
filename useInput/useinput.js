export const useInput = (initialValue, vaild) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    let willUpdate = true;
    if (typeof vaild === "function") {
      willUpdate = vaild(value);
    }
    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };
};
