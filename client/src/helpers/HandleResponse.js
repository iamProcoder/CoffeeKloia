
const Result = (res) => {
    const data = res.data;
    if (res.statusText !== "OK") {
        const error = (data && data.message) || res.statusText;
        return Promise.reject(error);
    }

    return data;
}

export const HandleResponse = { Result };