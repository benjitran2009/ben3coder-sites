if (![ "/", "/index.html" ].includes(document.location.pathname)) {
    document.body.innerHTML = `
        <div class="d-flex justify-content-center align-items-center vh-100">
            <div class="alert alert-danger text-center" role="alert">
                <h4 class="alert-heading">404 Not Found</h4>
                <p>The page you are looking for could not be found.</p>
                <hr>
                <a href="/" class="btn btn-primary">Return to Homepage</a>
            </div>
        </div>
    `;
}
