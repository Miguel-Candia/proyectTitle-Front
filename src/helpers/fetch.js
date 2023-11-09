
const baseurl= import.meta.env.VITE_API_BASE_URL;

export const fetchSinToken = async( endpoint,data,method = 'GET' ) => {

    const url= `${baseurl}/${endpoint}`;

    if( method ==='GET' ){
        const resp = await fetch (url);
        return await resp.json();
    }else{
        console.log('Ver: '+url);

        const resp = await fetch (url,{
            method,
            headers:{
                'Content-type':'application/json'
            },
            body: JSON.stringify(data)
         })

        return await resp.json();
    }


}

export const fetchConToken = async( endpoint,data,method = 'GET' ) => {

    const url= `${baseurl}/${endpoint}`;
    const token = localStorage.getItem('token') || '';

    if( method ==='GET' ){
        const resp = await fetch (url,{
            headers:{
                'x-token':token
            }

        });
        return await resp.json();
    }else{

        const resp = await fetch (url,{
            method,
            headers:{
                'Content-type':'application/json',
                'x-token':token
            },
            body: JSON.stringify(data)
         })

        return await resp.json();
    }


}