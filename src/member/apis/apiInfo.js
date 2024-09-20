import requestData from "@/commons/libs/requestData";

export const getProfessors = (skey) =>
    requestData(`/member/account/professors?skey=${skey?.trim()}`);