import { useEffect, useRef } from "react";

/**
 * useEffect를 대신하는 hook
 * 첫 렌더링할 때 실행되지 않는다.
 */
const useDidMountEffect = (func, deps) => {
  const didMount = useRef(false);

  useEffect(() => {
    if (didMount.current) func();
    else didMount.current = true;
  }, deps);
};

export default useDidMountEffect;
