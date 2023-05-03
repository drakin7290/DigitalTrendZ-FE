

export default function getUser() {
    const checkout = typeof window !== 'undefined' ? sessionStorage.getItem('user_info') : null
    if(checkout == null) {
        return {name: "", image: "", session: false};
    } else {
    return JSON.parse(checkout);
    }
}