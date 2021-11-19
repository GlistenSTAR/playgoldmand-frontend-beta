import jwt from 'jwt-decode';

export const adminSecurity = (token, router) => {
    window.localStorage.setItem("adminToken", token);
    router.push('/admin');
}

export const adminLogout = (router) => {
    window.localStorage.setItem("adminToken", "");
    router.push('/superLogin');
}

export const adminCheckLogin = (router, toast) => {
    const token = window.localStorage.getItem("adminToken");
    if (token) {
        
    } else {
        router.push('/superLogin');
        toast.error("Plese login now!");
    };
}
