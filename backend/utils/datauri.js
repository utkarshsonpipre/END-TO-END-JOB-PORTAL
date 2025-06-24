// utils/datauri.js

import DataUriParser from "datauri/parser.js";
import path from "path";

// Safely converts uploaded file to Data URI for cloud upload
const getDataUri = (file) => {
    if (!file) return null;

    const parser = new DataUriParser();
    const extName = path.extname(file.originalname).toString();
    return parser.format(extName, file.buffer);
};

export default getDataUri;
