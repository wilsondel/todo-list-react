import React from "react";
import ContentLoader from "react-content-loader";

const MyLoader = (props) => (
    <ContentLoader
        speed={1.5}
        width={500}
        height={100}
        viewBox="0 0 500 160"
        backgroundColor="#ababab"
        foregroundColor="#d6d6d6"
        {...props}
    >
        <rect x="10" y="35" rx="3" ry="3" width="700" height="14" />
    </ContentLoader>
);

export {MyLoader};
