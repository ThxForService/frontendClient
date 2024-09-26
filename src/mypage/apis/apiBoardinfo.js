import apiRequest from "@/commons/libs/apiRequest";
import requestData from "@/commons/libs/requestData";

export const listBoardData = (search) => {

    search = search ?? {};
    let qs = Object.entries(search)
      .map(([k, v]) => `${k}=${v}`)
      .join('&');
  
    qs = qs ? `?${qs}` : qs;

    const url = `/board/mylist${qs}`;

    console.log(url)
  return requestData(url);  
};