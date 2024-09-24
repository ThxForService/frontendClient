import requestData from '@/commons/libs/requestData';

// export const getList = (page, limit = 20, sopt = '', skey = '') => {
//     const queryParams = new URLSearchParams({
//         page: page > 0 ? page : 1, // page는 1 이상의 값으로 설정
//         limit: limit > 0 ? limit : 20, // limit은 1 이상의 값으로 설정
//         sopt: sopt,
//         skey: skey
//     }).toString();

//     // Debugging: log the parameters to the console
//     console.log('Page:', page);
//     console.log('Limit:', limit);
//     console.log('Sopt:', sopt);
//     console.log('Skey:', skey);
//     console.log('Request URL:', `/survey?${queryParams}`);

//     return requestData(`/survey?${queryParams}`, 'GET');
// };

// export const getList = (page, limit = null, sopt = null, skey = null) => {
//     // Construct the URL with the necessary query parameters
//     return requestData(`/survey?page=${page || 1}${limit !== null ? `&limit=${limit}` : ''}${sopt ? `&sopt=${sopt}` : ''}${skey ? `&skey=${skey}` : ''}`, 'GET');
// };

export const getInfo = (sNo) => requestData(`/survey/info/${sNo}`);



export const getList = (page) => requestData(`/survey?page=${page || 1}`);

