// backgroundUtils.js

export function setBackgroundByRoute(path) {
    // Define the paths where you want to set the background image
    const allowedPaths = ['/login', '/register', '/forgotpassword'];

    if (allowedPaths.includes(path)) {
        // Set background image to a URL (replace with your desired image URL)
        document.body.style.backgroundImage = 'url("https://images.unsplash.com/photo-1497864149936-d3163f0c0f4b?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")';
    } else {
        // Set background image to none
        document.body.style.backgroundImage = 'none';
    }
}
