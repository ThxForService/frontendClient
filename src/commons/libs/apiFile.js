import requestData from "./requestData";

// 파일리스트 조회
export const getFiles = (gid, location) => {
    let url = `/file/list/${gid}`;
    if (location) url += `?location=${location}`;

    return requestData(url);
}

//파일 단일 조회
export const getFile = (seq) => requestData(`/file/info/${seq}`);

//파일 삭제
export const deleteFiles = (gid, location) => {
    let url = `/file/deletes/${gid}`
    if (location) url += `?location=${location}`;

    return requestData(url, "DELETE");
};

export const deleteFile = (seq) => requestData(`/file/delete/${seq}`,'DELETE');