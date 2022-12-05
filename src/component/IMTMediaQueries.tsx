import React from "react";
import Media, { QueryResults } from "react-media";

const queries = {
  justWidePhone: { minWidth: 425 },
  xs: { maxWidth: 576 },
  sm: { minWidth: 576 },
  tillMD: { maxWidth: 767 },
  md: { minWidth: 768 },
  lg: { minWidth: 992 },
  xl: { minWidth: 1200 },
  xxl: { minWidth: 1600 },
};

type Queries = typeof queries;

const IMTMediaQueries: React.FC<{
  children: (matches: QueryResults<Queries>) => React.ReactNode;
}> = ({ children }) => {
  return (
    <div>
      <Media queries={queries}>{children}</Media>
    </div>
  );
};

export default IMTMediaQueries;
