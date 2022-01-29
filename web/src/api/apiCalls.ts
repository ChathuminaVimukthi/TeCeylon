function getApiServerUrl(): String {
    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
        return "http://127.0.0.1:10001";
    } else {
        return window.location.origin;
    }
}


const JSON_HEADER = {
    'Content-Type': 'application/json'
};

function processJsonBody(json: { [key: string]: any }) {
    if (json.error) {
        const err: any = new Error(json.error);
        err.status = json.status;
        return Promise.reject(err)
    }
    return json
}

export interface UserProfile {
    gender: string,
    name: {
        title: string,
        first: string,
        last: string
    }
}

export interface UserProfileResp {
    results: UserProfile []
}


export async function getUsers(): Promise<UserProfileResp> {
    /*
    * This is just a sample api call. Use what-ever your backend api for this.
    * When using backend you can use getApiServerUrl() to get the server url.
    *
    * Eg: `${getApiServerUrl()}/portal-api/users`
     */
    const resp = await fetch(`https://randomuser.me/api/`, {
        method: 'GET',
        headers: JSON_HEADER,
        // body: JSON.stringify(regReq)
    })
    const json = await resp.json();
    return processJsonBody(json) as UserProfileResp
}