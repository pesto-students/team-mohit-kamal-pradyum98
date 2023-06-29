const displayWindowProperties = () => {
    console.log(navigator.userAgent);
    console.log(screen.width, screen.height);
    console.log(location.href, location.pathname);
    sessionStorage.setItem('sesKey','123');
    localStorage.setItem('sesKey', '123');
    console.log(sessionStorage);
    console.log(localStorage);
};
