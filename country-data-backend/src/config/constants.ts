export const REST_COUNTRIES_API = 'https://restcountries.com/v3.1/all';
export const REST_COUNTRIES_API_BY_CODE = (code:string)=>{ 
    return `https://restcountries.com/v3.1/alpha/${code}`;
}