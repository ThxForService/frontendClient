import requestData from "@/commons/libs/requestData";
import apiRequest from "@/commons/libs/apiRequest";
import { Cookies } from "react-cookie";

export const getProfessors = (skey) =>
    requestData(`/member/account/professors?skey=${skey?.trim()}`);

export const apiGet = (memberSeq) => requestData(`/member/account/${memberSeq}`);

