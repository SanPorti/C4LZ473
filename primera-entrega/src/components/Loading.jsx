const Loading = () => {
    return (
        <div className="container container-loading">
            <div className="row">
                <div className="col text-center">
                    <div className="spinner-border text-warning spinner-size" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Loading