import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} | ReactApp`;
  }, []);
};

export default useTitle;
