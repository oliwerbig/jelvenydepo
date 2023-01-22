import React from "react";

const SectionBase = (props: React.PropsWithChildren) => {
  return (
    <section {...props} className="bg-white dark:bg-gray-900">
      {props.children}
    </section>
  );
};

export default SectionBase;
